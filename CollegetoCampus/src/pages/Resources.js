import FrameComponent16 from "../components/FrameComponent16";
import FrameComponent17 from "../components/FrameComponent17";
import Footer5 from "../components/Footer5";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Resources = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start gap-[104px] leading-[normal] tracking-[normal] gap-[52px] gap-[26px]">
      <FrameComponent16 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-center text-31xl text-gray-300 font-lato">
        <div className="w-[958px] flex flex-col items-end justify-start gap-[74px] max-w-full gap-[18px] gap-[37px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
            Career Bridge
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5 box-border max-w-full text-xl">
            <div className="w-[791px] relative inline-block shrink-0 max-w-full mq450:text-base">
              Connecting students with employers through innovative digital
              solutions.
            </div>
          </div>
        </div>
      </section>
      <FrameComponent17 />
      <Footer/>
    </div>
    </>
  );
};

export default Resources;
