import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-silver flex flex-col items-start justify-start pt-8 pb-[45px] pl-[35px] pr-[3px] box-border gap-14 max-w-full text-left text-xl text-gray-300 font-lato gap-7 ${className}`}
    >
      <div className="w-[613px] h-72 relative rounded-lg bg-silver hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full gap-5">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-6 w-6 relative min-h-[24px] z-[2]"
              alt=""
              src="/star-filled2.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px] z-[1]"
              alt=""
              src="/star-filled2.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-6 w-6 relative min-h-[24px] shrink-0 z-[2]"
                alt=""
                src="/star-filled2.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px] shrink-0 z-[3] ml-[-2px]"
                alt=""
                src="/star-filled2.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px] shrink-0 z-[4] ml-[-2px]"
                alt=""
                src="/star-filled2.svg"
              />
            </div>
          </div>
          <div className="self-stretch relative z-[1] mq450:text-base">
            <p className="m-0">
              The interactions hub provided invaluable support during my job
              search journey.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[43px] relative font-semibold inline-block z-[1] text-black">
        <p className="m-0">Emily Johnson</p>
        <p className="m-0 text-base text-gray-400">San Francisco</p>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
