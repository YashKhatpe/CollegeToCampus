import PropTypes from "prop-types";

const FrameComponent19 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-silver flex flex-col items-start justify-start pt-[23px] pb-[19px] pl-[26px] pr-[3px] box-border gap-[26px] min-w-[337px] max-w-full text-left text-xl text-gray-300 font-lato mq800:min-w-full ${className}`}
    >
      <div className="w-[449px] h-[203px] relative rounded-lg bg-silver hidden max-w-full" />
      <div className="flex flex-row items-start justify-start">
        <img
          className="h-[17px] w-[18px] relative min-h-[17px] z-[2]"
          alt=""
          src="/star-filled1.svg"
        />
        <img
          className="h-[17px] w-[17px] relative min-h-[17px] z-[1]"
          alt=""
          src="/star-filled-13.svg"
        />
        <div className="flex flex-row items-start justify-start">
          <img
            className="h-[17px] w-[18px] relative min-h-[17px] shrink-0 z-[2]"
            alt=""
            src="/star-filled1.svg"
          />
          <img
            className="h-[17px] w-[17px] relative min-h-[17px] shrink-0 z-[3] ml-[-1px]"
            alt=""
            src="/star-filled-13.svg"
          />
          <img
            className="h-[17px] w-[17px] relative min-h-[17px] shrink-0 z-[4] ml-[-1px]"
            alt=""
            src="/star-filled-13.svg"
          />
        </div>
      </div>
      <div className="self-stretch relative z-[1] mq450:text-base">
        <p className="m-0">
          The interactions hub provided invaluable support during my job search
          journey.
        </p>
      </div>
      <div className="w-[181px] relative font-semibold inline-block z-[1] text-black">
        <p className="m-0">Emily Johnson</p>
        <p className="m-0 text-base text-gray-400">San Francisco</p>
      </div>
    </div>
  );
};

FrameComponent19.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent19;
