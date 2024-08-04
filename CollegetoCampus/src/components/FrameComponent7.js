import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1421px] flex flex-row items-start justify-start pt-0 px-[75px] pb-[215.9px] box-border max-w-full shrink-0 text-center text-xl text-text-default-default font-lato mq750:pl-[37px] mq750:pr-[37px] mq750:pb-[140px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1225:flex-wrap">
        <img
          className="w-[631px] relative rounded-lg max-h-full object-cover min-h-[534px] max-w-full z-[3] mq1225:flex-1"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[427px] max-w-full ml-[-17px] mq750:min-w-full mq1050:ml-0">
          <img
            className="h-[19px] w-5 absolute !m-[0] top-[138px] left-[302px]"
            alt=""
            src="/icon5.svg"
          />
          <img
            className="h-[19px] w-[19px] absolute !m-[0] top-[141px] right-[296px]"
            alt=""
            src="/icon-5.svg"
          />
          <img
            className="h-[19px] w-[19px] absolute !m-[0] top-[138px] left-[276px]"
            alt=""
            src="/icon-5.svg"
          />
          <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue flex flex-col items-start justify-start pt-[138px] pb-[98px] pl-11 pr-[30px] box-border gap-[33px] max-w-full z-[2] gap-4 mq750:pl-[22px] mq750:pt-[37px] mq750:pb-16 mq750:box-border">
            <div className="w-[657px] h-[534px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0">
              <div className="flex flex-row items-end justify-start gap-[3.5px]">
                <div className="w-[46px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                  <div className="w-[46px] h-[19px] relative">
                    <img
                      className="absolute top-[0px] left-[26px] w-5 h-[19px] z-[3]"
                      alt=""
                      src="/icon5.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[19px] h-[19px] z-[3]"
                      alt=""
                      src="/icon-5.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative min-h-[24px] z-[3]"
                  alt=""
                  src="/star-filled2.svg"
                />
                <div className="w-[45px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                  <div className="w-[45px] h-[19px] relative">
                    <img
                      className="absolute top-[0px] left-[24px] w-[21px] h-[19px] z-[3]"
                      alt=""
                      src="/icon4.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[19px] h-[19px] z-[3]"
                      alt=""
                      src="/icon-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
              <div className="flex-1 relative font-medium inline-block max-w-full z-[3] mq450:text-base">
                <p className="m-0">{`This portal transformed my job search experience `}</p>
                <p className="m-0">
                  with it’s resources and user-friendly interface.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Highly Recommended!</p>
              </div>
            </div>
            <div className="w-[562px] flex flex-row items-start justify-start py-0 px-[61px] box-border max-w-full text-black mq750:pl-[30px] mq750:pr-[30px] mq750:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[26px] max-w-full">
                <div className="w-[412px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <img
                    className="h-[46px] w-[52px] relative rounded-21xl object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/homepage11-22@2x.png"
                  />
                </div>
                <b className="self-stretch relative z-[3] mq450:text-base">
                  Alex Smith
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
