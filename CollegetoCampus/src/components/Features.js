import FeatureItems from "./FeatureItems";
import PropTypes from "prop-types";

const Features = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[65px] pl-[52px] pr-[53px] box-border max-w-full shrink-0 text-left text-xl text-gray-300 font-lato mq800:pl-[26px] mq800:pr-[26px] mq800:pb-[42px] mq800:box-border ${className}`}
    >
      <div className="flex-1 grid flex-row items-start justify-start gap-[45px] max-w-full grid-cols-[repeat(3,_minmax(311px,_1fr))] gap-[22px] mq800:grid-cols-[minmax(311px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(311px,_539px))]">
        <FeatureItems
          interaction71="/interaction7-11@2x.png"
          realTimeChat="Real-Time chat"
          engageWithProfessionalsFo="Engage with professionals for personalized career guidance and immediate responses to your inquiries"
        />
        <FeatureItems
          interaction71="/interaction7-31@2x.png"
          propBorderRadius="16px 16px 0px 0px"
          realTimeChat="Career Resources"
          engageWithProfessionalsFo="Access valuable resources and tools to support your career preparation and job search efforts."
        />
        <FeatureItems
          interaction71="/interaction7-51@2x.png"
          propBorderRadius="16px 42px 0px 0px"
          realTimeChat="Expert Insights"
          engageWithProfessionalsFo="Connect with industry experts to gain insights and advice tailored to your career path."
        />
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
