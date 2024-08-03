import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1426px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-11xl text-gray-300 font-lato ${className}`}
    >
      <div className="w-[1186px] flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
        <div className="w-[534px] rounded-lg bg-silver flex flex-row items-start justify-start py-[38px] px-4 box-border min-w-[534px] min-h-[231px] max-w-full z-[1] mq750:min-w-full mq1125:flex-1 mq1125:min-h-[auto]">
          <div className="h-[231px] w-[534px] relative rounded-lg bg-silver hidden max-w-full" />
          <div className="flex-1 relative inline-block max-w-full z-[2] mq450:text-base">
            <p className="m-0">
              <b>
                <span>{`Training Programs `}</span>
              </b>
            </p>
            <p className="m-0 text-6xl">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="m-0 text-xl font-medium">
              Comprehensive courses with engaging content, schedules and
              multimedia to prepare students for their careers
            </p>
          </div>
        </div>
        <div className="h-[290px] w-[494px] relative min-w-[494px] max-w-full text-13xl mq750:min-w-full mq1125:flex-1">
          <textarea
            className="[border:none] bg-silver h-[231px] w-[494px] [outline:none] absolute top-[0px] left-[0px] rounded-lg z-[1]"
            rows={12}
            cols={25}
          />
          <div className="absolute top-[38px] left-[39px] z-[2] mq450:text-base">
            <p className="m-0">
              <b>
                <span>Interactive features</span>
              </b>
            </p>
            <p className="m-0 text-xl">
              <span>
                <b>&nbsp;</b>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="font-medium">
                  Real-time sessions for practice feedback, and
                </span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="font-medium">{`communication enhancing connections between `}</span>
              </span>
            </p>
            <p className="m-0">
              <span>
                <span className="font-medium">students and employers.</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
