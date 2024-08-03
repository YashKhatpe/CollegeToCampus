import Header1 from "../components/Header1";
import Button from "../components/Button";
import MainContent from "../components/MainContent";
import Features from "../components/Features";
import FrameComponent1 from "../components/FrameComponent1";
import Footer2 from "../components/Footer2";

const Interaction1 = () => {
  return (
    <div className="w-full h-[4191px] relative bg-gray-300 overflow-hidden flex flex-col items-start justify-start gap-7 leading-[normal] tracking-[normal] text-left text-39xl text-silver font-lato mq1325:h-auto">
      <section className="mt-[-584px] self-stretch flex flex-row items-start justify-start pt-0 pb-[242px] pl-[1025px] pr-0 box-border max-w-full shrink-0 mq800:pl-64 mq800:pb-[157px] mq800:box-border mq450:pl-5 mq450:box-border mq1325:pl-[512px] mq1325:box-border">
        <img
          className="w-[575px] relative rounded-lg max-h-full object-cover max-w-[139%] shrink-0"
          alt=""
          src="/trainingpage3@2x.png"
        />
      </section>
      <img
        className="w-full h-[727px] absolute !m-[0] top-[102px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/interaction5-2@2x.png"
      />
      <Header1 logo2="/logo-24@2x.png" />
      <div className="w-[888px] flex flex-row items-start justify-center pt-0 px-5 pb-[68px] box-border max-w-full shrink-0">
        <h1 className="m-0 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq800:text-27xl mq800:leading-[51px] mq450:text-16xl mq450:leading-[38px]">
          Career Connection Hub
        </h1>
      </div>
      <div className="w-[951px] flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full shrink-0 text-xl">
        <b className="w-[679px] relative inline-block shrink-0 max-w-full z-[1] mq450:text-base">
          <p className="m-0">{`Empowering your transition from college to a successful career with `}</p>
          <p className="m-0">interactive tools and resources</p>
        </b>
      </div>
      <div className="w-[464px] flex flex-row items-start justify-center pt-0 px-5 pb-[99px] box-border max-w-full shrink-0">
        <Button
          hasIconEnd={false}
          hasIconStart={false}
          label="Chat "
          propBackgroundColor="#b8c0cc"
          propBorder="1px solid #2c2c2c"
          propOverflow="hidden"
          propAlignSelf="unset"
          propHeight="unset"
          propBorderRadius="9999px"
          propPadding="16px 69px"
          propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          propWidth="unset"
          star="/star4.svg"
          propFontWeight="800"
          propDisplay="inline-block"
          propMinWidth="52px"
          propMargin="unset"
          propFontSize="24px"
          propFontFamily="Lato"
          propColor="#0d1b2a"
          x="/x6.svg"
        />
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[81px] pl-[23px] pr-5 box-border max-w-full shrink-0 text-center text-39xl text-silver font-lato">
        <h1 className="m-0 w-[877px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq800:text-27xl mq800:leading-[51px] mq450:text-16xl mq450:leading-[38px]">
          Welcome to the Interaction Hub
        </h1>
      </section>
      <MainContent />
      <Features />
      <section className="w-[1137px] h-[174px] flex flex-row items-start justify-center pt-0 px-5 pb-[27px] box-border max-w-full shrink-0 text-center text-39xl text-silver font-lato">
        <div className="self-stretch w-[921px] flex flex-row items-end justify-between gap-5 max-w-full">
          <div className="h-6 w-6 relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full"
              alt=""
              src="/star-filled2.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
              alt=""
              src="/star-filled2.svg"
            />
          </div>
          <div className="self-stretch w-[616px] flex flex-col items-start justify-start max-w-[calc(100%_-_44px)]">
            <div className="self-stretch h-[91px] relative">
              <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center justify-center w-[616px] h-16 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq800:text-27xl mq800:leading-[51px] mq450:text-16xl mq450:leading-[38px]">
                User Feedback
              </h1>
              <img
                className="absolute top-[67px] left-[518px] w-6 h-6"
                alt=""
                src="/play-arrow1.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[47px] pl-[75px] pr-[71px] box-border max-w-full shrink-0 mq800:pl-[37px] mq800:pr-[35px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-center gap-[68px] max-w-full gap-[34px] gap-[17px] mq1325:flex-wrap">
          <FrameComponent1 />
          <FrameComponent1 />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pl-[75px] pr-[71px] box-border max-w-full shrink-0 mq800:pl-[37px] mq800:pr-[35px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[68px] max-w-full gap-[34px] gap-[17px] mq1325:flex-wrap">
          <FrameComponent1 />
          <FrameComponent1 />
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default Interaction1;
