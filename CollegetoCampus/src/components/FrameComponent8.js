import PlacementResources from "./PlacementResources";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1412px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-10xl text-silver font-lato ${className}`}
    >
      <div className="w-[978px] flex flex-row items-start justify-between max-w-full gap-5 mq1100:flex-wrap mq1100:justify-center">
        <div className="w-[445px] flex flex-col items-start justify-start gap-[21px] min-w-[445px] max-w-full mq750:min-w-full mq1100:flex-1">
          <img
            className="self-stretch h-[253px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/homepage9-2@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-2.5 box-border max-w-full">
            <PlacementResources icon="/icon.svg" />
          </div>
        </div>
        <div className="w-[444px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[444px] max-w-full mq750:min-w-full mq1100:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <img
              className="self-stretch h-[253px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/homepage7-2@2x.png"
            />
            <PlacementResources
              propFlex="unset"
              propGap="65px"
              propWidth="430px"
              propHeight="unset"
              propDisplay="unset"
              propPadding="6px 0px 0px"
              icon="/icon-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
