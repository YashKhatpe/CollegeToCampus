import PropTypes from "prop-types";

const FrameComponent15 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[106px] pl-5 pr-8 box-border max-w-full text-center text-6xl text-gray-300 font-lato ${className}`}
    >
      <div className="w-[972px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap mq1050:justify-center">
        <div className="w-[438px] flex flex-row items-start justify-start relative min-w-[438px] max-w-full mq750:min-w-full mq1050:flex-1">
          <img
            className="h-[313px] w-[533px] absolute !m-[0] top-[-227px] left-[-52px] rounded-lg object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <div className="flex-1 rounded-lg bg-silver flex flex-row items-start justify-start pt-5 px-[21px] pb-[35px] box-border max-w-full z-[1]">
            <div className="h-[157px] w-[438px] relative rounded-lg bg-silver hidden max-w-full" />
            <div className="flex-1 relative inline-block max-w-full z-[2]">
              <p className="m-0">
                <b>
                  <span>{`Training Programs `}</span>
                </b>
              </p>
              <p className="m-0 text-11xl">
                <b>
                  <span>&nbsp;</span>
                </b>
              </p>
              <p className="m-0 text-mini font-medium">
                Comprehensive courses with engaging content, schedules and
                multimedia to prepare students for their careers
              </p>
            </div>
          </div>
        </div>
        <textarea
          className="[border:none] bg-silver h-[157px] w-[405px] [outline:none] rounded-lg flex flex-row items-start justify-start py-6 px-[25px] box-border text-gray-300 min-w-[405px] max-w-full z-[1] mq750:min-w-full mq1050:flex-1"
          placeholder={`Interactive features

Real-time sessions for practice feedback, and communication enhancing connections between 
students and employers.`}
          rows={8}
          cols={20}
        />
      </div>
    </section>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;
