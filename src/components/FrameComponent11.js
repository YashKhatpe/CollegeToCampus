import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent11 = ({
  className = "",
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  return (
    <section
      className={`w-[1317px] flex flex-row items-start justify-center max-w-full shrink-0 text-left text-31xl text-silver font-lato ${className}`}
      style={frameSectionStyle}
    >
      <div className="w-[1029px] flex flex-row items-start justify-center gap-20 max-w-full gap-5 mq1050:flex-wrap gap-10">
        <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] min-w-[335px] max-w-full mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
          <p className="m-0">{`Connecting Students `}</p>
          <p className="m-0">with Opportunites</p>
        </h1>
        <div className="w-[434px] flex flex-col items-start justify-start pt-[105px] px-0 pb-0 box-border min-w-[434px] max-w-full text-21xl font-single-line-body-base mq750:min-w-full mq1050:flex-1">
          <b className="self-stretch h-[116px] relative inline-block shrink-0 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] mq450:text-lg">
            <p className="[margin-block-start:0] [margin-block-end:9px]">
              <span>
                <span className="whitespace-pre-wrap">150+ 15</span>
              </span>
            </p>
            <p className="[margin-block-start:0] [margin-block-end:9px] text-4xl">
              <span>
                <span className="whitespace-pre-wrap">{`Join Us                          Success Stories       `}</span>
              </span>
            </p>
            <p className="m-0 text-30xl text-background-default-default">
              &nbsp;
            </p>
          </b>
        </div>
      </div>
    </section>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent11;
