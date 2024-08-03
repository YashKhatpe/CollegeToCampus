import ProgramButton from "./ProgramButton";
import PropTypes from "prop-types";

const Placement = ({ className = "" }) => {
  return (
    <div
      className={`w-[1296px] flex flex-row items-start justify-start py-0 px-[61px] box-border max-w-full text-left text-11xl text-gray-300 font-lato lg:pl-[30px] lg:pr-[30px] lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[38px] max-w-full lg:flex-wrap gap-[19px]">
          <img
            className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover min-w-[382px] min-h-[382px] z-[1] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/resources51@2x.png"
          />
          <img
            className="self-stretch w-[548px] relative rounded-mini max-h-full object-cover min-h-[382px] max-w-full z-[1] lg:flex-1"
            loading="lazy"
            alt=""
            src="/resources61@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
            <h3 className="m-0 w-[641px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq1050:text-5xl mq1050:leading-[51px] mq450:text-lg mq450:leading-[38px]">
              Placement Resources
            </h3>
            <ProgramButton
              propPadding="29px 0px 0px"
              star="/star4.svg"
              button="Access"
              x="/x6.svg"
            />
          </div>
          <div className="w-[549px] relative text-xl font-semibold inline-block max-w-full mt-[-5px] mq450:text-base">
            Guides and tools to enhance job application success
          </div>
        </div>
      </div>
    </div>
  );
};

Placement.propTypes = {
  className: PropTypes.string,
};

export default Placement;
