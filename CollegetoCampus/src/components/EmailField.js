import { useMemo } from "react";
import Search from "./Search";
import PropTypes from "prop-types";

const EmailField = ({ className = "", propGap, propHeight }) => {
  const emailFieldStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const sUPPORTEnterYourContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-10xl text-silver font-lato ${className}`}
      style={emailFieldStyle}
    >
      <div
        className="self-stretch h-[149px] relative inline-block shrink-0 z-[2] mq450:text-base"
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
      <Search propAlignSelf="unset" propWidth="334px" propMarginTop="-37px" />
    </div>
  );
};

EmailField.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propHeight: PropTypes.any,
};

export default EmailField;
