import Navigation1 from "../components/Navigation1";
import FrameComponent15 from "../components/FrameComponent15";
import StudentGrid from "../components/StudentGrid";
import Footer5 from "../components/Footer5";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

const Training = () => {
  return (
    <>
    <Navbar1/>
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-end justify-start gap-[119px] leading-[normal] tracking-[normal] gap-[59px] gap-[30px]">
      
      <section className="w-[1382px] flex flex-row items-start justify-center pt-0 px-5 pb-[193px] box-border relative max-w-full text-left text-31xl text-gray-300 font-lato mq450:pb-[125px] mq450:box-border">
        <div className="w-[648px] flex flex-col items-start justify-start gap-[54px] max-w-full gap-[27px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-[7px] box-border max-w-full">
            <h1 className="m-0 mt-4 flex-1 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
              Empowering Careers Now
            </h1>
          </div>
          <div className="self-stretch relative text-xl text-center mq450:text-base">
            Connecting students with employers through innovative tools and
            resources for successful career placements
          </div>
        </div>
      </section>
      <FrameComponent15 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[183px] pl-5 pr-[49px] box-border max-w-full lg:pr-6 lg:pb-[119px] lg:box-border mq1050:pb-[77px] mq1050:box-border mq450:pb-[50px] mq450:box-border">
        <StudentGrid />
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Training;