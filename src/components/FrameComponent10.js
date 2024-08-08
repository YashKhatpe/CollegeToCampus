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
      <div className="bg-gray-300 mq550:flex-col flex flex-row w-full">
        <div className="min-w-[425px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border  max-w-full  mq1275:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-fit z-[2] mq1275:self-stretch mq1275:w-auto"
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
        <h1 className="w-full min-w-[420px] flex flex-col text-center justify-center box-border  max-w-full  mq1275:flex-1">
          <span className="w-full p-8">
            <p className="m-0">AI RESUME</p>
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
