import PropTypes from "prop-types";

const FrameComponent14 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-lg bg-border-default-default flex flex-row items-start justify-between pt-4 pb-[23px] pl-[38px] pr-[45px] box-border min-w-[345px] max-w-full gap-5 text-left text-xl text-gray-300 font-lato mq450:min-w-full mq750:flex-wrap mq750:pr-[22px] mq750:box-border ${className}`}
    >
      <div className="h-[168px] w-[674px] relative rounded-lg bg-border-default-default hidden max-w-full" />
      <div className="w-[252px] flex flex-col items-start justify-start gap-[12.5px]">
        <h1 className="m-0 self-stretch relative text-inherit font-extrabold font-inherit z-[1] mq450:text-base">{`Software Developer `}</h1>
        <div className="w-[154px] flex flex-col items-start justify-start gap-[7px] text-xs">
          <div className="w-8 relative font-medium inline-block z-[1]">
            Ford
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-6xs text-black">
            <div className="self-stretch flex flex-row items-start justify-start gap-[3px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="w-2 h-[7px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] rounded-xl w-full h-full overflow-hidden z-[1]"
                    alt=""
                    src="/briefcase.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                      className="absolute top-[0px] left-[0px] rounded-xl w-full h-full overflow-hidden z-[2]"
                      alt=""
                      src="/briefcase.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] w-full h-full">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-full h-full overflow-hidden z-[3]"
                        alt=""
                        src="/briefcase.svg"
                      />
                      <img
                        className="absolute top-[0px] left-[0px] rounded-xl w-full h-full overflow-hidden z-[4]"
                        loading="lazy"
                        alt=""
                        src="/briefcase.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative whitespace-pre-wrap inline-block min-w-[31px] z-[1]">{`0-3 yrs  |  `}</div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-1 h-1.5 relative rounded-xl z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rupee.svg"
                />
              </div>
              <div className="w-10 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative whitespace-pre-wrap z-[1]">
                  1 - 5 LPA |
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="self-stretch flex flex-row items-start justify-start gap-px">
                  <img
                    className="h-[9px] w-2 relative rounded-xl overflow-hidden shrink-0 min-h-[9px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/location-on.svg"
                  />
                  <div className="flex-1 relative z-[1]">Mumbai</div>
                </div>
              </div>
            </div>
            <div className="relative leading-[10px] font-single-line-body-base inline-block min-w-[61px] z-[1]">
              Work from home
            </div>
          </div>
        </div>
        <b className="w-[54px] relative text-5xs inline-block font-poppins text-black z-[1]">
          2d ago
        </b>
      </div>
      <div className="w-[93px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
        <div className="self-stretch flex flex-col items-end justify-start gap-[65px]">
          <img
            className="w-[29px] h-[29px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/organization-building-icon-1@2x.png"
          />
          <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-[7px] px-[34px] bg-gray-300 self-stretch rounded-corner-small flex flex-row items-start justify-start gap-space-200 z-[1]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/star2.svg"
            />
            <div className="relative text-5xs leading-[140%] font-semibold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[23px]">
              Apply
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/x3.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
