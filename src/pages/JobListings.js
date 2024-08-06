
import { useEffect, useState } from "react";
import Checkboxes from "../components/Checkboxes";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import axios from "axios";
const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/job_listing");
        if(response){
          setJobs(response.data);
          console.log(response.data);
        } else {
          setJobs(null);
        }
      } catch (error) {
        
      }
    }
    fetchJobs();
  }, []);
  return (
    <>
    <Navbar1/>
      <div className="font-poppins min-h-screen bg-gray-300 overflow-x-hidden flex flex-col items-center py-4 px-2">
        {/* Header Section */}
        <header className="max-w-6xl flex flex-row items-center text-center mb-8 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-silver mb-4 flex items-center">
            Ab naukri ki tension ko bolo bye!! Find your new job here
            <span className="ml-2 flex items-center">
              <img
                className="w-6 h-6"
                loading="lazy"
                alt="Arrow Down"
                src="/arrow-downcircle.svg"
              />
            </span>
          </h1>
        </header>

        {/* Main Content Section */}
        <section className="max-w-6xl flex flex-row lg:flex-col items-start gap-8 mb-12 px-4">
          {/* Filters Section */}
          <div className="lg:w-1/4 bg-secondary rounded-lg shadow-lg p-4 flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Filters</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Profile</label>
                <input
                  className="w-[90%] border rounded-md p-2 bg-primary text-white"
                  placeholder="e.g. Marketing"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Location</label>
                <input
                  className="w-[90%] border rounded-md p-2 bg-primary text-white"
                  placeholder="e.g. Mumbai"
                  type="text"
                />
              </div>
              <div className="flex flex-row items-start justify-start pt-0 px-[21px] pb-[9px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-1">
                  <div className="self-stretch relative leading-[15px] font-medium z-[1]">
                    Work from home
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-px box-border">
                    <div className="flex-1 flex flex-row items-start justify-start relative">
                      <div className="flex-1 top-[2px] relative leading-[16px] font-medium z-[1]">
                        Part-time
                      </div>
                      <Checkboxes
                        checkboxesLeft="-31px"
                        checkboxesPadding="unset"
                        checkboxesHeight="37px"
                        stateLayerMarginTop="-1.5px"
                        stateLayerMarginLeft="-1px"
                        className="accent-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Desired minimum monthly stipend (₹)
                </label>
                <input
                  className="w-[90%] border rounded-md p-2 accent-primary"
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
                <button className="w-full sm:w-auto bg-primary text-secondary px-4 py-2 rounded-md hover:bg-steelblue">
                  Clear all
                </button>

                <hr className="border-gray-300 w-full sm:w-px" />
                <label className="block text-sm font-bold mb-1">
                  Search with keywords
                </label>
                <input
                  className="w-[90%] border rounded-md  p-2 bg-primary text-white"
                  placeholder="e.g. Keywords"
                  type="text"
                />
                <button className="w-full sm:w-auto bg-primary text-secondary px-4 py-2 rounded-md hover:bg-steelblue">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Job Listings Section */}
          {jobs && (
        <div className="lg:w-3/4 flex flex-col gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-secondary rounded-lg shadow-lg p-4 flex flex-col">
              <h2 className="text-xl font-extrabold">{job.category}</h2>
              <p className="text-sm font-bold">{job.title}</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4"
                    src="/location-on.svg"
                    alt="Location"
                  />
                  <span>{job.location}</span>
                  <span className="ml-5 flex items-center">
                    <img
                      className="w-8 h-4 inline"
                      src="/briefcase1.svg"
                      alt="Duration"
                    />
                    <span className="ml-1">{job.type}</span>
                  </span>
                  <span className="ml-4 flex items-center">
                    <img
                      className="w-4 h-4 inline"
                      src="/rupee.svg"
                      alt="Salary"
                    />
                    <span className="ml-1">{job.salary_from}-{job.salary_to}</span>
                  </span>
                </div>
                <p>Posted on {job.application_deadline}</p>
              </div>
              <div className="flex justify-between items-center">
                {job.logo ? (

                <img
                  className="w-16 h-16"
                  src={job.logo}
                  alt="Organization Logo"
                />
              ): (
                <img
                  className="w-16 h-16"
                  src="/organization-building-icon-1@2x"
                  alt="Organization Logo"
                />
                
              )}
                <button className="bg-primary text-white px-4 py-2 rounded-md border border-gray-300 hover:bg-steelblue">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

            {/* <div className="bg-secondary rounded-lg shadow-lg p-4 flex flex-col">
              <h2 className="text-xl font-extrabold">Market Research</h2>
              <p className="text-sm font-bold">CavinKare Private Limited</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4"
                    src="/location-on.svg"
                    alt="Location"
                  />
                  <span>Madhya Pradesh, Gujarat, Rajasthan</span>
                  <span className="ml-5 flex items-center">
                    <img
                      className="w-8 h-4 inline"
                      src="/briefcase1.svg"
                      alt="Duration"
                    />
                    <span className="ml-1">3 Weeks</span>
                  </span>
                  <span className="ml-4 flex items-center">
                    <img
                      className="w-4 h-4 inline"
                      src="/rupee.svg"
                      alt="Salary"
                    />
                    <span className="ml-1">3,500-5,000 / week</span>
                  </span>
                </div>
                <p>2 weeks ago</p>
              </div>

              <div className="flex justify-between items-center">
                <img
                  className="w-16 h-16"
                  src="/organization-building-icon-11@2x.png"
                  alt="Company"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-md border border-gray-300 hover:bg-steelblue">
                  Apply
                </button>
              </div>
            </div>

            <div className="bg-secondary rounded-lg shadow-lg p-4 flex flex-col">
              <h2 className="text-xl font-extrabold">Market Research</h2>
              <p className="text-sm font-bold">CavinKare Private Limited</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4"
                    src="/location-on.svg"
                    alt="Location"
                  />
                  <span>Madhya Pradesh, Gujarat, Rajasthan</span>
                  <span className="ml-5 flex items-center">
                    <img
                      className="w-8 h-4 inline"
                      src="/briefcase1.svg"
                      alt="Duration"
                    />
                    <span className="ml-1">3 Weeks</span>
                  </span>
                  <span className="ml-4 flex items-center">
                    <img
                      className="w-4 h-4 inline"
                      src="/rupee.svg"
                      alt="Salary"
                    />
                    <span className="ml-1">3,500-5,000 / week</span>
                  </span>
                </div>
                <p>2 weeks ago</p>
              </div>

              <div className="flex justify-between items-center">
                <img
                  className="w-16 h-16"
                  src="/organization-building-icon-11@2x.png"
                  alt="Company"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-md border border-gray-300 hover:bg-steelblue">
                  Apply
                </button>
              </div>
            </div> */}
          
        </section>

        {/* Promotion Banner Section */}
        <section className="max-w-6xl bg-secondary rounded-lg shadow-lg p-4 flex flex-col items-center text-center ">
          <h3 className="text-xl font-semibold">
            Get Internship and Job Preparation course FREE
          </h3>
          <p className="text-sm font-regular">
            Choose from Web Dev., React, Java, Python & more
          </p>
          <button className="bg-primary text-white px-4 py-2 rounded-md border border-gray-300 hover:bg-steelblue">
            Enroll now
          </button>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default JobListings;
