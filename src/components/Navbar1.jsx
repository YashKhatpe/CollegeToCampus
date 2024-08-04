import { Avatar, Dropdown, DropdownHeader, Navbar, NavbarToggle } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Navbar className="bg-primary font-poppins h-20 px-7" fluid >
      <Navbar.Brand className="mt-3 mq450:flex mq450:justify-center mq450:max-w-full mq350:hidden" href="/">
        <img src="/logo-3@2x.png" className="mr-3 h-10 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex  mq910:hidden md:hidden">
      <Link to="/" className="nav-class">Home</Link>
      <Link className="nav-class" to="/joblisting">Job Listings</Link>
        <Link className="nav-class" to="/training">Training</Link>
        <Link className="nav-class" to="/resources">Resources</Link>
        <Link className="nav-class" to="/interaction">Interaction</Link>
      </div>
      <div>

      
        {isLoggedIn ? (
          <div className="mq910:hidden">

        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            
          }
          
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
            </div>
        ): (
          <Link className="nav-class mq910:hidden" to="/signin">Login</Link>
        )}
        </div>
      {/* <div className="hidden mq910:flex ">
        <Navbar.Toggle />
      </div>
          
      <Navbar.Collapse className="max-w-full ">
        <Link href="/" active>
          Home
        </Link>
        <Link href="/joblisting">Job Listings</Link>
        <Link href="/training">Training</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/interaction">Interaction</Link>
      </Navbar.Collapse> */}
      <div className="hidden mq910:block text-white">

       <Dropdown
          arrowIcon={false}
          inline
          label={
            <img src="/menu.webp" width={30} height={30}/>
          }
          
          >
          <Dropdown.Item>Home</Dropdown.Item>
          <Dropdown.Item>Job Listings</Dropdown.Item>
          <Dropdown.Item>Training</Dropdown.Item>
          <Dropdown.Item>Resources</Dropdown.Item>
          <Dropdown.Item>Interaction</Dropdown.Item>
          {isLoggedIn ? (

            <Dropdown.Item>Sign Out</Dropdown.Item>
          ):
          (

            <Dropdown.Item>Log In</Dropdown.Item>
          )}
        </Dropdown>
          </div>
    </Navbar>
  );
}

export default Navbar1;
