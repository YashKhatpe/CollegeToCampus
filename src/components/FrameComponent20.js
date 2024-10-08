import PropTypes from "prop-types";

const FrameComponent20 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[62px] pl-[45px] pr-5 box-border max-w-full shrink-0 text-center text-11xl text-aliceblue font-poppins mq800:pb-[26px] mq800:box-border mq1100:pb-10 mq1100:box-border mq1300:pl-[22px] mq1300:box-border ${className}`}
    >
      <div className="relative w-[1077px] flex flex-col items-start justify-start max-w-full">
        <div className="flex flex-col items-start justify-start gap-10 max-w-full">
          <div className="flex flex-row items-start justify-between max-w-full gap-5 mq1100:flex-wrap">
            <div className="bottom-[500px] w-[492px] relative inline-block shrink-0 min-w-[492px] max-w-full mq800:min-w-full mq1100:flex-1 mq450:text-base">
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
                    <span>Empowering Your Career</span>
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
                    professional world.
                  </span>
                </span>
              </p>
            </div>
            <div className="bottom-[500px] w-[491px] relative inline-block shrink-0 min-w-[492px] max-w-full mq800:min-w-full mq1100:flex-1 mq450:text-base">
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
                    career and goals.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="bottom-[300px] w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-[849px]">
              <img
                className="bottom-[400px] relative w-full h-auto rounded-34xl object-cover"
                loading="lazy"
                alt=""
                src="/interaction6-1@2x.png"
              />
            </div>
          </div>
          <div className="w-[1041px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-31xl text-silver">
            <div className="w-[679px] flex flex-col items-start justify-start gap-10 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-7 pr-[35px] box-border max-w-full">
                <h1 className="bottom-[300px] m-0 flex-1 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
                  Career Service Hub
                </h1>
              </div>
              <b className="bottom-[300px] self-stretch relative text-xl mq450:text-base">
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

FrameComponent20.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent20;