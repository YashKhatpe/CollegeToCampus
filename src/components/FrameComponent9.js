import PropTypes from "prop-types";
import { Label, FileInput } from "flowbite-react";
const FrameComponent9 = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-start gap-10 text-center text-2xl text-black font-lato ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start pt-0 px-0 pb-8 gap-8">
        <div className="w-full max-w-lg text-base tracking-[0.1px] leading-5 font-medium">{`Upload Your Resume, And Get Smart Recommendations `}</div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-start px-2 gap-4 text-lg">
          <div className="w-full sm:w-1/3 text-sm tracking-[0.1px] leading-5 font-light">
            Choose your Resume
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-silver p-4 rounded-sm gap-4">
            <div className="flex flex-row items-center gap-2">
              {/* <img
                className="h-10 w-10 pt-4"
                loading="lazy"
                alt=""
                src="/upload-cloud.svg"
              /> */}
              <div className="flex flex-col items-start">
                {/* <div className="text-sm tracking-[0.1px] leading-5 font-medium">Drag and drop file here</div>
                <div className="text-xs tracking-[0.1px] leading-5 font-light">file type .pdf</div> */}
                {/* <div className="mb-2 block pl-24">
                  <Label htmlFor="file-upload" value="Upload file" />
                </div>
                <FileInput id="file-upload" /> */}
              </div>
              <div className="flex w-full items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
    </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start pb-28 sm:pb-20 text-left text-xl sm:text-4xl mq550:hidden">
        <div className="w-full max-w-5xl bg-silver p-10 sm:p-20 rounded-md">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{`Your resume analysis `}</h1>
          <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-10 text-lg sm:text-xl font-roboto">
            <div className="flex flex-col items-start justify-start gap-8">
              <div className="w-48 h-48 relative mq750:hidden">
                <div className="absolute inset-0 rounded-full border border-gray-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-medium">75%</div>
                </div>
              </div>
              <div className="text-sm leading-6 font-semibold">
                <p className="m-0">First name : Raj</p>
                <p className="m-0">Last name : amol</p>
                <p className="m-0">Email : raj123@gmail.com</p>
                <p className="m-0">Phone number : +91 9999999999</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-8 sm:text-2xl text-sm">
              <div>
                <p className="text-lg font-medium">Good resume</p>
                <p>Here are the things you can improve in your resume:</p>
                <ul className="list-disc pl-5">
                  <li>Add project link to your resume.</li>
                  <li>
                    In experience, add what you have achieved rather than time
                    period.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap items-center justify-center gap-4 text-base">
            <button className="bg-gray-300 p-4 rounded-xl">Python</button>
            <button className="bg-gray-300 p-4 rounded-xl">Java</button>
            <button className="bg-gray-300 p-4 rounded-xl">Django</button>
            <button className="bg-gray-300 p-4 rounded-xl">Applets</button>
            <button className="bg-gray-300 p-4 rounded-xl">Flask</button>
            <button className="bg-gray-300 p-4 rounded-xl">Web dev</button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 px-5 text-3xl text-gray-300">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold">{`Contact us for Opportunities `}</h1>
          <p className="text-lg">
            Reach out for support in your job search and training needs.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-start py-10 px-2">
        <form className="w-full max-w-lg bg-silver p-8 rounded-md">
          <div className="flex flex-col gap-4">
            <label className="text-lg text-gray-300">Your First Name</label>
            <input
              className="w-full bg-gray-300 p-4 rounded-md"
              placeholder="Enter your first name"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label className="text-lg text-gray-300">Your Email Address</label>
            <input
              className="w-full bg-gray-300 p-4 rounded-md"
              placeholder="Enter your email address"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label className="text-lg text-gray-300">Your Message</label>
            <input
              className="w-full bg-gray-300 p-4 rounded-md"
              placeholder="Type your message here"
              type="text"
            />
          </div>
          <button className="mt-6 w-full bg-gray-300 py-4 rounded-md text-center text-white">
            Submit Your Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
