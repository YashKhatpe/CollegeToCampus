import MainContent2 from "../components/MainContent2";
import Footer2 from "../components/Footer2";

const Signup = () => {
  return (
    <div className="w-full h-[2645px] relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start pt-[184px] pb-[140px] pl-24 pr-1.5 box-border gap-[454px] leading-[normal] tracking-[normal] text-left text-mini text-gray-500 font-lato gap-[227px] lg:pl-12 lg:box-border gap-[57px] mq750:h-auto gap-[113px] mq750:pl-6 mq750:box-border">
      <header className="mt-[-768px] ml-[-256px] w-[1760px] h-[314px] relative overflow-hidden shrink-0 max-w-[132%]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[1185px] rounded-lg max-h-full w-[575px] object-cover"
          alt=""
          src="/trainingpage3@2x.png"
        />
      </header>
      <div className="w-[232px] relative hidden z-[1]">
        Enter your first name here...
      </div>
      <div className="!m-[0] absolute top-[2193px] left-[96px] flex flex-row items-start justify-start">
        <div className="!m-[0] absolute bottom-[-57px] left-[0px] flex flex-row items-start justify-start">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/frame.svg"
          />
          <img
            className="h-[313px] w-6 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/frame.svg"
          />
        </div>
        <img
          className="h-64 w-[35px] relative overflow-hidden shrink-0 z-[4]"
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
      </div>
      <MainContent2 />
      <Footer2 />
    </div>
  );
};

export default Signup;
