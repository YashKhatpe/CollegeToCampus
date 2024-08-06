import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

const Navbar1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { register, login, isAuthenticated, logout, isLoading, user } = useKindeAuth();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isAuthenticated]);

  return (
    <Navbar className="bg-primary text-[17px] font-poppins h-20 px-7 max-w-full" fluid>
      <Navbar.Brand className="mt-3 mq450:flex mq450:justify-center mq450:max-w-full mq350:hidden" href="/">
        <img src="/logo-3@2x.png" className="mr-3 h-10 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex mq910:hidden md:hidden">
        <Link to="/" className="nav-class">Home</Link>
        <Link className="nav-class" to="/joblisting">Job Listings</Link>
        <Link className="nav-class" to="/training">Training</Link>
        <Link className="nav-class" to="/resources">Resources</Link>
        <Link className="nav-class" to="/interaction">Interaction</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <div className="mq910:hidden ">
            <Dropdown
               className="bg-silver"
              arrowIcon={false}
              inline
              label={<Avatar alt="User settings" img={user.picture} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.given_name}</span>
                <span className="block truncate text-sm font-medium ">{user.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <div className="flex items-center mq910:hidden gap-4">
            <button onClick={register} className="border-2 border-solid border-gray-100 text-white py-1 pl-3 pr-4 hover:bg-white hover:text-primary rounded transition duration-500 ease-in-out ">Sign Up</button>
            <button onClick={login} className="bg-white py-1.5 text-primary pl-3 pr-4 hover:bg-slate-400 rounded transition duration-500 ease-in-out ">Login</button>
          </div>
        )}
      </div>
      <div className="hidden mq910:block text-white">
        <Dropdown
          arrowIcon={false}
          inline
          label={<img src="/menu.webp" width={30} height={30} alt="Menu" />}
        >
          <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
          <Dropdown.Item as={Link} to="/joblisting">Job Listings</Dropdown.Item>
          <Dropdown.Item as={Link} to="/training">Training</Dropdown.Item>
          <Dropdown.Item as={Link} to="/resources">Resources</Dropdown.Item>
          <Dropdown.Item as={Link} to="/interaction">Interaction</Dropdown.Item>
          {isLoggedIn ? (
            <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
          ) : (
            <>
              <Dropdown.Item onClick={register}>Sign Up</Dropdown.Item>
              <Dropdown.Item onClick={login}>Log In</Dropdown.Item>
            </>
          )}
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Navbar1;
