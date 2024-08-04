import PropTypes from "prop-types";

const FrameComponent18 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-silver flex flex-col items-start justify-start pt-[23px] pb-[18px] pl-[26px] pr-0.5 box-border gap-[26px] max-w-full text-left text-xl text-gray-300 font-lato ${className}`}
    >
      <div className="w-[449px] h-[202px] relative rounded-lg bg-silver hidden max-w-full" />
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <div className="flex flex-row items-start justify-start">
          <img
            className="h-[17px] w-[17px] relative min-h-[17px] z-[2]"
            alt=""
            src="/star-filled-13.svg"
          />
          <img
            className="h-[17px] w-[18px] relative min-h-[17px] z-[1]"
            alt=""
            src="/star-filled1.svg"
          />
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-[17px] w-[17px] relative min-h-[17px] shrink-0 z-[2]"
              alt=""
              src="/star-filled-13.svg"
            />
            <img
              className="h-[17px] w-[18px] relative min-h-[17px] shrink-0 z-[3] ml-[-1.5px]"
              alt=""
              src="/star-filled1.svg"
            />
            <img
              className="h-[17px] w-[18px] relative min-h-[17px] shrink-0 z-[4] ml-[-1.5px]"
              alt=""
              src="/star-filled1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
          <p className="m-0">
            The interactions hub provided invaluable support during my job
            search journey.
          </p>
        </div>
      </div>
      <div className="w-[196px] relative font-semibold inline-block z-[1] text-black">
        <p className="m-0">Emily Johnson</p>
        <p className="m-0 text-base text-gray-400">San Francisco</p>
      </div>
    </div>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;
