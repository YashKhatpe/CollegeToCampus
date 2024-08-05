import { useMemo } from "react";
import PropTypes from "prop-types";

const Checkboxes = ({
  className,
  checkboxesLeft,
  checkboxesPadding,
  checkboxesHeight,
  stateLayerMarginTop,
  stateLayerMarginLeft,
}) => {
  const checkboxesStyle = useMemo(() => {
    return {
      left: checkboxesLeft,
      padding: checkboxesPadding,
      height: checkboxesHeight,
    };
  }, [checkboxesLeft, checkboxesPadding, checkboxesHeight]);

  const stateLayerStyle = useMemo(() => {
    return {
      marginTop: stateLayerMarginTop,
      marginLeft: stateLayerMarginLeft,
    };
  }, [stateLayerMarginTop, stateLayerMarginLeft]);

  return (
    <div
      className={`!m-[0] absolute bottom-[-14px] left-[-40px] flex flex-row items-start justify-start p-1 z-[3] ${className}`}
      style={checkboxesStyle}
    >
      <div
        className="h-9 w-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border relative"
        style={stateLayerStyle}
      >
        <input
          className="m-0 h-[18px] w-[18px] accent-primary relative rounded-sm"
          type="checkbox" 
        />
        <input
          className="m-0 h-[18px] w-[18px] accent-primary absolute top-[calc(50%_-_30px)]  z-[1]"
          type="checkbox"
        />
      </div>
    </div>
  );
};

Checkboxes.propTypes = {
  className: PropTypes.string,

  /** Style props */
  checkboxesLeft: PropTypes.any,
  checkboxesPadding: PropTypes.any,
  checkboxesHeight: PropTypes.any,
  stateLayerMarginTop: PropTypes.any,
  stateLayerMarginLeft: PropTypes.any,
};

export default Checkboxes;