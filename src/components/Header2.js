import { useMemo } from "react";
import PropTypes from "prop-types";

const Header2 = ({ className = "", headerMinHeight, logo3, star, x }) => {
  const header1Style = useMemo(() => {
    return {
      minHeight: headerMinHeight,
    };
  }, [headerMinHeight]);

  return (
    <div
      className={`self-stretch bg-gray-300 flex flex-row items-start justify-between pt-6 pb-[222px] pl-[60px] pr-[31px] box-border min-h-[346px] max-w-full shrink-0 gap-5 z-[1] text-center text-3xl text-background-default-default font-poppins mq750:pl-[30px] mq750:box-border mq1225:flex-wrap ${className}`}
      style={header1Style}
    >
      <header className="h-[102px] w-[1439px] relative bg-gray-300 hidden max-w-full" />
      <img
        className="h-[54.2px] w-[311px] relative object-cover z-[2]"
        loading="lazy"
        alt=""
        src={logo3}
      />
      <div className="w-[680px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
        <b className="self-stretch relative z-[2] mq450:text-lg">
          <span className="whitespace-pre-wrap">{`Home      `}</span>
          <span className="[text-decoration:underline] text-skyblue">
            Job Listing
          </span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      Training      `}</span>
          <span className="text-gray-200">Resources</span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      `}</span>
          <span className="text-gray-100">Interaction</span>
        </b>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-2.5 px-[34px] bg-lightslategray rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-space-200 z-[2]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src={star}
          />
          <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[44px]">
            Login
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src={x}
          />
        </button>
      </div>
    </div>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
  logo3: PropTypes.string,
  star: PropTypes.string,
  x: PropTypes.string,

  /** Style props */
  headerMinHeight: PropTypes.any,
};

export default Header2;
