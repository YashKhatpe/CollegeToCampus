import { useMemo } from "react";
import PropTypes from "prop-types";

const EmailPasswordFields = ({
  className = "",
  propGap,
  email,
  propMinWidth,
  emailPlaceholderPlacehold,
}) => {
  const emailPasswordLabelsStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const emailStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 pl-0.5 pr-px box-border max-w-full text-left text-xl text-background-default-default font-poppins ${className}`}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-0.5 max-w-full"
        style={emailPasswordLabelsStyle}
      >
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <b
            className="relative inline-block min-w-[59px] mq450:text-base"
            style={emailStyle}
          >
            {email}
          </b>
        </div>
        <input
          className="w-full [border:none] [outline:none] bg-border-default-default self-stretch h-[65px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 px-[31px] pb-[27px] box-border font-lato text-mini text-gray-500 min-w-[250px]"
          placeholder={emailPlaceholderPlacehold}
          type="text"
        />
      </div>
    </div>
  );
};

EmailPasswordFields.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  emailPlaceholderPlacehold: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default EmailPasswordFields;
