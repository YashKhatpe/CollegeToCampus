import Navbar1 from "./Navbar1";
import Navigation1 from "./Navigation1";
import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <>
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-center text-31xl text-gainsboro font-poppins`}
      >
        {/* <Navbar1/> */}
      <div className="self-stretch bg-gray-300 flex flex-row items-start justify-start pt-0 px-0 pb-px box-border gap-[79px] max-w-full z-[1] mt-[-4px] mq1275:flex-wrap">
        <div className="h-[657px] w-[842px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[842px] max-w-full mq750:min-w-full mq1275:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[2] mq1275:self-stretch mq1275:w-auto"
            loading="lazy"
            alt=""
            src="/group-4@2x.png"
            />
        </div>
        {/* <img
          className="self-stretch w-[1440px] relative max-h-full hidden min-h-[658px] max-w-full z-[1]"
          alt=""
          src="/rectangle-58.svg"
        /> */}
        <h1 className="m-0 h-[569px] w-[430px] relative text-inherit tracking-[0.1px] leading-[20px] font-medium font-inherit flex items-center shrink-0 min-w-[430px] max-w-full z-[2] mq450:text-21xl mq450:leading-[16px] mq450:min-w-full mq1100:text-11xl mq1100:leading-[12px] mq1275:flex-1">
          <span className="w-full">
            <p className="m-0 text-background-default-default">&nbsp;</p>
            <p className="m-0 text-background-default-default">&nbsp;</p>
            <p className="m-0 text-background-default-default">&nbsp;</p>
            <p className="m-0 text-background-default-default">&nbsp;</p>
            <p className="m-0">AI RESUME</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">SCANNER</p>
          </span>
        </h1>
      </div>
    </section>
            </>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
