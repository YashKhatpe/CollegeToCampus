import FooterContent from "./FooterContent";
import EmailField from "./EmailField";
import PropTypes from "prop-types";

const Footer3 = ({ className = "", twitter }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-end py-0 px-7 box-border max-w-full shrink-0 ${className}`}
    >
      <div className="w-[1338px] flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1225:flex-wrap">
        <FooterContent
          propGap="20.5px"
          propHeight="55.6px"
          propWidth="451px"
          propPadding="unset"
          twitter={twitter}
          propPadding1="24.1px 0px 0px"
        />
        <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] mq750:min-w-full mq1050:ml-0 mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <EmailField propGap="20.7px" propHeight="83.7px" />
            <button className="cursor-pointer border-lightslategray border-[1px] border-solid py-3 px-[79px] bg-lightslategray rounded-radius-200 box-border overflow-hidden flex flex-row items-start justify-start gap-space-200 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
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

Footer3.propTypes = {
  className: PropTypes.string,
  twitter: PropTypes.string,
};

export default Footer3;
