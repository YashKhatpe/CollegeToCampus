import { useMemo } from "react";
import Search from "./Search";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  propMinWidth,
  propPadding,
  propAlignSelf,
  propHeight,
}) => {
  const footerContentStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const button1Style = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propPadding, propAlignSelf, propHeight]);

  return (
    <footer
      className={`self-stretch bg-gray-300 flex flex-row items-end justify-center pt-[123px] px-[51px] pb-[139px] box-border [row-gap:20px] max-w-full text-left text-45xl text-silver font-lato mq750:pt-20 mq750:px-[25px] mq750:pb-[90px] mq750:box-border mq1125:flex-wrap ${className}`}
    >
      <div className="h-[575px] w-[1440px] relative bg-gray-300 hidden max-w-full z-[1]" />
      <div
        className="flex-1 flex flex-row items-start justify-center min-w-[617px] [row-gap:20px] max-w-full mq1050:flex-wrap mq1050:min-w-full"
        style={footerContentStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[358px] max-w-full gap-[23px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <h1 className="m-0 self-stretch h-[107px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
              Connect
            </h1>
            <h3 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[1] mq450:text-4xl">
              Bridging students with recruiters for opportunities
            </h3>
          </div>
          <div className="w-[451px] flex flex-col items-start justify-start gap-[33px] max-w-full text-xl gap-4">
            <div className="flex flex-row items-start justify-start gap-[26px]">
              <img
                className="h-[33px] w-[35px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
                loading="lazy"
                alt=""
                src="/facebook1.svg"
              />
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[7px]">
                <img
                  className="w-9 h-[33px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                <img
                  className="w-8 h-[30px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/twitter.svg"
                />
              </div>
              <img
                className="h-[30px] w-[37px] relative overflow-hidden shrink-0 z-[1]"
                loading="lazy"
                alt=""
                src="/github.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                loading="lazy"
                alt=""
                src="/copyright-circle.svg"
              />
              <b className="flex-1 relative inline-block max-w-[calc(100%_-_33px)] z-[1] mq450:text-base">
                2024. All rights reserved.
              </b>
            </div>
          </div>
        </div>
        <div className="w-[399px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border min-w-[399px] max-w-full text-10xl mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch relative z-[1] mq450:text-4xl">
            <p className="m-0 font-extrabold">RESOURCES</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">+1234567890</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">contactcc@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-10xl mq750:min-w-full mq1050:ml-0 mq1125:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch h-[149px] relative inline-block shrink-0 z-[1] mq450:text-base">
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
          <div className="w-[333px] flex flex-col items-start justify-start gap-4 max-w-full mt-[-37px]">
            <Search
              propAlignSelf="stretch"
              propWidth="unset"
              propMarginTop="unset"
            />
            <button
              className="cursor-pointer border-lightslategray border-[1px] border-solid py-3 px-[79px] bg-lightslategray rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-space-200 z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
              style={button1Style}
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star.svg"
              />
              <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left">
                Join our platform now
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
};

export default Footer;
