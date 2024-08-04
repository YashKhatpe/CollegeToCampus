import ProgramButton from "./ProgramButton";
import PropTypes from "prop-types";

const Program = ({ className = "" }) => {
  return (
    <div
      className={`w-[1295px] flex flex-row items-start justify-start py-0 px-[57px] box-border max-w-full text-left text-11xl text-black font-single-line-body-base lg:pl-7 lg:pr-7 lg:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[26px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-10 max-w-full lg:flex-wrap gap-5">
          <img
            className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover min-w-[382px] min-h-[383px] mq750:min-w-full"
            loading="lazy"
            alt=""
            src="/resources21@2x.png"
          />
          <img
            className="self-stretch w-[553px] relative rounded-lg max-h-full object-cover min-h-[383px] max-w-full lg:flex-1"
            loading="lazy"
            alt=""
            src="/resources41@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
          <div className="w-[501px] relative inline-block shrink-0 max-w-full">
            <p className="m-0">
              <b>Training Programs</b>
            </p>
            <p className="m-0 text-xs">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className="m-0 text-base">
              <span>
                <span>
                  Engaging courses and resources for career advancement
                </span>
              </span>
            </p>
          </div>
          <div className="w-[395px] flex flex-row items-end justify-start gap-[179px] max-w-full gap-[89px]">
            <img
              className="h-6 w-6 relative"
              loading="lazy"
              alt=""
              src="/play-arrow1.svg"
            />
            <ProgramButton star="/star2.svg" button="Explore" x="/x3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Program.propTypes = {
  className: PropTypes.string,
};

export default Program;
