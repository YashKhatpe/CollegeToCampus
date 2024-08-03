import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent3 = ({
  className = "",
  frameHeaderTop,
  frameHeaderPosition,
  frameHeaderMinHeight,
  logo2,
}) => {
  const frameHeaderStyle = useMemo(() => {
    return {
      top: frameHeaderTop,
      position: frameHeaderPosition,
      minHeight: frameHeaderMinHeight,
    };
  }, [frameHeaderTop, frameHeaderPosition, frameHeaderMinHeight]);

  return (
    <header
      className={`self-stretch bg-gray-300 flex flex-row items-start justify-between pt-[30.8px] pb-[17px] pl-[60px] pr-[53px] box-border top-[0] z-[99] sticky gap-5 max-w-full text-center text-3xl text-background-default-default font-poppins mq750:pl-[30px] mq750:pr-[26px] mq750:box-border ${className}`}
      style={frameHeaderStyle}
    >
      <div className="h-[102px] w-[1440px] relative bg-gray-300 hidden max-w-full" />
      <div className="h-[54.2px] w-[333px] flex flex-col items-start justify-start py-0 pl-0 pr-[22px] box-border max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src={logo2}
        />
      </div>
      <div className="w-[680px] flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0 box-border max-w-full mq1125:w-0">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit shrink-0 z-[1] mq1125:hidden">
          <span className="whitespace-pre-wrap">{`Home      `}</span>
          <span className="[text-decoration:underline] text-skyblue">
            Job Listing
          </span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      Training      `}</span>
          <span className="text-gray-200">Resources</span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      `}</span>
          <span className="text-gray-100">Interaction</span>
        </h1>
      </div>
      <div className="flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0">
        <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-2.5 px-[34px] bg-lightslategray rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-space-200 z-[1]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star.svg"
          />
          <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[44px]">
            Login
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x.svg"
          />
        </button>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  logo2: PropTypes.string,

  /** Style props */
  frameHeaderTop: PropTypes.any,
  frameHeaderPosition: PropTypes.any,
  frameHeaderMinHeight: PropTypes.any,
};

export default FrameComponent3;
