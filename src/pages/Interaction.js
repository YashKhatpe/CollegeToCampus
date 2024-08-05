import Header1 from "../components/Header1";
import FrameComponent20 from "../components/FrameComponent20";
import FeaturesRow from "../components/FeaturesRow";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent19 from "../components/FrameComponent19";
import FrameComponent18 from "../components/FrameComponent18";
import Search from "../components/Search";
import Navbar1 from "../components/Navbar1";
import Button1 from "../components/Button1";

const Interaction = () => {
  return (
    <>
    
      <Navbar1 />
    <div className="w-full h-[4191px] relative bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-8 leading-[normal] tracking-[normal] text-left text-31xl text-silver font-poppins mq1300:h-auto">
  
      <img
        className="w-full h-[800px] blur-custom relative !m-[0] bottom-[100px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/interaction5-2@2x.png"
      />
      {/* <Header1 headerMinHeight="432px" logo2="/logo-21@2x.png" /> */}
      <div className="w-[888px] flex flex-row items-start justify-center pt-0 px-5 pb-4 box-border max-w-full shrink-0">
        <h1 className="m-0 w-[616px] relative bottom-[600px] text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
          Career Connection Hub
        </h1>
      </div>
      <div className="w-[951px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-xl">
        <b className="w-[679px] bottom-[550px] relative inline-block shrink-0 max-w-full z-[1] mq450:text-base">
          <p className="m-0">{`Empowering your transition from college to a successful career with `}</p>
          <p className="m-0">interactive tools and resources</p>
        </b>
      </div>
      <div className="bottom-[570px] relative w-[464px] flex flex-row items-start justify-center pt-0 px-5 pb-[145px] box-border max-w-full shrink-0">
        {/* <button className="cursor-pointer border-border-brand-default  border-[1px] border-solid py-4 px-[69px] bg-silver shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-radius-full overflow-hidden flex flex-row items-start justify-start z-[1]">
          <div className="relative text-5xl leading-[34px] font-extrabold font-poppins text-gray-300 text-left inline-block min-w-[52px] mq450:text-lgi mq450:leading-[27px]">{`Chat `}</div>
        </button> */}
        <Button1 className="border-silver text-silver hover:border-primary" labeltext= "Chat"/>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[74px] pl-[85px] pr-5 box-border max-w-full shrink-0 text-center text-31xl text-silver font-poppins mq800:pl-[21px] mq800:box-border mq1100:pl-[42px] mq1100:box-border">
        <h1 className="m-0 w-[877px] bottom-[500px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
          Welcome to the Interaction Hub
        </h1>
      </section>
      <FrameComponent20 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[104px] pl-[93px] pr-5 box-border max-w-full shrink-0 mq800:pl-[23px] mq800:pb-[68px] mq800:box-border mq1100:pl-[46px] mq1100:box-border">
        <div className="relative w-[977px] grid flex-row items-start font-poppins justify-start gap-[33px] max-w-full grid-cols-[repeat(3,_minmax(228px,_1fr))] gap-4 mq800:grid-cols-[minmax(228px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(2,_minmax(228px,_395px))]">
          <FeaturesRow
            interaction71="/interaction7-1@2x.png"
            realTimeChat="Real-Time chat"
            engageWithProfessionalsFo="Engage with professionals for personalized career guidance and immediate responses to your inquiries"
          />
          <FeaturesRow
            interaction71="/interaction7-3@2x.png"
            propBorderRadius="16px 16px 0px 0px"
            realTimeChat="Career Resources"
            engageWithProfessionalsFo="Access valuable resources and tools to support your career preparation and job search efforts."
          />
          <FeaturesRow
            interaction71="/interaction7-5@2x.png"
            propBorderRadius="16px 42px 0px 0px"
            realTimeChat="Expert Insights"
            engageWithProfessionalsFo="Connect with industry experts to gain insights and advice tailored to your career path."
          />
        </div>
      </section>
      <section className="w-[1336px] flex flex-row items-start justify-center pt-0 px-5 pb-1.5 box-border max-w-full shrink-0 text-center text-31xl text-silver font-poppins">
        <div className="w-[722px] flex flex-row items-end justify-between gap-5 max-w-full">
          <div className="h-[17px] w-[18px] relative">
            <img
              className="relative top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/star-filled1.svg"
            />
            <img
              className="relative top-[0px] left-[0px] w-full h-full z-[1]"
              alt=""
              src="/star-filled1.svg"
            />
          </div>
          <div className="relative w-[616px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border max-w-[calc(100%_-_38px)]">
            <div className="self-stretch h-[91px] relative">
              <h1 className="left-[150px] m-0 relative top-[0px] left-[0px] text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center justify-center w-[616px] h-16 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq800:text-21xl mq800:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
                User Feedback
              </h1>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent21 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[255px] pl-[93px] pr-5 box-border max-w-full shrink-0 mq800:pl-[23px] mq800:box-border mq1100:pl-[46px] mq1100:box-border mq450:pb-[166px] mq450:box-border">
        <div className="w-[947px] flex flex-row flex-wrap items-start justify-center gap-[49px] max-w-full gap-6">
          <FrameComponent19 />
          <FrameComponent18 />
        </div>
      </section>
      <footer className="self-stretch bg-gray-300 flex flex-row items-end justify-center pt-[108px] pb-[154px] pl-[83px] pr-[18px] box-border [row-gap:20px] max-w-full shrink-0 text-left text-45xl text-silver font-poppins mq800:pl-[41px] mq800:pt-[70px] mq800:pb-[100px] mq800:box-border mq1300:flex-wrap">
        <div className="h-[575px] w-[1440px] relative bg-gray-300 hidden max-w-full z-[1]" />
        <div className="flex-1 flex flex-row items-start justify-center min-w-[617px] [row-gap:20px] max-w-full mq800:min-w-full mq1100:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[358px] max-w-full gap-[23px] mq800:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <h1 className="m-0 self-stretch h-[107px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[2] mq800:text-32xl mq800:leading-[51px] mq450:text-19xl mq450:leading-[38px]">
                Connect
              </h1>
              <h3 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[3] mq450:text-4xl">
                Bridging students with recruiters for opportunities
              </h3>
            </div>
            <div className="w-[471px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[33px] max-w-full text-xl gap-4">
              <div className="flex flex-row items-start justify-start gap-[26px]">
                <img
                  className="h-[33px] w-[35px] relative overflow-hidden shrink-0 min-h-[33px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/facebook1.svg"
                />
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[7px]">
                  <img
                    className="w-9 h-[33px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/instagram.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                  <img
                    className="w-8 h-[30px] relative overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/twitter.svg"
                  />
                </div>
                <img
                  className="h-[30px] w-[37px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/github.svg"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/copyright-circle.svg"
                />
                <b className="flex-1 relative inline-block max-w-[calc(100%_-_33px)] z-[1] mq450:text-base">
                  2024. All rights reserved.
                </b>
              </div>
            </div>
          </div>
          <div className="w-[399px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border min-w-[399px] max-w-full text-10xl mq800:min-w-full mq1100:flex-1">
            <div className="self-stretch relative z-[1] mq450:text-4xl">
              <p className="m-0 font-extrabold">RESOURCES</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">+1234567890</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">contactcc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-10xl mq800:min-w-full mq1100:ml-0 mq1300:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch h-[149px] relative inline-block shrink-0 z-[2] mq450:text-base">
                <p className="m-0">
                  <span>
                    <span className="font-extrabold">{`SUPPORT `}</span>
                  </span>
                </p>
                <p className="m-0">
                  <b>
                    <span>&nbsp;</span>
                  </b>
                </p>
                <p className="m-0 text-xl">
                  <b>
                    <span>Enter your email address</span>
                  </b>
                </p>
              </div>
              <Search
                propAlignSelf="unset"
                propWidth="334px"
                propMarginTop="-37px"
              />
            </div>
            <button className="cursor-pointer border-lightslategray border-[1px] border-solid py-[18px] px-[70px] bg-lightslategray w-[333px] h-[49px] rounded-radius-200 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start gap-space-200 max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/star.svg"
              />
              <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left">
                Join our platform now
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/x.svg"
              />
            </button>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Interaction;