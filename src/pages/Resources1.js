import Navigation1 from "../components/Navigation1";
import ResourceDescription from "../components/ResourceDescription";
import Program from "../components/Program";
import Placement from "../components/Placement";
import Footer from "../components/Footer";

const Resources1 = () => {
  return (
    <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-end justify-start gap-[50.3px] leading-[normal] tracking-[normal] gap-[25px]">
      <Navigation1
        logo2="/logo-26@2x.png"
        homeJobListings="Home      Job Listing      Training      "
        training="Resources"
        resourcesInteraction="      Interaction"
        navigationPadding="30.8px 54px 16.8px 60px"
        pageLinksPadding="4.2px 0px 0px"
        buttonWrapperPadding="3.2px 0px 0px"
      />
      <main className="w-[1405px] flex flex-row items-start justify-end pt-0 px-[37px] pb-[91.7px] box-border max-w-full shrink-0 lg:pb-[39px] lg:box-border mq750:pb-[25px] mq750:box-border">
        <section className="flex-1 flex flex-col items-start justify-start gap-14 max-w-full text-center text-xl text-gray-300 font-lato gap-7">
          <div className="w-[1295px] flex flex-row items-start justify-center pt-0 px-5 pb-[27.7px] box-border max-w-full text-left text-46xl">
            <h1 className="m-0 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-33xl mq1050:leading-[51px] mq450:text-20xl mq450:leading-[38px]">
              Elevate Your Expertise
            </h1>
          </div>
          <div className="w-[1295px] flex flex-row items-start justify-center pt-0 px-5 pb-[7px] box-border max-w-full">
            <div className="w-[791px] relative inline-block shrink-0 max-w-full mq450:text-base">
              Be part of a learning community that drives success and
              innovation.
            </div>
          </div>
          <ResourceDescription />
          <div className="w-[1296px] flex flex-row items-start justify-center pt-0 px-5 pb-[18px] box-border max-w-full text-45xl">
            <h1 className="m-0 w-[958px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq1050:text-32xl mq1050:leading-[51px] mq450:text-19xl mq450:leading-[38px]">
              Career Bridge
            </h1>
          </div>
          <div className="w-[1301px] flex flex-row items-start justify-center pt-0 px-5 pb-[11px] box-border max-w-full">
            <div className="w-[791px] relative inline-block shrink-0 max-w-full mq450:text-base">
              Connecting students with employers through innovative digital
              solutions.
            </div>
          </div>
          <Program />
          <Placement />
        </section>
      </main>
      <Footer
        propMinWidth="unset"
        propPadding="18px 51px"
        propAlignSelf="stretch"
        propHeight="49px"
      />
    </div>
  );
};

export default Resources1;
