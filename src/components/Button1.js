import PropTypes from "prop-types";

const Button1 = ({ className = "", labelText = "Join" }) => {
  return (
    <div
      className={`w-[242px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-silver overflow-hidden shrink-0 flex flex-row items-start justify-start py-[7px] px-0 box-border z-[1] text-left text-xl text-darkslategray-200 border-2 border-blue font-lato `}
    >
      <div className="flex-1 bg-silver flex flex-row items-start justify-center py-0.5 px-5">
        <button className="bg-transparent relative leading-[36px] inline-block min-w-[37px] mq450:text-base mq450:leading-[29px] border-red-200">
          {labelText}
        </button>
      </div>
    </div>
  );
};

Button1.propTypes = {
  className: PropTypes.string,
  labelText: PropTypes.string,
};

export default Button1;
