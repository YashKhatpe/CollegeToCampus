import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  propFlex,
  propGap,
  propAlignSelf,
  propFlex1,
  propMinWidth,
  propWidth,
  interactiveFeatures,
  realtimeSessionsForPracti,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propGap, propAlignSelf]);

  const interactiveFeaturesRealtimeContainerStyle = useMemo(() => {
    return {
      flex: propFlex1,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex1, propMinWidth, propWidth]);

  const interactiveFeaturesIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[71.7px] max-w-full text-left text-10xl text-silver font-lato gap-[18px] mq750:flex-wrap gap-9 ${className}`}
      style={frameDivStyle}
    >
      <div
        className="flex-1 relative inline-block min-w-[273px] max-w-full"
        style={interactiveFeaturesRealtimeContainerStyle}
      >
        <p className="m-0">
          <span>
            <b>{interactiveFeatures}</b>
          </span>
        </p>
        <p className="m-0">
          <span className="font-medium">
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-lgi">
          <span className="font-medium">
            <span>{realtimeSessionsForPracti}</span>
          </span>
        </p>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0"
        style={interactiveFeaturesIconStyle}
      >
        <img
          className="w-[18.7px] h-[18.7px] relative"
          alt=""
          src="/icon1.svg"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  interactiveFeatures: PropTypes.string,
  realtimeSessionsForPracti: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent2;
