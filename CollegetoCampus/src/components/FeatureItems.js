import { useMemo } from "react";
import PropTypes from "prop-types";

const FeatureItems = ({
  className = "",
  interaction71,
  propBorderRadius,
  realTimeChat,
  engageWithProfessionalsFo,
}) => {
  const interaction71Icon1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className={`h-[546px] rounded-t-23xl rounded-b-none bg-silver flex flex-col items-start justify-start pt-0 px-0 pb-[41px] box-border gap-[35px] max-w-full text-left text-xl text-gray-300 font-lato mq800:pb-[27px] mq800:box-border gap-[17px] ${className}`}
    >
      <div className="self-stretch h-[546px] relative rounded-t-23xl rounded-b-none bg-silver hidden" />
      <img
        className="self-stretch flex-1 relative rounded-t-23xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={interaction71}
        style={interaction71Icon1Style}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[52px] pr-[54px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative z-[1] mq450:text-base">
          <p className="m-0 text-5xl font-extrabold">{realTimeChat}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{engageWithProfessionalsFo}</p>
        </div>
      </div>
    </div>
  );
};

FeatureItems.propTypes = {
  className: PropTypes.string,
  interaction71: PropTypes.string,
  realTimeChat: PropTypes.string,
  engageWithProfessionalsFo: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
};

export default FeatureItems;
