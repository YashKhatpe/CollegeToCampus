import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import Footer4 from "../components/Footer4";
import Navbar1 from "../components/Navbar1";
import React, { useState } from 'react';
import axios from 'axios';

const ResumeScanner1 = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [response, setResponse] = useState('');
  const [load, setLoad] = useState(false);
  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDescription);

    try {
      setLoad(true)
      console.log(load)
      const res = await axios.post('http://localhost:8000/api/resume/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(res.data.response);
      setLoad(false)
    } catch (error) {
      setResponse('Error uploading file');
      setLoad(false)
    }
  };

  return (
    <>
    <Navbar1/>
    <div className="w-full h-full max-h-fit relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start">
      <FrameComponent10 />
      
      <section className="w-full px-12 flex flex-col items-start justify-center p-2 box-border my-12">
        <div className="ml-auto mr-auto text-10xl text-center font-poppins font-bold">
            Optimize your resume with AI
        </div>
        {/* <FrameComponent9 /> */}
        <div className="w-full max-w-5xl mr-auto ml-auto">
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
            encType="multipart/form-data"
          >

        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm bg-[#eee] text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
                <textarea
            name="jobDescription"
            value={jobDescription}
            onChange={handleDescriptionChange}
            placeholder="Enter Job Description..."
            className="mt-1 block w-full text-sm bg-[#eee] text-gray-500 p-2 rounded-md"
          />
          
            <button
              type="submit"
              className="w-full flex items-center justify-center border border-3 cursor-pointer border-primary hover:bg-primary text-primary hover:text-white py-2 rounded-md transition duration-500 ease-in-out"
              disabled={load}
              >
                {load ? 'Submitting...' : 'Submit'}
              </button>
          
              
          </form>
          {response && <pre className="p-2 bg-slate-500 rounded-md mt-3 text-white overflow-x-auto">{response}</pre>}
        </div>
        
      </section>
      <Footer4 />
    </div>
    </>
  );
};

export default ResumeScanner1;
