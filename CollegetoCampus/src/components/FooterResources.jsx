import { useMemo } from "react";
import Search from "./Search";
import Button from "./Button";
import PropTypes from "prop-types";

const FooterResources = ({
  className = "",
  propGap,
  propHeight,
  propWidth,
  propMarginTop,
  propPadding,
  star,
  label,
  x1,
  hasIconEnd,
  hasIconStart,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const sUPPORTEnterYourContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const searchBarStyle = useMemo(() => {
    return {
      width: propWidth,
      marginTop: propMarginTop,
      padding: propPadding,
    };
  }, [propWidth, propMarginTop, propPadding]);

  return (
    <div
      className={`w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-left text-10xl text-silver font-lato mq1275:flex-1 mq750:min-w-full mq1100:ml-0 ${className}`}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start max-w-full"
        style={frameDiv1Style}
      >
        <div
          className="self-stretch h-[149px] relative inline-block shrink-0 z-[1] mq450:text-base"
          style={sUPPORTEnterYourContainerStyle}
        >
          <p className="m-0">
            <span>
              <span className="font-extrabold">{`SUPPORT `}</span>
            </span>
          </p>
          <p className="m-0">
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className="m-0 text-xl">
            <b>
              <span>Enter your email address</span>
            </b>
          </p>
        </div>
        <div
          className="w-[333px] flex flex-col items-start justify-start gap-4 max-w-full mt-[-37px]"
          style={searchBarStyle}
        >
          <Search />
          <Button
            hasIconEnd={hasIconEnd}
            hasIconStart={hasIconStart}
            label={label}
            star={star}
            x={x1}
          />
        </div>
      </div>
    </div>
  );
};

FooterResources.propTypes = {
  className: PropTypes.string,
  star: PropTypes.string,
  label: PropTypes.string,
  x1: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,

  /** Style props */
  propGap: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propMarginTop: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FooterResources;
