import FooterResources from "./FooterResources";
import PropTypes from "prop-types";

const FrameComponent23 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-end justify-center pt-12 px-[50px] pb-[78px] box-border relative [row-gap:20px] max-w-full text-left text-45xl text-silver font-lato lg:flex-wrap mq450:pt-[31px] mq450:pb-[51px] mq450:box-border mq750:pl-[25px] mq750:pr-[25px] mq750:box-border ${className}`}
    >
      <div className="h-[500px] w-[1440px] absolute !m-[0] bottom-[-61px] left-[-1px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-500 w-full h-full" />
        <div className="absolute top-[337px] left-[51px] w-6 h-6">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
            alt=""
            src="/copyright-circle.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden z-[2]"
            alt=""
            src="/copyright-circle-1.svg"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-center min-w-[617px] [row-gap:20px] max-w-full mq750:min-w-full mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[358px] max-w-full gap-4 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full">
            <h1 className="m-0 self-stretch h-[107px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">
              Connect
            </h1>
            <h2 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[1] mq450:text-4xl">
              Bridging students with recruiters for opportunities
            </h2>
          </div>
          <div className="flex flex-row items-start justify-start gap-[26px]">
            <img
              className="h-[33px] w-[35px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
              loading="lazy"
              alt=""
              src="/facebook.svg"
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
          <div className="w-[484px] flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full text-xl">
            <b className="flex-1 relative inline-block max-w-full z-[1] mq450:text-base">
              2024. All rights reserved.
            </b>
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
      <FooterResources
        propGap="unset"
        propHeight="149px"
        propWidth="333px"
        propMarginTop="-37px"
        propPadding="unset"
        star="/star.svg"
        label="Join our platform now"
        x1="/x.svg"
        hasIconEnd={false}
        hasIconStart={false}
      />
    </footer>
  );
};

FrameComponent23.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent23;
