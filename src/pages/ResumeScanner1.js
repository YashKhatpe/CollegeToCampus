import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import Footer4 from "../components/Footer4";

const ResumeScanner1 = () => {
  return (
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start gap-[182px] leading-[normal] tracking-[normal] gap-[91px] gap-[45px]">
      <FrameComponent10 />
      <img
        className="w-[1014px] h-[92px] absolute !m-[0] top-[1035px] right-[209px] rounded-lg"
        alt=""
        src="/rectangle-57.svg"
      />
      <section className="w-[1427px] flex flex-row items-start justify-center pt-0 px-5 pb-6 box-border max-w-full">
        <FrameComponent9 />
      </section>
      <Footer4 />
    </div>
  );
};

export default ResumeScanner1;
