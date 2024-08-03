import Search from "./Search";
import Button from "./Button";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1402px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full shrink-0 text-left text-45xl text-silver font-lato ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start shrink-0 [row-gap:20px] max-w-full mq1125:flex-wrap">
        <div className="flex-1 flex flex-row items-start justify-start [row-gap:20px] max-w-full mq750:min-w-full mq1025:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[358px] max-w-full mq450:min-w-full gap-[23px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20.5px] max-w-full">
              <h1 className="m-0 self-stretch h-[55.6px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-19xl mq450:leading-[38px] mq1025:text-32xl mq1025:leading-[51px]">
                Connect
              </h1>
              <h1 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[2] mq450:text-4xl">
                Bridging students with recruiters for opportunities
              </h1>
            </div>
            <div className="w-[451px] flex flex-col items-start justify-start gap-[33px] max-w-full text-xl gap-4">
              <div className="flex flex-row items-start justify-start gap-[26px]">
                <img
                  className="h-[33px] w-[35px] relative overflow-hidden shrink-0 min-h-[33px]"
                  loading="lazy"
                  alt=""
                  src="/facebook.svg"
                />
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[7px]">
                  <img
                    className="w-9 h-[33px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/instagram.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                  <img
                    className="w-8 h-[30px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/twitter.svg"
                  />
                </div>
                <img
                  className="h-[30px] w-[37px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/github.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/copyright-circle.svg"
                />
                <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_33px)] mq450:text-base">
                  2024. All rights reserved.
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[399px] flex flex-col items-start justify-start pt-[24.1px] px-0 pb-0 box-border min-w-[399px] max-w-full text-10xl mq750:min-w-full mq1025:flex-1">
            <div className="self-stretch relative mq450:text-4xl">
              <p className="m-0 font-extrabold">RESOURCES</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">+1234567890</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">contactcc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-10xl mq750:min-w-full mq1025:ml-0 mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20.7px] max-w-full">
            <div className="self-stretch h-[83.7px] relative inline-block shrink-0 z-[1] mq450:text-base">
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
            <div className="w-[333px] flex flex-col items-start justify-start gap-4 max-w-full text-base text-text-brand-on-brand font-single-line-body-base">
              <Search />
              <Button
                hasIconEnd
                hasIconStart
                label="Join our platform now"
                star="/star.svg"
                x="/x.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
