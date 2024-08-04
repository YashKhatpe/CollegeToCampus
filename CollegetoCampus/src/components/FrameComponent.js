import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  star,
  label,
  x,
  hasIconEnd,
  hasIconStart,
}) => {
  return (
    <div
      className={`w-36 flex flex-col items-end justify-start gap-[62px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start relative bg-[url('/public/organization-building-icon-11@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
        <img
          className="h-[60px] w-[60px] relative object-cover hidden min-h-[60px] z-[0]"
          alt=""
          src="/organization-building-icon-11@2x.png"
        />
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
            alt=""
            src="/organization-building-icon-11@2x.png"
          />
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[3]"
            alt=""
            src="/organization-building-icon-11@2x.png"
          />
        </div>
        <img
          className="h-[60px] w-[60px] relative object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/organization-building-icon-11@2x.png"
        />
      </div>
      <Button
        hasIconEnd={hasIconEnd}
        hasIconStart={hasIconStart}
        label={label}
        propBackgroundColor="#0d1b2a"
        propBorder="1px solid #2c2c2c"
        propOverflow="unset"
        propAlignSelf="stretch"
        propHeight="51px"
        propBorderRadius="8px"
        propPadding="12px 11px"
        propBoxShadow="unset"
        propWidth="unset"
        star={star}
        propFontWeight="600"
        propDisplay="inline-block"
        propMinWidth="46px"
        propMargin="0"
        propFontSize="16px"
        propFontFamily="Inter"
        propColor="#f5f5f5"
        x={x}
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  star: PropTypes.string,
  label: PropTypes.string,
  x: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
};

export default FrameComponent;
