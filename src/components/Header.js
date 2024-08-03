import Navigation1 from "./Navigation1";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[319.4px] box-border relative gap-[71px] max-w-full text-left text-46xl text-gray-300 font-lato gap-[18px] gap-[35px] mq750:pb-52 mq750:box-border ${className}`}
    >
      <Navigation1
        logo2="/logo-25@2x.png"
        homeJobListings="Home      Job Listings      "
        training="Training"
        resourcesInteraction="      Resources      Interaction"
      />
      <div className="w-[1369px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[791px] flex flex-col items-start justify-start gap-[83.6px] max-w-full gap-[21px] gap-[42px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-[9px] box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-20xl mq450:leading-[38px] mq1050:text-33xl mq1050:leading-[51px]">
              Empowering Careers Now
            </h1>
          </div>
          <div className="self-stretch relative text-xl text-center mq450:text-base">
            <p className="m-0">
              Connecting students with employers through innovative tools and
              resources for
            </p>
            <p className="m-0">successful career placements</p>
          </div>
        </div>
      </div>
      <img
        className="w-[650px] h-[392px] absolute !m-[0] bottom-[-191px] left-[56px] rounded-lg object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-71@2x.png"
      />
      <img
        className="w-[650px] h-[392px] absolute !m-[0] right-[56px] bottom-[-191px] rounded-lg object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-81@2x.png"
      />
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
