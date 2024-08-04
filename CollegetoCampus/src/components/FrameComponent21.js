import PropTypes from "prop-types";

const FrameComponent21 = ({ className = "" }) => {
  return (
    <section
      className={`font-poppins self-stretch flex flex-row items-start justify-center pt-0 pb-[19px] pl-[93px] pr-5 box-border max-w-full shrink-0 text-left text-xl text-gray-300 font-poppins mq800:pl-[23px] mq800:box-border mq1100:pl-[46px] mq1100:box-border ${className}`}
    >
      <div className="font-poppins w-[947px] flex flex-row items-start justify-center gap-[49px] max-w-full gap-6 mq1100:flex-wrap">
        <div className="flex-1 rounded-lg bg-silver flex flex-col items-start justify-start pt-[23px] pb-5 pl-[26px] pr-[3px] box-border gap-[29px] max-w-full">
          <div className="w-[449px] h-[203px] relative rounded-lg bg-silver hidden max-w-full" />
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-4 w-[18px] relative min-h-[16px] z-[2]"
              alt=""
              src="/star-filled-2.svg"
            />
            <img
              className="h-4 w-[17px] relative min-h-[16px] z-[1]"
              alt=""
              src="/star-filled-3.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-4 w-[18px] relative min-h-[16px] shrink-0 z-[2]"
                alt=""
                src="/star-filled-2.svg"
              />
              <img
                className="h-4 w-[17px] relative min-h-[16px] shrink-0 z-[3] ml-[-1px]"
                alt=""
                src="/star-filled-3.svg"
              />
              <img
                className="h-4 w-[17px] relative min-h-[16px] shrink-0 z-[4] ml-[-1px]"
                alt=""
                src="/star-filled-3.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[23px] font-poppins">
            <div className="self-stretch relative z-[1] mq450:text-base font-poppins">
              <p className="m-0">
                The interactions hub provided invaluable support during my job
                search journey.
              </p>
            </div>
            <div className="font-poppins w-[181px] relative font-semibold inline-block z-[1] text-black ">
              <p className="m-0">Emily Johnson</p>
              <p className="m-0 text-base text-gray-400">San Francisco</p>
            </div>
          </div>
        </div>
        <div className="font-poppins flex-1 rounded-lg bg-silver flex flex-col items-start justify-start pt-[23px] pb-[18px] pl-[26px] pr-0.5 box-border gap-6 max-w-full">
          <div className="w-[449px] h-[202px] relative rounded-lg bg-silver hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-4 w-[17px] relative min-h-[16px] z-[2]"
                  alt=""
                  src="/star-filled-3.svg"
                />
                <img
                  className="h-4 w-[18px] relative min-h-[16px] z-[1]"
                  alt=""
                  src="/star-filled-2.svg"
                />
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-4 w-[17px] relative min-h-[16px] shrink-0 z-[2]"
                    alt=""
                    src="/star-filled-3.svg"
                  />
                  <img
                    className="h-4 w-[18px] relative min-h-[16px] shrink-0 z-[3] ml-[-1.5px]"
                    alt=""
                    src="/star-filled-2.svg"
                  />
                  <img
                    className="h-4 w-[18px] relative min-h-[16px] shrink-0 z-[4] ml-[-1.5px]"
                    alt=""
                    src="/star-filled-2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch relative z-[1] mq450:text-base font-poppins">
                <p className="m-0">
                  The interactions hub provided invaluable support during my job
                  search journey.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[162px] relative font-poppins font-semibold inline-block z-[1] text-black ">
            <p className="m-0">Emily Johnson</p>
            <p className="m-0 text-base text-gray-400 font-poppins">San Francisco</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent21.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent21;
