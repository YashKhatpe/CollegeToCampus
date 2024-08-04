import PropTypes from "prop-types";

const Button1 = ({ className = "", labelText = "Chat" }) => {
  return (
    <div
      className={`w-[242px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg border-3 border-solid border-primary transition duration-500 ease-in-out overflow-hidden shrink-0 flex flex-row items-start justify-start py-[7px] px-0 box-border z-[1] text-left text-xl font-bold text-primary hover:bg-primary hover:text-white font-lato ${className}`}
    >
      <div className="flex-1  flex flex-row items-center justify-center py-0.5 px-5">
        <div className="relative leading-[36px] inline-block min-w-[37px] mq450:text-base mq450:leading-[29px]">
          {labelText}
        </div>
      </div>
    </div>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
};

export default Button1;