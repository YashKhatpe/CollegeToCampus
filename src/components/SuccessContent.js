import InputFields from "./InputFields";
import PropTypes from "prop-types";

const SuccessContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1123px] flex flex-col items-start justify-start gap-[75px] max-w-full text-center text-35xl text-gray-300 font-poppins gap-[19px] gap-[37px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[241px] pr-5 box-border max-w-full mq450:pl-5 mq450:box-border mq1050:pl-[120px] mq1050:box-border">
        <div className="w-[620px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <div className="w-[591px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-13xl mq1050:text-24xl">
              Student Success
            </h1>
          </div>
          <div className="self-stretch relative text-xl font-lato mq450:text-base">
            Showcasing achievements, placements, and partnerships through
            engaging infographics
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[17px] box-border max-w-full text-45xl font-lato">
        <div className="w-[966px] flex flex-col items-start justify-start gap-[68px] max-w-full gap-[17px] gap-[34px]">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[966px] flex flex-col items-end justify-start gap-2 max-w-full">
              <div className="w-[322px] flex flex-row items-start justify-end pt-0 px-0.5 pb-[19px] box-border max-w-full">
                <img
                  className="h-[314px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover"
                  loading="lazy"
                  alt=""
                  src="/trainingpage41@2x.png"
                />
              </div>
              <div className="w-[930px] flex flex-row items-start justify-start gap-[38px] max-w-full gap-[19px] mq1050:flex-wrap">
                <div className="h-[325px] w-[305px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[305px] mq1050:flex-1">
                  <img
                    className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover mq1050:self-stretch mq1050:w-auto"
                    loading="lazy"
                    alt=""
                    src="/trainingpage51@2x.png"
                  />
                </div>
                <img
                  className="h-[324px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[382px] min-h-[324px] mq450:min-w-full"
                  loading="lazy"
                  alt=""
                  src="/trainingpage61@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2 box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-19xl mq450:leading-[38px] mq1050:text-32xl mq1050:leading-[51px]">{`Contact us for Opportunities `}</h1>
              </div>
            </div>
            <img
              className="w-[575px] relative rounded-lg max-h-full object-cover max-w-full ml-[-930px]"
              loading="lazy"
              alt=""
              src="/trainingpage3@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-7 box-border max-w-full text-xl">
            <div className="w-[620px] relative inline-block shrink-0 max-w-full mq450:text-base">
              Reach out for support in your job search and training needs.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[729px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[519px] w-[607px] absolute !m-[0] top-[51px] right-[-545px] rounded-lg object-cover"
          loading="lazy"
          alt=""
          src="/trainingpage7-1@2x.png"
        />
        <form className="m-0 flex-1 rounded-mini bg-silver flex flex-col items-start justify-start pt-[71px] pb-[45px] pl-10 pr-[30px] box-border gap-[25px] max-w-full z-[1] mq750:pt-[46px] mq750:pb-[29px] mq750:box-border">
          <div className="w-[729px] h-[622px] relative rounded-mini bg-silver hidden max-w-full" />
          <InputFields
            yourFirstName="Your First Name"
            emailFieldPlaceholder="Enter your first name "
          />
          <InputFields
            propPadding="unset"
            propWidth="unset"
            yourFirstName="Your Email Address"
            propFlex="unset"
            emailFieldPlaceholder="Enter you email address"
          />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border gap-[3px] max-w-full">
            <div className="w-[193px] flex flex-row items-start justify-start py-0 px-[11px] box-border">
              <div className="flex-1 relative text-xl font-lato text-gray-300 text-left z-[2] mq450:text-base">
                Your Message
              </div>
            </div>
            <div className="self-stretch rounded-mini bg-gray-300 flex flex-row items-start justify-start py-[18px] px-[26px] box-border min-h-[108px] max-w-full z-[2]">
              <div className="h-[108px] w-[659px] relative rounded-mini bg-gray-300 hidden max-w-full" />
              <div className="w-[358px] relative text-6xl font-lato text-background-default-default text-left inline-block shrink-0 max-w-full z-[3] mq450:text-xl">
                Type your message here
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[11px] px-[25px] pb-[17px] bg-gray-300 w-[322px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[2] hover:bg-darkslategray-100">
            <div className="h-[58px] w-[322px] relative rounded-lg bg-gray-300 hidden max-w-full" />
            <div className="w-[264px] relative text-6xl font-lato text-background-default-default text-center inline-block shrink-0 z-[3]">
              Submit Your Inquiry
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

SuccessContent.propTypes = {
  className: PropTypes.string,
};

export default SuccessContent;
