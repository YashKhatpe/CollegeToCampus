import PropTypes from "prop-types";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section
      className={`w-full h-screen flex flex-col items-center justify-center text-left text-31xl text-gray-300 font-lato ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-center py-0 px-5 box-border max-w-full mt-16">
        <div className="w-full flex flex-col items-center justify-center gap-[46px]">
          <div className="w-full flex flex-col items-center justify-center py-0 px-16 box-border max-w-full mq1050:px-8">
            <div className="w-full flex flex-col items-center justify-center gap-4">
              <div className="w-full flex flex-col items-center justify-center py-0 px-5 mq750:px-0">
                <h1 className="m-0 text-center tracking-[-0.25px] leading-[64px] font-extrabold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
                  Elevate Your Expertise
                </h1>
              </div>
              <div className="w-full text-xl text-center mq450:text-base">
                Be part of a learning community that drives success and innovation.
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[26px] text-xl font-poppins">
            <div className="flex flex-col items-center justify-center gap-[18px] min-w-[310px] max-w-[449px]">
              <div className="w-full flex flex-col items-center justify-center gap-[19px]">
                <img
                  className="w-full rounded-lg max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/resources3@2x.png"
                />
                <b className="w-full text-center mq450:text-base">
                  Bringing Students and Employers: Your Pathway to Success
                </b>
              </div>
              <div className="w-full text-justify mq450:text-base">
                <p className="m-0">
                  Discover how our dynamic training and placement portal connects students with recruiters, offering essential resources like training programs, interview preparations, and interactive features. Unlock your potential and secure your dream job through our innovative platform designed for seamless user experience and effective employee-student interaction.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">5/8/2024</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[21px] min-w-[304px] max-w-[454px]">
              <div className="w-full flex flex-col items-center justify-center gap-[13px]">
                <img
                  className="h-[308px] w-full rounded-lg object-cover"
                  loading="lazy"
                  alt=""
                  src="/resources1@2x.png"
                />
                <b className="w-full text-center mq450:text-base">{`Empowering Students and Recruiters: Your Dynamic Job Portal Awaits! `}</b>
              </div>
              <div className="w-full text-justify mq450:text-base">
                <p className="m-0">
                  Explore our innovative training and placement portal designed to connect students with employers. Featuring user-friendly navigation, extensive resources, and interactive tools, we aim to enhance employability and streamline recruitment processes. Join us to unlock new opportunities and showcase your achievements in today's competitive job market!
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
