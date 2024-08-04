import { useMemo } from "react";
import PropTypes from "prop-types";

const InputFields = ({
  className = "",
  propPadding,
  propWidth,
  yourFirstName,
  propFlex,
  emailFieldPlaceholder,
}) => {
  const inputFieldsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const nameFieldStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const yourFirstNameStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px] gap-1 text-left text-xl text-gray-300 font-lato ${className}`}
      style={inputFieldsStyle}
    >
      <div
        className="w-[193px] flex flex-row items-start justify-start py-0 px-[11px] box-border"
        style={nameFieldStyle}
      >
        <div
          className="flex-1 relative z-[2] mq450:text-base"
          style={yourFirstNameStyle}
        >
          {yourFirstName}
        </div>
      </div>
      <input
        className="w-full [border:none] [outline:none] bg-gray-300 self-stretch h-[82px] rounded-mini flex flex-row items-start justify-start pt-[25px] px-[22px] pb-[27px] box-border font-lato text-6xl text-background-default-default min-w-[250px] z-[2]"
        placeholder={emailFieldPlaceholder}
        type="text"
      />
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
  yourFirstName: PropTypes.string,
  emailFieldPlaceholder: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default InputFields;
