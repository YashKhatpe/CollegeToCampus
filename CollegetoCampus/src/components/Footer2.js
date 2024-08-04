import FooterContent from "./FooterContent";
import EmailField from "./EmailField";
import Button from "./Button";
import PropTypes from "prop-types";

const Footer2 = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-gray-300 flex flex-row items-end justify-start pt-[108px] pb-[154px] pl-[83px] pr-[18px] box-border [row-gap:20px] max-w-full shrink-0 text-left text-45xl text-silver font-lato mq800:pl-[41px] mq800:pt-[70px] mq800:pb-[100px] mq800:box-border mq1325:flex-wrap ${className}`}
    >
      <div className="h-[575px] w-[1440px] relative bg-gray-300 hidden max-w-full z-[1]" />
      <FooterContent twitter="/twitter.svg" />
      <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-10xl mq800:min-w-full mq1125:ml-0 mq1325:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
          <EmailField />
          <Button
            hasIconEnd={false}
            hasIconStart={false}
            label="Join our platform now"
            propBackgroundColor="#778da9"
            propBorder="1px solid #778da9"
            propOverflow="hidden"
            propAlignSelf="unset"
            propHeight="49px"
            propBorderRadius="8px"
            propPadding="18px 70px"
            propBoxShadow="unset"
            propWidth="333px"
            star="/star.svg"
            propFontWeight="800"
            propDisplay="unset"
            propMinWidth="unset"
            propMargin="unset"
            propFontSize="16px"
            propFontFamily="Inter"
            propColor="#f5f5f5"
            x="/x.svg"
          />
        </div>
      </div>
    </footer>
  );
};

Footer2.propTypes = {
  className: PropTypes.string,
};

export default Footer2;
