import Navigation1 from "./Navigation1";
import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-left text-31xl text-gray-300 font-lato gap-[25px] ${className}`}
    >
     
      <div className="w-[1427px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[971px] flex flex-col items-start justify-start gap-[92px] max-w-full gap-[23px] gap-[46px]">
          <div className="w-[919px] flex flex-row items-start justify-start py-0 px-16 box-border max-w-full mq1050:pl-8 mq1050:pr-8 mq1050:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[63px] max-w-full gap-[31px] gap-4">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[86px] pr-5 mq750:pl-[43px] mq750:box-border mq450:pl-5 mq450:box-border">
                <h1 className="m-0 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
                  Elevate Your Expertise
                </h1>
              </div>
              <div className="self-stretch relative text-xl text-center mq450:text-base">
                Be part of a learning community that drives success and
                innovation.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[26px] max-w-full text-xl font-poppins">
            <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[310px] max-w-full gap-[18px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                <img
                  className="w-[449px] relative rounded-lg max-h-full object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/resources3@2x.png"
                />
                <b className="self-stretch relative mq450:text-base">
                  Bringing Students and Employers: Your Pathway to Success
                </b>
              </div>
              <div className="w-[456px] relative font-poppins text-justify inline-block max-w-full mq450:text-base">
                <p className="m-0">
                  Discover how our dynamic training and placement portal
                  connects students with recruiters, offering essential
                  resources like training programs, interview preparations and
                  interactive features. Unlock your potential and secure your
                  dream job through our innovative platform designed for
                  seamless user experience and effective employee-student
                  interaction
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">5/8/2024</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[43px] min-w-[304px] max-w-full gap-[21px]">
              <div className="w-[446px] flex flex-col items-start justify-start gap-[13px] max-w-full">
                <img
                  className="self-stretch h-[308px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/resources1@2x.png"
                />
                <b className="self-stretch relative mq450:text-base">{`Empowering Students and Recruiters: Your Dynamic Job Portal Awaits! `}</b>
              </div>
              <div className="self-stretch relative font-poppins text-justify mq450:text-base">
                <p className="m-0">
                  Explore our innovative training and placement portal designed
                  to connect students with employers. Featuring user-friendly
                  navigation, extensive resources, and interactive tools, we aim
                  to enhance employability and streamline recruitment processes.
                  Join us to unlock new opportunities and showcase your
                  achievements in today's competitive job market!
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">5/8/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
