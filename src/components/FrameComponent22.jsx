import { useMemo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent22 = ({
  className = "",
  logo2IconHeight,
  logo2,
  star,
  label,
  x,
  hasIconEnd,
  hasIconStart,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: logo2IconHeight,
    };
  }, [logo2IconHeight]);

  return (
    <header
      className={`self-stretch bg-gray-500 flex flex-row items-start justify-between pt-[33.1px] px-[54px] pb-[14.5px] box-border top-[0] z-[99] sticky gap-5 max-w-full text-center text-3xl text-background-default-default font-poppins mq750:pl-[27px] mq750:pr-[27px] mq750:box-border ${className}`}
    >
      <div className="h-[102px] w-[1440px] relative bg-gray-500 hidden max-w-full" />
      <div
        className="h-[54.4px] w-[338px] flex flex-col items-start justify-start py-0 pl-0 pr-[27px] box-border max-w-full"
        style={frameDivStyle}
      >
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src={logo2}
        />
      </div>
      <div className="w-[680px] flex flex-col items-start justify-start pt-[11.9px] px-0 pb-0 box-border max-w-full lg:hidden mq450:w-0">
        <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit shrink-0 z-[1] mq450:hidden">
          <span className="whitespace-pre-wrap">{`Home      Job Listings      `}</span>
          <span className="[text-decoration:underline] text-skyblue">
            Training
          </span>
          <span className="whitespace-pre-wrap"> Resources Interaction</span>
        </h3>
      </div>
      <div className="flex flex-col items-start justify-start pt-[5.9px] px-0 pb-0">
        <Button
          hasIconEnd={hasIconEnd}
          hasIconStart={hasIconStart}
          label={label}
          propBorder="1px solid #2c2c2c"
          propAlignSelf="unset"
          propBorderRadius="8px"
          propWidth="unset"
          propFlex="unset"
          propHeight="unset"
          star={star}
          propDisplay="inline-block"
          propMinWidth="44px"
          propFontSize="16px"
          x={x}
        />
      </div>
    </header>
  );
};

FrameComponent22.propTypes = {
  className: PropTypes.string,
  logo2: PropTypes.string,
  star: PropTypes.string,
  label: PropTypes.string,
  x: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,

  /** Style props */
  logo2IconHeight: PropTypes.any,
};

export default FrameComponent22;
