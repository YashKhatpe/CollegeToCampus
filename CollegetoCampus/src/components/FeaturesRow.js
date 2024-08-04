import { useMemo } from "react";
import PropTypes from "prop-types";

const FeaturesRow = ({
  className = "",
  interaction71,
  propBorderRadius,
  realTimeChat,
  engageWithProfessionalsFo,
}) => {
  const interaction71IconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className={`h-[484px] rounded-t-23xl rounded-b-none bg-silver flex flex-col items-start justify-start pt-0 px-0 pb-[49px] box-border gap-[26px] text-center text-xl text-gray-300 font-lato mq800:pb-8 mq800:box-border ${className}`}
    >
      <div className="self-stretch h-[484px] relative rounded-t-23xl rounded-b-none bg-silver hidden" />
      <img
        className="self-stretch flex-1 relative rounded-t-23xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={interaction71}
        style={interaction71IconStyle}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[38px] pr-[39px]">
        <div className="flex-1 relative z-[1] mq450:text-base">
          <p className="m-0 text-5xl font-extrabold">{realTimeChat}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{engageWithProfessionalsFo}</p>
        </div>
      </div>
    </div>
  );
};

FeaturesRow.propTypes = {
  className: PropTypes.string,
  interaction71: PropTypes.string,
  realTimeChat: PropTypes.string,
  engageWithProfessionalsFo: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
};

export default FeaturesRow;
