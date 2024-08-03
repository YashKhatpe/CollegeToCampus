import { useMemo } from "react";
import PropTypes from "prop-types";

const Header1 = ({ className = "", headerMinHeight, logo2 }) => {
  const headerStyle = useMemo(() => {
    return {
      minHeight: headerMinHeight,
    };
  }, [headerMinHeight]);

  return (
    <header
      className={`self-stretch bg-gray-300 flex flex-row items-start justify-between pt-[25.8px] pb-[312.6px] pl-[47px] pr-[54px] box-border min-h-[436px] max-w-full shrink-0 gap-5 text-center text-3xl text-skyblue font-poppins mq800:pl-[23px] mq800:pr-[27px] mq800:box-border mq450:pt-5 mq450:pb-[203px] mq450:box-border mq1325:flex-wrap ${className}`}
      style={headerStyle}
    >
      <div className="h-[101.7px] w-[1440px] relative bg-gray-300 hidden max-w-full" />
      <div className="h-[54.2px] w-[355px] flex flex-col items-start justify-start max-w-full">
        <img
          className="w-[311px] flex-1 relative max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src={logo2}
        />
      </div>
      <div className="w-[680px] flex flex-col items-start justify-start pt-[9.2px] px-0 pb-0 box-border max-w-full">
        <b className="self-stretch relative z-[1] mq450:text-lg">
          <span className="text-background-default-default whitespace-pre-wrap">{`Home      Job Listing      Training      `}</span>
          <span className="text-gray-200">Resources</span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      `}</span>
          <span className="[text-decoration:underline]">Interaction</span>
          <span className="text-background-default-default">{` `}</span>
        </b>
      </div>
      <div className="flex flex-col items-start justify-start pt-[9.2px] px-0 pb-0">
        <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-2.5 px-[34px] bg-lightslategray rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-space-200 z-[1]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star.svg"
          />
          <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[44px]">
            Login
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x.svg"
          />
        </button>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  logo2: PropTypes.string,

  /** Style props */
  headerMinHeight: PropTypes.any,
};

export default Header1;
