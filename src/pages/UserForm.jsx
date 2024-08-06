import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useEffect, useState } from "react";
import axios from 'axios';
import { redirect } from 'react-router-dom';
import HomePage from './HomePage';
import { useNavigate } from 'react-router-dom';
const UserForm = () => {
  const { user, isAuthenticated } = useKindeAuth();
  const [userType, setUserType] = useState('student');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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

  useEffect(() => {
    if (isAuthenticated) {
      const checkUserId = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/check_user_id/?user_id=${user.id}`);
          console.log(response.data.exists);
          if (response.data.exists) {
            navigate('/');
          }
        } catch (error) {
          console.error('Error checking user ID:', error);
        }
      };
      checkUserId();
    }
  }, [isAuthenticated, user, redirect]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      userId: user.id,
      firstName: user.given_name,
      lastName: user.family_name,
      email: userType === 'student' ? user.email : prevData.email,
      user_type: userType,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log(formData);
    try {
      const response = await axios.post('http://localhost:8000/add_user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      });
      if(response) {
        setShowModal(false);
        redirect('/'); 
        console.log('User details updated successfully');
      }
    } catch (error) {
      setError('An error occurred while submitting the form. Please try again.');
      console.error(error);
    }
  };

  if (!isAuthenticated) {
    return <HomePage/>;
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
      <form onSubmit={handleSubmit} className="space-y-6"  encType="multipart/form-data">
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
        {error && (
        <div className="mb-4 p-4 text-red-700 bg-red-100 border border-red-400 rounded">
          {error}
        </div>
      )}
        <button type="submit" className="w-full flex items-center justify-center border border-3 cursor-pointer border-primary hover:bg-primary text-primary hover:text-white py-2 rounded-md transition duration-500 ease-in-out">
          Update
        </button>
      </form>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Success</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">User details updated successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleCloseModal} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm
