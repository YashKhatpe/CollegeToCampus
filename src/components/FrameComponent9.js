import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1027px] flex flex-col items-start justify-start gap-[70px] max-w-full text-center text-5xl text-black font-lato gap-[17px] gap-[35px] ${className}`}
    >
      <div className="w-[1001.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[34px] box-border gap-[31px] max-w-full gap-[15px]">
        <div className="w-[625px] relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center max-w-full mq1100:text-lgi mq1100:leading-[16px]">{`Upload Your Resume, And Get Smart Recommendations `}</div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border max-w-full text-xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-10 max-w-full gap-5">
            <div className="w-[194px] relative tracking-[0.1px] leading-[20px] font-light flex items-center justify-center mq1100:text-base mq1100:leading-[16px]">
              Choose your Resume
            </div>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[944.2px] flex flex-row items-end justify-between gap-5 max-w-full mq450:flex-wrap mq450:justify-center">
                <div className="w-[267px] flex flex-row items-end justify-start gap-2">
                  <img
                    className="h-[43px] w-[45px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/upload-cloud.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-2.5">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0">
                        <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium z-[1] mq1100:text-base mq1100:leading-[16px]">
                          Drag and drop file here
                        </div>
                      </div>
                      <div className="w-[98px] relative text-base tracking-[0.1px] leading-[20px] font-light flex items-center justify-center z-[1]">
                        file type .pdf
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="h-[44.4px] w-[169px] rounded-81xl overflow-hidden shrink-0 object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/button@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[115px] pl-[13px] pr-0 box-border max-w-full text-left text-29xl mq750:pb-[75px] mq750:box-border mq1100:pb-[49px] mq1100:box-border">
        <div className="flex-1 bg-silver flex flex-col items-start justify-start pt-[42px] pb-[46px] pl-[83px] pr-[72px] box-border gap-[81px] max-w-full gap-5 mq450:pt-[27px] mq450:pb-[30px] mq450:box-border gap-10 mq750:pl-[41px] mq750:pr-9 mq750:box-border">
          <div className="w-[1014px] h-[697px] relative bg-silver hidden max-w-full" />
          <h1 className="m-0 w-[497px] relative text-inherit tracking-[0.1px] leading-[20px] font-medium font-inherit inline-block max-w-full z-[1] mq450:text-19xl mq450:leading-[16px] mq1100:text-10xl mq1100:leading-[12px]">{`Your resume analysis `}</h1>
          <div className="self-stretch flex flex-col items-end justify-start gap-[9.6px] max-w-full text-13xl font-roboto">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[34px] box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-row items-start justify-start gap-[5.2px] max-w-full mq750:flex-wrap">
                <div className="h-[447.4px] w-[241.7px] flex flex-col items-start justify-start min-w-[241.7px] mq750:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[52.3px] shrink-0">
                    <div className="w-[208.7px] h-[198.8px] relative shrink-0">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] border-lightslategray border-[0px] border-solid box-border w-full h-full z-[1]" />
                      <div className="absolute top-[0px] left-[0px] w-full h-full">
                        <div className="absolute top-[198.8px] left-[208.7px] rounded-[50%] border-gray-300 border-[0px] border-solid box-border w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0] z-[2]" />
                        <div className="absolute top-[88.9px] left-[77px] tracking-[0.1px] leading-[20px] font-medium inline-block w-[67px] h-5 min-w-[67px] z-[3] mq450:text-7xl mq450:leading-[16px] mq1100:text-lgi mq1100:leading-[12px]">
                          75%
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[196.3px] relative text-mini tracking-[0.1px] leading-[27px] font-medium inline-block shrink-0 z-[2]">
                      <p className="m-0 whitespace-pre-wrap">{`First name  `}</p>
                      <p className="m-0">Last name</p>
                      <p className="m-0">Email</p>
                      <p className="m-0">Phone number</p>
                    </div>
                  </div>
                  <div className="w-40 flex flex-row items-start justify-start py-0 px-[21px] box-border mt-[-49.4px] text-xl font-lato">
                    <div className="flex-1 relative tracking-[0.1px] leading-[30px] font-medium shrink-0 z-[1] mq1100:text-base mq1100:leading-[24px]">
                      <p className="m-0">{`Skill sets: `}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[14.9px] px-0 pb-0 box-border min-w-[376px] max-w-full text-mini font-lato mq450:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[136.2px] max-w-full gap-[68px] gap-[34px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[15px] pr-0 box-border max-w-full shrink-0">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px] font-medium inline-block shrink-0 max-w-full z-[1]">
                        <p className="m-0 text-6xl">Good resume</p>
                        <p className="m-0 text-sm">&nbsp;</p>
                        <p className="m-0">
                          Here are the thing which you can improve in your
                          resume :
                        </p>
                        <ul className="m-0 font-inherit pl-5">
                          <li className="mb-0">
                            <span>Add project link to your resume.</span>
                          </li>
                          <li className="mb-0">
                            <span>
                              In experience add what you have achieved rather
                              than time period.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-[292.7px] h-[159.9px] relative tracking-[0.1px] leading-[27px] font-medium font-roboto inline-block shrink-0 z-[1]">
                      <p className="m-0">: Raj</p>
                      <p className="m-0">: amol</p>
                      <p className="m-0">: raj123@gmail.com</p>
                      <p className="m-0">: +91 9999999999</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[799px] flex flex-row flex-wrap items-start justify-center gap-[17px] max-w-full">
              <button className="cursor-pointer [border:none] p-0 bg-gray-300 flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start min-w-[79px] z-[1]">
                <div className="flex flex-row items-start justify-start py-[15.5px] px-[38px]">
                  <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-roboto text-background-default-default text-center inline-block min-w-[45px]">
                    Python
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gray-300 rounded-81xl overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="flex flex-row items-start justify-start py-[15.5px] px-[35px]">
                  <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-roboto text-background-default-default text-center inline-block min-w-[31px]">
                    Java
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gray-300 flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start min-w-[79px] z-[1]">
                <div className="flex flex-row items-start justify-start py-[15.5px] px-[38px]">
                  <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-roboto text-background-default-default text-center inline-block min-w-[45px]">
                    Django
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gray-300 flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start min-w-[83px] z-[1]">
                <div className="flex flex-row items-start justify-start py-[15.5px] px-[39px]">
                  <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-roboto text-background-default-default text-center inline-block min-w-[49px]">
                    Applets
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gray-300 rounded-81xl overflow-hidden flex flex-row items-start justify-start z-[1]">
                <div className="flex flex-row items-start justify-start py-[15.5px] px-9">
                  <div className="relative text-sm tracking-[0.1px] leading-[20px] font-medium font-roboto text-background-default-default text-center inline-block min-w-[34px]">
                    Flask
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-gray-300 flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start min-w-[86px] z-[1]">
                <div className="flex flex-row items-start justify-start py-[15.5px] px-[39px]">
                  <a className="[text-decoration:none] relative text-sm tracking-[0.1px] leading-[20px] font-medium font-roboto text-background-default-default text-center inline-block min-w-[53px]">
                    web dev
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-7 box-border max-w-full text-31xl text-gray-300">
        <div className="w-[958px] flex flex-col items-start justify-start gap-[68px] max-w-full gap-[17px] gap-[34px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-21xl mq450:leading-[51px] mq1100:text-11xl mq1100:leading-[38px]">{`Contact us for Opportunities `}</h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xl">
            <div className="w-[620px] relative inline-block shrink-0 max-w-full mq1100:text-base">
              Reach out for support in your job search and training needs.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[615px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[415px] w-[505px] absolute !m-[0] top-[41px] right-[-453px] rounded-lg object-cover"
            loading="lazy"
            alt=""
            src="/trainingpage7-2@2x.png"
          />
          <form className="m-0 flex-1 rounded-mini bg-silver flex flex-col items-start justify-start pt-[52px] pb-9 pl-[33px] pr-[25px] box-border gap-8 max-w-full z-[1] gap-4 mq450:pt-[34px] mq450:pb-[23px] mq450:box-border">
            <div className="w-[607px] h-[498px] relative rounded-mini bg-silver hidden max-w-full" />
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[3px]">
              <div className="relative text-xl font-lato text-gray-300 text-left z-[2] mq1100:text-base">
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
                <div className="h-9 w-[143px] absolute !m-[0] top-[-25px] left-[1px] text-xl font-lato text-gray-300 text-left inline-block z-[2] mq1100:text-base">
                  Your Email Address
                </div>
                <input
                  className="w-full [border:none] [outline:none] bg-gray-300 h-16 flex-1 rounded-mini flex flex-row items-start justify-start pt-[19px] px-[19px] pb-[27px] box-border font-lato text-mini text-background-default-default min-w-[250px] max-w-full z-[3]"
                  placeholder="Enter you email address"
                  type="text"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="w-[143px] relative text-xl font-lato text-gray-300 text-left inline-block z-[2] mq1100:text-base">
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
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
