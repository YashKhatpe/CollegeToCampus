import { useMemo } from "react";
import PropTypes from "prop-types";

const Navigation1 = ({
  className = "",
  logo2,
  homeJobListings,
  training,
  resourcesInteraction,
  navigationPadding,
  pageLinksPadding,
  buttonWrapperPadding,
}) => {
  const navigationStyle = useMemo(() => {
    return {
      padding: navigationPadding,
    };
  }, [navigationPadding]);

  const pageLinksStyle = useMemo(() => {
    return {
      padding: pageLinksPadding,
    };
  }, [pageLinksPadding]);

  const buttonWrapperStyle = useMemo(() => {
    return {
      padding: buttonWrapperPadding,
    };
  }, [buttonWrapperPadding]);

  return (
    <header
      className={`self-stretch bg-gray-300 flex flex-row items-start justify-between pt-[30.9px] pb-[16.7px] pl-[60px] pr-[54px] box-border top-[0] z-[99] sticky gap-5 max-w-full text-center text-3xl text-background-default-default font-poppins mq750:pl-[30px] mq750:pr-[27px] mq750:box-border ${className}`}
      style={navigationStyle}
    >
      <div className="h-[102px] w-[1440px] relative bg-gray-300 hidden max-w-full" />
      <div className="h-[54.4px] w-[334px] flex flex-col items-start justify-start py-0 pl-0 pr-[23px] box-border max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src={logo2}
        />
      </div>
      <div
        className="w-[680px] flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 box-border max-w-full mq450:w-0 mq1125:hidden"
        style={pageLinksStyle}
      >
        <b className="self-stretch relative shrink-0 z-[1] mq450:hidden bottom-3">
          {/* <span className="whitespace-pre-wrap">{homeJobListings}</span> */}
          <ul className="flex space-x-5">
          <li className="[text-decoration:underline] text-skyblue ">Home</li>
          <li className="">Job Listings</li>
          <li className=" ">
            {training}
          </li>
          <li className="">Resources</li>
          <li className="">Interaction</li>
          </ul>
        </b>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-[4.1px] px-0 pb-0 left-10"
        style={buttonWrapperStyle}
      >
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

Navigation1.propTypes = {
  className: PropTypes.string,
  logo2: PropTypes.string,
  homeJobListings: PropTypes.string,
  training: PropTypes.string,
  resourcesInteraction: PropTypes.string,

  /** Style props */
  navigationPadding: PropTypes.any,
  pageLinksPadding: PropTypes.any,
  buttonWrapperPadding: PropTypes.any,
};

export default Navigation1;
