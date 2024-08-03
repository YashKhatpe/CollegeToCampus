import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  hasIconEnd = false,
  hasIconStart = false,
  label = "Join our platform now",
  propBackgroundColor,
  propBorder,
  propOverflow,
  propAlignSelf,
  propHeight,
  propBorderRadius,
  propPadding,
  propBoxShadow,
  propWidth,
  star,
  propFontWeight,
  propDisplay,
  propMinWidth,
  propMargin,
  propFontSize,
  propFontFamily,
  propColor,
  x,
}) => {
  const button2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      overflow: propOverflow,
      alignSelf: propAlignSelf,
      height: propHeight,
      borderRadius: propBorderRadius,
      padding: propPadding,
      boxShadow: propBoxShadow,
      width: propWidth,
    };
  }, [
    propBackgroundColor,
    propBorder,
    propOverflow,
    propAlignSelf,
    propHeight,
    propBorderRadius,
    propPadding,
    propBoxShadow,
    propWidth,
  ]);

  const button3Style = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      display: propDisplay,
      minWidth: propMinWidth,
      margin: propMargin,
      fontSize: propFontSize,
      fontFamily: propFontFamily,
      color: propColor,
    };
  }, [
    propFontWeight,
    propDisplay,
    propMinWidth,
    propMargin,
    propFontSize,
    propFontFamily,
    propColor,
  ]);

  return (
    <div
      className={`self-stretch h-[49px] rounded-radius-200 bg-lightslategray border-lightslategray border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-center p-space-300 gap-space-200 text-left text-base text-text-brand-on-brand font-single-line-body-base ${className}`}
      style={button2Style}
    >
      {hasIconStart && (
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={star}
        />
      )}
      <h2
        className="m-0 relative text-inherit leading-[140%] font-extrabold font-inherit"
        style={button3Style}
      >
        {label}
      </h2>
      {hasIconEnd && (
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={x}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  label: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propOverflow: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propPadding: PropTypes.any,
  propBoxShadow: PropTypes.any,
  propWidth: PropTypes.any,
  propFontWeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMargin: PropTypes.any,
  propFontSize: PropTypes.any,
  propFontFamily: PropTypes.any,
  propColor: PropTypes.any,
};

export default Button;
