import PropTypes from "prop-types";

const DescriptionContainer = ({ className = "" }) => {
  return (
    <div
      className={`w-[1027px] flex flex-col items-start justify-start gap-[54px] max-w-full text-left text-31xl text-gray-500 font-lato gap-[27px] ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
        Empowering Connections through Direct Video Interactions
      </h1>
      <div className="w-[923px] flex flex-row items-start justify-start pt-0 px-[66px] pb-[30px] box-border max-w-full text-center text-xl mq1050:pl-[33px] mq1050:pr-[33px] mq1050:box-border">
        <div className="flex-1 relative inline-block max-w-full mq450:text-base">
          Seamless Video Interactions for Enhanced Recruitment and Networking
        </div>
      </div>
      <div className="w-[957px] flex flex-row items-start justify-start py-0 px-[27px] box-border max-w-full">
        <form className="m-0 flex-1 bg-gray-400 flex flex-col items-end justify-start pt-0 px-0 pb-[52px] box-border max-w-full mq750:pb-[34px] mq750:box-border mq450:pb-[22px] mq450:box-border">
          <div className="self-stretch h-[764px] relative bg-gray-400 hidden" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 px-px box-border max-w-full">
            <button className="cursor-pointer [border:none] pt-[13px] pb-[34px] pl-[68px] pr-5 bg-gray-300 flex-1 flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-dimgray mq450:pl-5 mq450:box-border">
              <div className="h-[67px] w-[901px] relative bg-gray-300 hidden max-w-full" />
              <div className="w-[311px] relative text-6xl tracking-[0.1px] leading-[20px] font-medium font-poppins text-background-default-default text-center flex items-center justify-center shrink-0 z-[2] mq450:text-xl mq450:leading-[16px]">
                Video Chat
              </div>
            </button>
          </div>
          <div className="w-[884px] flex flex-row items-end justify-center gap-10 max-w-full mq1050:flex-wrap gap-5">
            <div className="flex-1 flex flex-col items-end justify-start gap-[212px] min-w-[323px] max-w-full gap-[106px]">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[18px] pr-[9px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[17px] max-w-full mq750:flex-wrap mq1050:flex-1">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[144px] min-h-[247px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/virtual-meet2-1@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[150px] min-h-[247px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/virtual-meet-3@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start gap-4 max-w-full mq750:flex-wrap">
                <div className="h-[37px] w-[52px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-radius-200 bg-dodgerblue border-border-brand-default border-[1px] border-solid box-border w-full h-full overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star.svg"
                    />
                    <div className="w-11 relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left hidden">
                      {" "}
                      Send
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[6px] left-[13px] w-[27px] h-6 overflow-hidden z-[2]"
                    loading="lazy"
                    alt=""
                    src="/video.svg"
                  />
                </div>
                <div className="h-[37px] flex-1 relative min-w-[235px] max-w-full">
                  <div className="absolute top-[0px] left-[0px] rounded-radius-200 bg-crimson border-border-brand-default border-[1px] border-solid box-border w-[52px] h-[37px] overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star.svg"
                    />
                    <div className="w-11 relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left hidden">
                      {" "}
                      Send
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[6px] left-[12px] w-[27px] h-6 overflow-hidden z-[2]"
                    loading="lazy"
                    alt=""
                    src="/mic-off.svg"
                  />
                </div>
                <div className="h-9 w-[52px] flex flex-row items-start justify-start relative">
                  <div className="self-stretch flex-1 rounded-radius-200 bg-dodgerblue border-border-brand-default border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 z-[1]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star1.svg"
                    />
                    <div className="w-11 relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left hidden">
                      {" "}
                      Send
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x2.svg"
                    />
                  </div>
                  <img
                    className="h-[21px] w-[21px] absolute !m-[0] bottom-[6px] left-[10px] z-[2]"
                    alt=""
                    src="/person.svg"
                  />
                  <img
                    className="h-4 w-3 absolute !m-[0] top-[7px] right-[16px] z-[3]"
                    loading="lazy"
                    alt=""
                    src="/add.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[347px] bg-darkslategray-200 flex flex-col items-start justify-start pt-[17px] pb-2.5 pl-2.5 pr-[9px] box-border gap-[435px] min-w-[347px] max-w-full z-[2] mq750:min-w-full mq1050:flex-1 gap-[217px]">
              <div className="w-[347px] h-[645px] relative bg-darkslategray-200 hidden max-w-full" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4.3px] max-w-full">
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="flex flex-row items-end justify-start gap-1.5">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <img
                        className="w-[19px] h-[21px] relative z-[3]"
                        alt=""
                        src="/person-1.svg"
                      />
                    </div>
                    <div className="relative text-mini tracking-[0.1px] leading-[20px] font-medium font-poppins text-background-default-default text-left inline-block min-w-[26px] z-[3]">
                      Me
                    </div>
                  </div>
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-border-default-default self-stretch h-10 rounded-xl flex flex-row items-start justify-start pt-3 px-3 pb-2 box-border font-poppins font-medium text-mini text-black min-w-[197px] z-[3]"
                  placeholder="Hello"
                  type="text"
                />
                <div className="w-[82px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
                  <div className="flex-1 flex flex-row items-end justify-start gap-1.5">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <img
                        className="w-[19px] h-[21px] relative z-[3]"
                        alt=""
                        src="/person-1.svg"
                      />
                    </div>
                    <div className="flex-1 relative text-mini tracking-[0.1px] leading-[20px] font-medium font-poppins text-background-default-default text-left z-[3]">
                      Yash
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-border-default-default flex flex-row items-start justify-start pt-[13px] px-3 pb-2 box-border max-w-full z-[3]">
                  <div className="h-[41px] w-[328px] relative rounded-corner-medium bg-border-default-default hidden max-w-full" />
                  <div className="w-[52px] relative text-mini tracking-[0.1px] leading-[20px] font-medium font-poppins text-black text-left flex items-center shrink-0 z-[4]">
                    Hello
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[7px] mq450:flex-wrap">
                <input
                  className="w-full [border:none] [outline:none] bg-border-default-default h-[45px] flex-1 rounded-xl flex flex-row items-start justify-start pt-2 px-3 pb-[17px] box-border font-poppins font-medium text-mini text-gray-200 min-w-[181px] z-[3]"
                  placeholder="Type message here..."
                  type="text"
                />
                <div className="h-[45px] w-[42px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-radius-200 bg-dodgerblue border-border-brand-default border-[1px] border-solid box-border w-full h-full overflow-hidden flex flex-row items-center justify-center p-space-300 gap-space-200 z-[3]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/star.svg"
                    />
                    <div className="w-11 relative text-base leading-[100%] font-single-line-body-base text-text-brand-on-brand text-left hidden">
                      {" "}
                      Send
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/x.svg"
                    />
                  </div>
                  <img
                    className="absolute top-[7px] left-[8px] w-[27px] h-[31px] z-[4]"
                    alt=""
                    src="/add-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

DescriptionContainer.propTypes = {
  className: PropTypes.string,
};

export default DescriptionContainer;
