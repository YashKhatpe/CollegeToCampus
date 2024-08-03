import FrameComponent22 from "../components/FrameComponent22";
import DescriptionContainer from "../components/DescriptionContainer";
import FrameComponent23 from "../components/FrameComponent23";

const VirtualMeet = () => {
  return (
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-end justify-start gap-0.5 leading-[normal] tracking-[normal]">
      <FrameComponent22
        logo2="/logo-21@2x.png"
        star="/star.svg"
        label="Login"
        x="/x.svg"
        hasIconEnd={false}
        hasIconStart={false}
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[29px] pl-0 pr-9 box-border max-w-full text-center text-31xl text-background-default-default font-poppins">
        <div className="h-[658px] flex-1 flex flex-row items-start justify-start relative max-w-[103%] shrink-0">
          <div className="self-stretch flex-1 relative max-w-full z-[5]" />
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden object-cover z-[6]"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <div className="w-[494px] flex flex-col items-start justify-start pt-28 px-0 pb-0 box-border max-w-full ml-[-530px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[0.1px] leading-[20px] font-medium font-inherit z-[7] mq1050:text-21xl mq1050:leading-[16px] mq450:text-11xl mq450:leading-[12px]">
            <p className="m-0">{`VIRTUAL `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">MEET</p>
          </h1>
        </div>
      </section>
      <img
        className="w-4 h-[19px] relative overflow-hidden shrink-0 hidden z-[2]"
        alt=""
        src="/send.svg"
      />
      <section className="w-[1371px] flex flex-row items-start justify-center pt-0 px-5 pb-[273px] box-border max-w-full lg:pb-[177px] lg:box-border mq750:pb-[115px] mq750:box-border">
        <DescriptionContainer />
      </section>
      <img
        className="w-full h-[658px] absolute !m-[0] top-[102px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/rectangle-58.svg"
      />
      <section className="w-full h-[658px] absolute !m-[0] top-[102px] right-[0px] left-[0px]">
        <div className="absolute top-[0px] left-[0px] w-full h-full z-[2]" />
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] w-full h-full z-[3]" />
          <div className="absolute top-[0px] left-[0px] w-full h-full z-[4]" />
        </div>
      </section>
      <FrameComponent23 />
    </div>
  );
};

export default VirtualMeet;
