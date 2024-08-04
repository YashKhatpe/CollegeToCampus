import { useMemo } from "react";
import PropTypes from "prop-types";

const PlacementResources = ({
  className = "",
  propFlex,
  propGap,
  propWidth,
  propHeight,
  propDisplay,
  propPadding,
  icon,
}) => {
  const placementResourcesStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      width: propWidth,
    };
  }, [propFlex, propGap, propWidth]);

  const placementResourcesGuidesContainerStyle = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const placementResourceIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[61px] max-w-full text-left text-10xl text-silver font-lato gap-[30px] ${className}`}
      style={placementResourcesStyle}
    >
      <div
        className="h-[126px] relative inline-block"
        style={placementResourcesGuidesContainerStyle}
      >
        <p className="m-0">
          <span>
            <b>Placement Resources</b>
          </span>
        </p>
        <p className="m-0">
          <span className="font-medium">
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-lgi">
          <span className="font-medium">
            <span>Guides and tools for resumes, interviews and</span>
          </span>
        </p>
        <p className="m-0">
          <span className="font-medium">
            <span>job postings.</span>
          </span>
        </p>
      </div>
      <div
        className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0"
        style={placementResourceIconStyle}
      >
        <img
          className="w-4 h-[15px] relative"
          loading="lazy"
          alt=""
          src={icon}
        />
      </div>
    </div>
  );
};

PlacementResources.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propDisplay: PropTypes.any,
  propPadding: PropTypes.any,
};

export default PlacementResources;
