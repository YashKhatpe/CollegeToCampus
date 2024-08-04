import PropTypes from "prop-types";

const StudentGrid = ({ className = "" }) => {
  return (
    <div
      className={`w-[1031px] flex flex-col items-start justify-start gap-[67px] max-w-full text-center text-31xl text-gray-300 font-poppins gap-[17px] gap-[33px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[54px] pb-3 box-border max-w-full mq1050:pl-[27px] mq1050:pr-[27px] mq1050:box-border">
        <div className="w-[872px] flex flex-col items-end justify-start gap-[63px] max-w-full gap-[31px] gap-4">
          <div className="w-[820px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[620px] flex flex-col items-start justify-start gap-4 max-w-full">
              <div className="w-[591px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq1050:text-21xl mq450:text-11xl">
                  Student Success
                </h1>
              </div>
              <div className="self-stretch relative text-xl font-lato mq450:text-base">
                Showcasing achievements, placements, and partnerships through
                engaging infographics
              </div>
            </div>
          </div>
          <div className="self-stretch h-[633px] relative max-w-full">
            <img
              className="absolute top-[0px] left-[0px] rounded-lg w-[539px] h-[298px] object-cover"
              loading="lazy"
              alt=""
              src="/trainingpage3@2x.png"
            />
            <div className="absolute top-[0px] left-[322px] w-[550px] h-[632px] flex flex-col items-end justify-start gap-[26px] max-w-full">
              <div className="flex flex-row items-start justify-end py-0 px-0.5">
                <img
                  className="h-[298px] w-[298px] relative rounded-lg object-cover"
                  loading="lazy"
                  alt=""
                  src="/trainingpage4@2x.png"
                />
              </div>
              <img
                className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/trainingpage6@2x.png"
              />
            </div>
            <img
              className="absolute top-[325px] left-[0px] rounded-lg w-[286px] h-[308px] object-cover"
              loading="lazy"
              alt=""
              src="/trainingpage5@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full font-lato">
        <div className="w-[958px] flex flex-col items-start justify-start gap-[68px] max-w-full gap-[17px] gap-[34px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">{`Contact us for Opportunities `}</h1>
          <div className="w-[914px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl">
            <div className="w-[620px] relative inline-block shrink-0 max-w-full mq450:text-base">
              Reach out for support in your job search and training needs.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[607px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[415px] w-[505px] absolute !m-[0] top-[41px] right-[-453px] rounded-lg object-cover"
          loading="lazy"
          alt=""
          src="/trainingpage7-2@2x.png"
        />
        <form className="m-0 flex-1 rounded-mini bg-silver flex flex-col items-start justify-start pt-[52px] pb-9 pl-[33px] pr-[25px] box-border gap-8 max-w-full z-[1] gap-4 mq750:pt-[34px] mq750:pb-[23px] mq750:box-border">
          <div className="w-[607px] h-[498px] relative rounded-mini bg-silver hidden max-w-full" />
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[3px]">
            <div className="relative text-xl font-lato text-gray-300 text-left z-[2] mq450:text-base">
              Your First Name
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-gray-300 self-stretch h-[66px] rounded-mini flex flex-row items-start justify-start pt-5 px-[19px] pb-7 box-border font-lato text-mini text-background-default-default min-w-[250px] z-[2]"
              placeholder="Enter your first name "
              type="text"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-3.5 max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div className="h-9 w-[143px] absolute !m-[0] top-[-25px] left-[1px] text-xl font-lato text-gray-300 text-left inline-block z-[2] mq450:text-base">
                Your Email Address
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-gray-300 h-16 flex-1 rounded-mini flex flex-row items-start justify-start pt-[19px] px-[19px] pb-[27px] box-border font-lato text-mini text-background-default-default min-w-[250px] max-w-full z-[3]"
                placeholder="Enter you email address"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-1">
              <div className="w-[143px] relative text-xl font-lato text-gray-300 text-left inline-block z-[2] mq450:text-base">
                Your Message
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-gray-300 self-stretch h-[87px] rounded-mini flex flex-row items-start justify-start pt-3.5 px-[22px] pb-[55px] box-border font-lato text-mini text-background-default-default min-w-[250px] z-[2]"
                placeholder="Type your message here"
                type="text"
              />
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[13px] pb-[15px] pl-0 pr-1 bg-gray-300 w-[268px] rounded-lg flex flex-row items-start justify-start box-border whitespace-nowrap z-[2] hover:bg-darkslategray-100">
            <div className="h-[46px] w-[268px] relative rounded-lg bg-gray-300 hidden" />
            <div className="flex-1 relative text-mini font-lato text-background-default-default text-center z-[3]">
              Submit Your Inquiry
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

StudentGrid.propTypes = {
  className: PropTypes.string,
};

export default StudentGrid;
