import PropTypes from "prop-types";

const ResourceDescription = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-[5px] box-border gap-[35px] max-w-full text-left text-8xl text-gray-300 font-poppins gap-[17px] ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 min-w-[421px] max-w-full gap-5 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
          <img
            className="w-[611px] relative rounded-lg max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/resources31@2x.png"
          />
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-3xl">
            Bringing Students and Employers: Your Pathway to Success
          </h3>
        </div>
        <div className="w-[620px] relative text-xl font-lato inline-block max-w-full mq450:text-base">
          <p className="m-0">
            Discover how our dynamic training and placement portal connects
            students with recruiters, offering essential resources like training
            programs, interview preparations and interactive features. Unlock
            your potential and secure your dream job through our innovative
            platform designed for seamless user experience and effective
            employee-student interaction
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">5/8/2024</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-12 min-w-[421px] max-w-full gap-6 mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
          <img
            className="w-[601px] relative rounded-lg max-h-full object-cover max-w-full"
            loading="lazy"
            alt=""
            src="/resources11@2x.png"
          />
          <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-3xl">
            <p className="m-0">{`Empowering Students and Recruiters: `}</p>
            <p className="m-0">{`Your Dynamic Job Portal Awaits! `}</p>
          </h3>
        </div>
        <div className="w-[636px] relative text-xl font-lato inline-block max-w-full mq450:text-base">
          <p className="m-0">
            Explore our innovative training and placement portal designed to
            connect students with employers. Featuring user-friendly navigation,
            extensive resources, and interactive tools, we aim to enhance
            employability and streamline recruitment processes. Join us to
            unlock new opportunities and showcase your achievements in
          </p>
          <p className="m-0">today's competitive job market!</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">5/8/2024</p>
        </div>
      </div>
    </div>
  );
};

ResourceDescription.propTypes = {
  className: PropTypes.string,
};

export default ResourceDescription;
