import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[117px] box-border max-w-full shrink-0 text-left text-10xl text-silver font-lato mq750:pb-[76px] mq750:box-border ${className}`}
    >
      <div className="w-[1176.4px] flex flex-row flex-wrap items-start justify-center gap-[105px] max-w-full gap-[26px] gap-[52px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[348px] max-w-full mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[46px] max-w-full gap-[23px]">
            <img
              className="self-stretch h-[301px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/homepage8-21@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-3.5 box-border max-w-full">
              <FrameComponent2
                interactiveFeatures="Interactive Features"
                realtimeSessionsForPracti="Realtime sessions for practice and feedback for users."
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[45px] min-w-[348px] max-w-full mq450:min-w-full gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
            <img
              className="h-[301px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/homepage6-21@2x.png"
            />
          </div>
          <FrameComponent2
            propFlex="unset"
            propGap="20px"
            propAlignSelf="stretch"
            propFlex1="unset"
            propMinWidth="unset"
            propWidth="420px"
            interactiveFeatures="Training Programs"
            realtimeSessionsForPracti="Interactive courses with detailed content and schedules availablr"
            propPadding="32.7px 0px 0px"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
