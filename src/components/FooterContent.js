import { useMemo } from "react";
import PropTypes from "prop-types";

const FooterContent = ({
  className = "",
  propGap,
  propHeight,
  propWidth,
  propPadding,
  twitter,
  propPadding1,
}) => {
  const socialLinksStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const connectStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const socialIconsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const contactInfoStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full text-left text-45xl text-silver font-lato mq800:min-w-full mq1125:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[358px] max-w-full gap-[23px] mq800:min-w-full">
        <div
          className="self-stretch flex flex-col items-start justify-start max-w-full"
          style={socialLinksStyle}
        >
          <h1
            className="m-0 self-stretch h-[107px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2] mq800:text-32xl mq800:leading-[51px] mq450:text-19xl mq450:leading-[38px]"
            style={connectStyle}
          >
            Connect
          </h1>
          <h3 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[3] mq450:text-4xl">
            Bridging students with recruiters for opportunities
          </h3>
        </div>
        <div
          className="w-[471px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[33px] max-w-full text-xl gap-4"
          style={socialIconsStyle}
        >
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
                src={twitter}
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
      <div
        className="w-[399px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border min-w-[399px] max-w-full text-10xl mq800:min-w-full mq1125:flex-1"
        style={contactInfoStyle}
      >
        <div className="self-stretch relative z-[1] mq450:text-4xl">
          <p className="m-0 font-extrabold">RESOURCES</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">+1234567890</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">contactcc@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
  twitter: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default FooterContent;
