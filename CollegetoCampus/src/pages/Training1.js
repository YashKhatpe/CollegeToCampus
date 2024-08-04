import Header from "../components/Header";
import FrameComponent4 from "../components/FrameComponent4";
import SuccessContent from "../components/SuccessContent";
import Footer from "../components/Footer";

const Training1 = () => {
  return (
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start gap-[83px] leading-[normal] tracking-[normal] gap-[21px] gap-[41px]">
      <Header />
      <FrameComponent4 />
      <section className="w-[1291px] flex flex-row items-start justify-center pt-0 px-5 pb-[22px] box-border max-w-full">
        <SuccessContent />
      </section>
      <Footer />
    </div>
  );
};

export default Training1;
