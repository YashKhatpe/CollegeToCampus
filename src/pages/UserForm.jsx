import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {useKindeAuth} from '@kinde-oss/kinde-auth-react'
const UserForm = () => {
  const  { user, isAuthenticated } = useKindeAuth();
  if(!isAuthenticated){
    return(

      <>
    Loading..
    </>
    )
  }
  return (
    // <div className="flex justify-center items-center h-screen max-h-full w-screen ">
    // <form className="flex max-w-md flex-col gap-4 w-screen p-[60px] border-solid border-3 border-silver shadow-xl rounded-lg">
    //   <div className="flex flex-row">

      
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="fname" value="First Name" />
    //     </div>
    //     <TextInput id="fname" type="text" value={user.given_name} disabled required />
    //   </div>
    //   <div className="pl-4">
    //     <div className="mb-2 block">
    //       <Label htmlFor="lname" value="Last Name" />
    //     </div>
    //     <TextInput className="" id="lname" type="text" value={user.family_name} disabled required />
    //   </div>
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="email" value="Email" />
    //     </div>
    //     <TextInput id="email" type="email" value={user.email} disabled required />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="pno" value="Your phone Number" />
    //     </div>
    //     <div className="mt-1">
    //             <input type="tel" id="phone" name="phone"
    //                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
    //                    maxLength="12"
    //                    placeholder="123-456-7890"
    //                    required
    //                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"/>
    //         </div>
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="password1" value="Your password" />
    //     </div>
    //     <TextInput id="password1" type="password" required />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="password1" value="Your password" />
    //     </div>
    //     <TextInput id="password1" type="password" required />
    //   </div>
    //   <div>
    //     <div className="mb-2 block">
    //       <Label htmlFor="password1" value="Your password" />
    //     </div>
    //     <TextInput id="password1" type="password" required />
    //   </div>
    //   <div className="flex items-center gap-2">
    //     <Checkbox id="remember" />
    //     <Label htmlFor="remember">Remember me</Label>
    //   </div>
    //   <Button type="submit">Submit</Button>
    // </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 pt-2 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Personal details</h2>
        <form>
          <div className="flex">

          <div className="mb-4 pr-1">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
            <input
              type="text"
              id="first-name"
              className="mt-1 block w-full px-3 py-2 bg-[#eee] cursor-not-allowed border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={user.given_name}
              disabled
              />
          </div>
          <div className="mb-4 pl-1">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              type="text"
              id="last-name"
              className="mt-1 block w-full px-3 py-2 bg-[#eee] cursor-not-allowed border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder={user.family_name}
              disabled
              />
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700">Profile picture (Recommended)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H20C15.6 8 12 11.6 12 16V32C12 36.4 15.6 40 20 40H28C32.4 40 36 36.4 36 32V16C36 11.6 32.4 8 28 8ZM28 4C33.5 4 38 8.5 38 14V34C38 39.5 33.5 44 28 44H20C14.5 44 10 39.5 10 34V14C10 8.5 14.5 4 20 4H28Z"/>
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="profile-picture"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a picture</span>
                    <input id="profile-picture" name="profile-picture" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 bg-[#eee] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  cursor-not-allowed focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled
              placeholder={user.email}
            />
            {/* <p className="mt-1 text-sm text-indigo-600 cursor-pointer">Change email</p> */}
          </div>
          <div className="mb-4">
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Contact number</label>
            <div className="flex mt-1">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">+91</span>
              <input
                type="tel"
                maxLength={10}
                id="phone-number"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
              placeholder="Eg. Mumbai"
            />
            {/* <p className="mt-1 text-sm text-indigo-600 cursor-pointer">Change email</p> */}
            </div>

            <div className="flex">

          <div className="mb-4 pr-1">
            <label htmlFor="college-name" className="block text-sm font-medium text-gray-700">College name</label>
            <input
              type="text"
              id="college-name"
              className="mt-1 block w-full px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Eg. DBIT"
              />
          </div>
          <div className="mb-4 pl-1">
            <label htmlFor="degree-name" className="block text-sm font-medium text-gray-700">Degree pursuing</label>
            <input
              type="text"
              id="degree-name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Eg. B.E or B.tech"
              />
          </div>
          </div>
          <div className="flex items-center justify-center border border-3 cursor-pointer border-primary hover:bg-primary text-primary hover:text-white py-2 rounded-md transition duration-500 ease-in-out"><p>Update</p></div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
