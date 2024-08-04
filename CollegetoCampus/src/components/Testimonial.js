import PropTypes from "prop-types";

const Testimonial = ({ className = "" }) => {
  return (
    <section
      className={`w-[1394px] flex flex-row items-start justify-center pt-0 px-5 pb-[609.9px] box-border max-w-full shrink-0 text-center text-xl text-text-default-default font-lato mq750:pb-[257px] mq750:box-border mq1100:pb-[396px] mq1100:box-border ${className}`}
    >
      <div className="w-[1058px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1100:flex-wrap">
        <img
          className="w-[525px] relative rounded-lg max-h-full object-cover min-h-[450px] max-w-full z-[3] mq1100:flex-1"
          loading="lazy"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[356px] max-w-full ml-[-14px] mq450:min-w-full mq1100:ml-0">
          <img
            className="h-4 w-4 absolute !m-[0] top-[116px] left-[252px]"
            alt=""
            src="/icon1.svg"
          />
          <img
            className="h-4 w-4 absolute !m-[0] top-[119px] right-[246px]"
            alt=""
            src="/icon1.svg"
          />
          <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue flex flex-col items-start justify-start pt-[116px] pb-[79px] pl-[37px] pr-[25px] box-border gap-[27px] max-w-full z-[2] mq450:pt-[34px] mq450:pb-[51px] mq450:box-border">
            <div className="w-[547px] h-[450px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0">
              <div className="flex flex-row items-end justify-start gap-[3px]">
                <div className="w-[38px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="w-[38px] h-4 relative">
                    <img
                      className="absolute top-[0px] left-[22px] w-4 h-4 z-[3]"
                      alt=""
                      src="/icon1.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-4 h-4 z-[3]"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-5 w-5 relative min-h-[20px] z-[3]"
                  alt=""
                  src="/star-filled.svg"
                />
                <div className="w-[38px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="w-[38px] h-4 relative">
                    <img
                      className="absolute top-[0px] left-[20px] w-[18px] h-4 z-[3]"
                      alt=""
                      src="/icon-8.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-4 h-4 z-[3]"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative font-medium z-[3] mq450:text-base">
              <p className="m-0">{`This portal transformed my job search experience `}</p>
              <p className="m-0">
                with it’s resources and user-friendly interface.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">Highly Recommended!</p>
            </div>
            <div className="w-[468px] flex flex-row items-start justify-start py-0 px-[51px] box-border max-w-full text-black mq750:pl-[25px] mq750:pr-[25px] mq750:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[22px] max-w-full">
                <div className="w-[343px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <img
                    className="h-[39px] w-[43px] relative rounded-21xl object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/homepage11-2@2x.png"
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

Testimonial.propTypes = {
  className: PropTypes.string,
};

export default Testimonial;
