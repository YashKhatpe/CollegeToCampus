import Checkboxes from "./Checkboxes";
import PropTypes from "prop-types";

const FrameComponent13 = ({ }) => {
  return (
    <div
      className={`w-[232px] bg-border-default-default 2-[350px] h-[700px] flex flex-col items-start justify-start pt-2.5 px-3.5 pb-[21px] box-border gap-1.5 relative right-60 text-left text-3xs text-black font-single-line-body-base mq1100:flex-1`}
    >
      <div className="w-[232px] h-[413px] relative bg-border-default-default hidden" />
      <div className="w-[47px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border text-xs">
        <div className="flex-1 relative leading-[17px] font-semibold z-[1]">
          Filters
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
        <div className="h-px flex-1 relative border-black border-t-[1px] border-solid box-border z-[1]" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0.5">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="w-[49px] relative leading-[15px] font-medium inline-block z-[1]">
            Profile
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-gray-300 self-stretch h-[25px] rounded-6xs flex flex-row items-start justify-start py-[7px] px-2 box-border font-single-line-body-base font-medium text-5xs text-background-default-default min-w-[121px] z-[2]"
            placeholder="e.g. Marketing"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3 pl-px pr-0.5 relative">
        <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
          <div className="w-[61px] relative leading-[140%] font-medium inline-block z-[1]">
            Location
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-gray-300 self-stretch h-[25px] rounded-6xs flex flex-row items-start justify-start pt-[7px] px-2 pb-2 box-border font-single-line-body-base font-medium text-5xs text-background-default-default min-w-[121px] z-[1]"
            placeholder="e.g. Mumbai"
            type="text"
          />
        </div>
        <div className="h-[38px] !m-[0] absolute bottom-[-33px] left-[-9px] flex flex-row items-start justify-start z-[2]">
          <div className="mt-[-1px] ml-[-1px] h-10 w-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border relative shrink-0">
            <div className="h-[18px] w-[18px] relative rounded-sm bg-schemes-on-secondary-container" />
            <img
              className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] z-[1]"
              alt=""
              src="/check-small.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[148px] flex flex-row items-start justify-start pt-0 px-[21px] pb-[9px] box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-1">
          <div className="self-stretch relative leading-[15px] font-medium z-[1]">
            Work from home
          </div>
          <div className="w-[78px] flex flex-row items-start justify-start py-0 px-px box-border">
            <div className="flex-1 flex flex-row items-start justify-start relative">
              <div className="flex-1 relative leading-[16px] font-medium z-[1]">
                Part-time
              </div>
              <Checkboxes
                checkboxesLeft="-31px"
                checkboxesPadding="unset"
                checkboxesHeight="37px"
                stateLayerMarginTop="-1.5px"
                stateLayerMarginLeft="-1px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="w-[76px] relative leading-[16px] font-medium inline-block z-[1]">
          Experience
        </div>
        <div className="self-stretch rounded-6xs bg-gray-300 flex flex-row items-start justify-start py-[7px] px-[9px] whitespace-nowrap z-[2] text-5xs text-background-default-default">
          <div className="h-6 w-[201px] relative rounded-6xs bg-gray-300 hidden" />
          <div className="w-[49px] relative leading-[140%] font-medium inline-block shrink-0 z-[3]">
            e.g. 5
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[11px] pl-px pr-0.5">
        <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
          <div className="w-[146px] relative leading-[140%] font-medium inline-block z-[1]">
            Annual Salary (in lakhs)
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-gray-300 self-stretch h-6 rounded-6xs flex flex-row items-start justify-start pt-1.5 px-2 pb-2 box-border font-single-line-body-base font-medium text-5xs text-background-default-default min-w-[121px] z-[1]"
            placeholder="e.g. 8"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[3px] text-mediumblue">
        <div className="relative leading-[140%] font-medium inline-block min-w-[42px] z-[1]">
          Clear all
        </div>
      </div>
      <div className="w-[53px] flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border">
        <div className="flex-1 relative leading-[140%] font-semibold z-[1]">
          Search
        </div>
      </div>
      <div className="self-stretch h-px relative border-black border-t-[1px] border-solid box-border z-[1]" />
      <div className="self-stretch rounded-6xs bg-gray-300 flex flex-row items-start justify-start pt-1 pb-[5px] pl-[9px] pr-[5px] gap-4 z-[1] text-5xs text-background-default-default">
        <div className="h-[25px] w-[201px] relative rounded-6xs bg-gray-300 hidden" />
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="self-stretch relative leading-[140%] font-medium z-[2]">
            e.g. Design, Marketing
          </div>
        </div>
        <img className="h-4 w-[15px] relative z-[2]" alt="" src="/search.svg" />
      </div>
    </div>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
