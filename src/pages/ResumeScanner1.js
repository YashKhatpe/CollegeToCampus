import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import Footer4 from "../components/Footer4";
import Navbar1 from "../components/Navbar1";

const ResumeScanner1 = () => {
  return (
    <>
    <Navbar1/>
    <div className="w-full h-full max-h-fit relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start gap-[182px] leading-[normal] tracking-[normal] ">
      <FrameComponent10 />
      <div className="w-full max-h-full">

      {/* <iframe
        src="http://localhost:8501"  // URL of your Streamlit app
        width="100%"
        height="800px"
        style={{ border: 'none' }}
        title="Streamlit App"
        /> */}
        </div>
      <section className="w-[100%] flex flex-row items-start justify-center pt-0 px-48  pb-6 box-border max-w-full">
        <FrameComponent9 />
      </section>
      <Footer4 />
    </div>
    </>
  );
};

export default ResumeScanner1;
