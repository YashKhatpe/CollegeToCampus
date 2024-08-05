import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useState } from "react";
import axios from 'axios';

const UserForm = () => {
  const { user, isAuthenticated } = useKindeAuth();
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profilePicture: null,
    email: '',
    contactNumber: '',
    gender: '',
    clgName: '',
    cmpName: '',
    city: '',
    degree: '',
    cmpUrl: '',
    desg: '',
    user_type: 'student'
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      firstName: user.given_name,
      lastName: user.family_name,
      email: userType === 'student' ? user.email : prevData.email,
      user_type: userType,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8000/add_user', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Personal details</h1>
      <div className="flex mb-4">
        <button
          className={`w-1/2 p-4 ${userType === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setUserType('student')}
        >
          Student
        </button>
        <button
          className={`w-1/2 p-4 ${userType === 'employee' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setUserType('employee')}
        >
          Employee
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">First name</label>
            <input
              type="text"
              name="firstName"
              value={user.given_name}
              onChange={handleChange}
              disabled
              className="mt-1 p-2 bg-[#eee] block w-full border  cursor-not-allowed border-gray-300 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Last name</label>
            <input
              type="text"
              name="lastName"
              value={user.family_name}
              onChange={handleChange}
              disabled
              className="mt-1 p-2 bg-[#eee] block w-full border  cursor-not-allowed border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
            className="mt-1 block w-full text-sm bg-[#eee] cursor-not-allowed text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        {userType === 'student' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                disabled
                onChange={handleChange}
                className="mt-1 p-2 block w-full bg-[#eee] cursor-not-allowed border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">College Name</label>
              <input
                type="text"
                name="clgName"
                value={formData.clgName}
                placeholder="Eg. DBIT"
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Eg. B.E BTech"
                required
              />
            </div>
          </>
        )}
        {userType === 'employee' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Official Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="name@company.com"
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                name="cmpName"
                type="text"
                value={formData.cmpName}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Eg. TCS"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Website URL</label>
              <input
                type="text"
                name="cmpUrl"
                value={formData.cmpUrl}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Eg. www.name@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role in Company</label>
              <input
                type="text"
                name="desg"
                value={formData.desg}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                placeholder="Eg. HR Manager"
                required
              />
            </div>
          </>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact number</label>
          <div className="flex">
            <input
              type="text"
              name="countryCode"
              value="+91"
              className="mt-1 p-2 block w-[10%] border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
              disabled
            />
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 p-2 ml-4 block w-[90%] border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Eg. Mumbai"
            required
          />
        </div>
        <button type="submit" className="w-full flex items-center justify-center border border-3 cursor-pointer border-primary hover:bg-primary text-primary hover:text-white py-2 rounded-md transition duration-500 ease-in-out">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserForm
