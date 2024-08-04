import PropTypes from "prop-types";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1322px] flex flex-row items-start justify-center pt-0 px-0 pb-[657.9px] box-border max-w-full shrink-0 text-center text-mini text-text-default-default font-lato mq750:pb-[278px] mq750:box-border mq1050:pb-[428px] mq1050:box-border ${className}`}
    >
      <div className="w-[892px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
        <img
          className="w-[443px] relative rounded-lg max-h-full object-cover min-h-[375px] max-w-full z-[3] mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[300px] max-w-full ml-[-12px] mq750:ml-0">
          <img
            className="h-[13px] w-3.5 absolute !m-[0] top-[97px] left-[212px]"
            alt=""
            src="/icon2.svg"
          />
          <img
            className="h-[13px] w-3.5 absolute !m-[0] top-[99px] right-[207px]"
            alt=""
            src="/icon2.svg"
          />
          <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue flex flex-col items-end justify-start pt-[97px] px-[21px] pb-[68px] box-border gap-6 max-w-full z-[2] mq450:pt-8 mq450:pb-11 mq450:box-border">
            <div className="w-[461px] h-[375px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue hidden max-w-full" />
            <div className="w-[408px] flex flex-row items-start justify-center max-w-full">
              <div className="flex flex-row items-end justify-start gap-[2.5px]">
                <div className="w-8 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="w-8 h-[13px] relative">
                    <img
                      className="absolute top-[0px] left-[18px] w-3.5 h-[13px] z-[3]"
                      alt=""
                      src="/icon2.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[13px] h-[13px] z-[3]"
                      alt=""
                      src="/icon3.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-4 w-[17px] relative min-h-[16px] z-[3]"
                  alt=""
                  src="/star-filled-3.svg"
                />
                <div className="w-8 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="w-8 h-[13px] relative">
                    <img
                      className="absolute top-[0px] left-[17px] w-[15px] h-[13px] z-[3]"
                      alt=""
                      src="/icon-81.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[13px] h-[13px] z-[3]"
                      alt=""
                      src="/icon3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[409px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
              <div className="flex-1 relative font-medium inline-block max-w-full z-[3]">
                <p className="m-0">{`This portal transformed my job search experience `}</p>
                <p className="m-0">
                  with it’s resources and user-friendly interface.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Highly Recommended!</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[309px] flex flex-col items-end justify-start gap-[18px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5">
                  <img
                    className="h-[33px] w-9 relative rounded-6xl object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/homepage11-21@2x.png"
                  />
                </div>
                <b className="self-stretch relative z-[3]">Alex Smith</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
