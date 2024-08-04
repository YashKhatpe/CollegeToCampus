import PropTypes from "prop-types";

const MainContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[47px] pl-[49px] pr-[50px] box-border max-w-full shrink-0 text-left text-11xl text-aliceblue font-lato mq800:pl-6 mq800:pr-[25px] mq800:pb-5 mq800:box-border mq1125:pb-[31px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start pt-[246px] px-0 pb-0 box-border max-w-full mq800:pt-40 mq800:box-border">
          <img
            className="self-stretch relative rounded-34xl max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/interaction6-11@2x.png"
          />
        </div>
        <div className="w-[1310px] flex flex-col items-start justify-start gap-[558px] max-w-full ml-[-1310px] gap-[139px] gap-[70px] gap-[279px]">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1325:flex-wrap">
            <div className="w-[599px] relative inline-block shrink-0 min-w-[599px] max-w-full mq800:min-w-full mq450:text-base mq1325:flex-1">
              <p className="m-0">
                <span>
                  <b>
                    <span>&nbsp;</span>
                  </b>
                </span>
              </p>
              <p className="m-0 text-silver">
                <span>
                  <b>
                    <span>Empowering Your Career Journey</span>
                  </b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-xl text-silver">
                <span>
                  <span>
                    We empower students to transition seamlessly from college to
                    career with tools, resources, and connections that
                    facilitate growth, engagement, and preparation for the
                    professional world ahead
                  </span>
                </span>
              </p>
            </div>
            <div className="w-[597px] relative inline-block shrink-0 min-w-[599px] max-w-full mq800:min-w-full mq450:text-base mq1325:flex-1">
              <p className="m-0">
                <span>
                  <b>
                    <span>&nbsp;</span>
                  </b>
                </span>
              </p>
              <p className="m-0 text-silver">
                <span>
                  <b>
                    <span>Contact, Engage and Prepare</span>
                  </b>
                </span>
              </p>
              <p className="m-0">
                <span>
                  <span>
                    <span>&nbsp;</span>
                  </span>
                </span>
              </p>
              <p className="m-0 text-xl text-silver">
                <span>
                  <span>
                    Our platform offers live chat, mentorship, and various
                    interactive resources, enabling users to receive
                    personalized guidance and support tailored to their unique
                    career aspirations and goals.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="w-[1247px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-39xl text-silver">
            <div className="w-[679px] flex flex-col items-start justify-start gap-[83px] max-w-full gap-[41px] gap-[21px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-8 pr-[31px] box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq800:text-27xl mq800:leading-[51px] mq450:text-16xl mq450:leading-[38px]">
                  Career Service Hub
                </h1>
              </div>
              <b className="self-stretch relative text-xl text-left mq450:text-base">
                Explore a variety of interactive tools designed to assist your
                transition from college to career.
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
