import PropTypes from "prop-types";

const FrameComponent17 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1409px] flex flex-row items-start justify-center pt-0 px-5 pb-[161px] box-border max-w-full text-left text-11xl text-black font-single-line-body-base mq750:pb-[68px] mq750:box-border mq1050:pb-[105px] mq1050:box-border ${className}`}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center',     // Center vertically
        margin: '0 auto',         // Center section horizontally within its container
      }}
    >
      <div className="w-[969px] flex flex-col items-end justify-start gap-3.5 max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[21px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-8 max-w-full gap-4 mq1050:flex-wrap">
            <img
              className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover min-w-[314px] min-h-[298px]"
              loading="lazy"
              alt=""
              src="/resources2@2x.png"
            />
            <img
              className="self-stretch w-[454px] relative rounded-lg max-h-full object-cover min-h-[298px] max-w-full mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/resources4@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
            <div className="w-[412px] font-poppins relative inline-block shrink-0 max-w-full">
              <p className="m-0">
                <b>Training Programs</b>
              </p>
              <p className="m-0 text-xs">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-base">
                <span>
                  <span>
                    Engaging courses and resources for career advancement
                  </span>
                </span>
              </p>
            </div>
            <div className="w-[324px] flex flex-col items-end justify-start gap-5 max-w-full">
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-[9px] px-[33px] bg-gray-300 rounded-radius-full overflow-hidden flex flex-row items-start justify-start gap-space-200">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star3.svg"
                  />
                  <div className="relative text-5xl leading-[34px] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[90px] mq450:text-lgi mq450:leading-[27px]">
                    Explore
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x5.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[3px] pr-0.5 box-border max-w-full text-gray-300 font-lato">
          <div className="flex-1 flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[31px] max-w-full gap-[15px] mq1050:flex-wrap">
              <img
                className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-w-[314px] min-h-[298px] z-[1]"
                loading="lazy"
                alt=""
                src="/resources5@2x.png"
              />
              <img
                className="self-stretch w-[450px] relative rounded-mini max-h-full object-cover min-h-[298px] max-w-full z-[1] mq1050:flex-1"
                loading="lazy"
                alt=""
                src="/resources6@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq750:flex-wrap">
                <div className="w-[526px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border max-w-full">
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-5xl mq1050:leading-[51px] mq450:text-lg mq450:leading-[38px]">
                    Placement Resources
                  </h3>
                </div>
                <div className="w-[324px] flex flex-col items-end justify-start gap-5 max-w-full">
                  <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-[9px] px-[33px] bg-gray-300 rounded-radius-full overflow-hidden flex flex-row items-start justify-start gap-space-200">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star4.svg"
                    />
                    <div className="relative text-5xl leading-[34px] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[89px] mq450:text-lgi mq450:leading-[27px]">
                      Access
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x6.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[451px] relative text-xl font-semibold inline-block max-w-full mt-[-3px] mq450:text-base">
                Guides and tools to enhance job application success
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
