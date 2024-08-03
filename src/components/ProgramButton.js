import { useMemo } from "react";
import PropTypes from "prop-types";

const ProgramButton = ({ className = "", propPadding, star, button, x }) => {
  const programButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex flex-col items-start justify-end pt-0 px-0 pb-2 ${className}`}
      style={programButtonStyle}
    >
      <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-4 px-[50px] bg-gray-300 rounded-radius-full overflow-hidden flex flex-row items-start justify-start gap-space-200">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={star}
        />
        <div className="relative text-5xl leading-[34px] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[90px] mq450:text-lgi mq450:leading-[27px]">
          {button}
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={x}
        />
      </button>
    </div>
  );
};

ProgramButton.propTypes = {
  className: PropTypes.string,
  star: PropTypes.string,
  button: PropTypes.string,
  x: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default ProgramButton;
