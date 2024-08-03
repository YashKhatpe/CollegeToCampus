import Button1 from "../components/Button1";
const HomePage = () => {
  return (
    <div className="overflow-x-hidden w-full min-h-screen relative bg-gray-300 flex flex-col items-center justify-start  px-[90px] box-border gap-[18px] leading-normal tracking-normal text-center text-31xl text-background-default-default font-poppins">
      <img
        className="w-[100%] h-[700px] filter blur-custom absolute top-0 left-0 right-0 object-cover"
        alt=""
        src="/convo1.jpeg"
      />  

      <div className="mt-[190px] relative overflow-hidden w-full max-w-[1000px] text-left">
        <h1 className="w-full text-21xl tracking-[-0.25px] leading-[64px] font-extrabold text-shadow max-w-full">
          Empower Your Future
        </h1>
      </div>

      <div className=" relative w-full max-w-[1000px] text-3xl text-left">
        <b>
          Connecting students with Opportunities through Dynamic Training and Placement Solutions
        </b>
      </div>
      
       <div className="w-full max-w-[1000px] flex flex-col items-start mt-4">
       <Button1 labelText="Join" />
     </div>

      <section className="w-full max-w-fit flex flex-col items-center justify-center text-silver
       px-[180px] mt-[250px] text-21xl">
        <div className="w-full max-w-[1029px] flex flex-wrap items-center justify-center gap-40">
          <h1 className="flex-1 text-inherit tracking-[-0.25px]  font-bold text-shadow max-w-full text-center">
            <p>Connecting Students with Opportunities</p>
          </h1>
          <div className="w-full max-w-[380px] text-center">
            <b >
              <p className="whitespace-pre-wrap "><p>15 Success Stories 150+ Join Us </p>
              </p>
            </b>
          </div>
        </div>
      </section>

      <div className="w-full text-xl text-silver text-center mb-[50px]">
        <div className="max-w-[1068px] font-semibold mx-auto">
          We bridge students seeking employment with recruiters, offering comprehensive resources, training programs, and interactive features to enhance placements and career success.
        </div>
      </div>

      <section className="w-full max-w-[1280px] flex flex-col items-center justify-center pb-[21px] mt-[50px]">
        <img className="w-full max-w-[1010px] rounded-lg object-cover" loading="lazy" alt="" src="/homepage2-2@2x.png" />
      </section>
      
      <section className="w-full max-w-[1292px] flex flex-col items-center justify-center text-center text-21xl text-silver px-4 ">
        <h1 className="w-full max-w-[554px] text-inherit tracking-[-0.25px] leading-[64px] font-extrabold text-shadow max-w-full">
          Job Connection
        </h1>
      </section>
      
      <section className="w-full max-w-[1292px] flex flex-col items-center justify-center pb-8 text-center text-xl text-silver">
        <b className="w-full max-w-[792px]">
          <p>A platform connecting students with recruiters for employment opportunities</p>
        </b>
      </section>

      <section className="w-full max-w-[1292px] flex flex-col items-center justify-center pb-[23px] text-left text-10xl text-silver">
        <div className="w-full max-w-[978px] flex flex-wrap items-center justify-center gap-5">
          <div className="flex-1 min-w-[445px] max-w-full flex flex-col items-center justify-start gap-[21px]">
            <img className="w-full h-[253px] rounded-lg object-cover" loading="lazy" alt="" src="/homepage9-2@2x.png" />
            <div className="w-full flex flex-col items-center justify-start text-center">
              <b>Placement Resources</b>
              <p className="text-center text-xl">Guides and tools for resumes, interviews and job postings.</p>
            </div>
          </div>
          <div className="flex-1 min-w-[444px] max-w-full flex flex-col items-center justify-start gap-[22px]">
            <img className="w-full h-[253px] rounded-lg object-cover" loading="lazy" alt="" src="/homepage7-2@2x.png" />
            <div className="w-full flex flex-col items-center justify-start text-center">
              <b>Interactive Features</b>
              <p className="text-center text-xl">Realtime sessions for practice and feedback for users.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1290px] flex flex-col items-center justify-center pb-[68px] text-left text-10xl text-silver">
        <div className="w-full max-w-[980px] flex flex-wrap items-center justify-center gap-5">
          <div className="flex-1 min-w-[447px] max-w-full flex flex-col items-center justify-start gap-[39px]">
            <img className="w-full h-[254px] rounded-lg object-cover" loading="lazy" alt="" src="/homepage8-2@2x.png" />
            <div className="w-full flex flex-col items-center justify-start text-center">
              <b>Training Programs</b>
              <p className="text-center text-xl">Interactive courses with detailed content and schedules available.</p>
            </div>
          </div>
          <div className="flex-1 min-w-[446px] max-w-full flex flex-col items-center justify-start gap-[38px]">
            <img className="w-full h-[254px] rounded-lg object-cover" loading="lazy" alt="" src="/homepage6-2@2x.png" />
            <div className="w-full flex flex-col items-center justify-start text-center">
              <b>Training Programs</b>
              <p className="text-center text-xl">Interactive courses with detailed content and schedules available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <FrameComponent12 /> */}

      <section
      className={`w-[1322px] flex flex-row items-start justify-center pt-0 px-0 pb-[50px] box-border max-w-full shrink-0 text-center text-mini text-text-default-default font-poppins mq750:pb-[278px] mq750:box-border mq1050:pb-[428px] mq1050:box-border`}
    >
      <div className="w-[892px] flex flex-row items-start justify-center [row-gap:20px] max-w-full mq1050:flex-wrap">
        <img
          className="w-[443px] relative rounded-lg max-h-full object-cover min-h-[398px] max-w-full z-[3] mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[300px] max-w-full ml-[-12px] mq750:ml-0">
          
          <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue flex flex-col items-end justify-start pt-[97px] px-[21px] pb-[68px] box-border gap-6 max-w-full z-[2] mq450:pt-8 mq450:pb-11 mq450:box-border">
            <div className="w-[461px] h-[375px] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-steelblue hidden max-w-full" />
            <div className="w-[408px] flex flex-row items-start justify-center max-w-full">
              <div className="flex flex-row items-end justify-start gap-[2.5px]">
                <div className="w-8 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="w-8 h-[13px] relative">
                    <img
                      className="absolute top-[0px] left-[18px] w-3.5 h-[13px] z-[3]"
                      alt=""
                      src="/icon2.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[13px] h-[13px] z-[3]"
                      alt=""
                      src="/icon3.svg"
                    />
                  </div>
                </div>
                <img
                  className="h-4 w-[17px] relative min-h-[16px] z-[3]"
                  alt=""
                  src="/star-filled-3.svg"
                />
                <div className="w-8 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border">
                  <div className="w-8 h-[13px] relative">
                    <img
                      className="absolute top-[0px] left-[17px] w-[15px] h-[13px] z-[3]"
                      alt=""
                      src="/icon-81.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] w-[13px] h-[13px] z-[3]"
                      alt=""
                      src="/icon3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[409px] flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
              <div className="flex-1 relative font-medium inline-block max-w-full z-[3]">
                <p className="m-0">{`This portal transformed my job search experience `}</p>
                <p className="m-0">
                  with it’s resources and user-friendly interface.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Highly Recommended!</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[50px] text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="w-[309px] flex flex-col items-end justify-start gap-[18px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[25px] pr-5">
                  <img
                    className="h-[33px] w-9 relative rounded-6xl object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/homepage11-21@2x.png"
                  />
                </div>
                <b className="self-stretch relative z-[3]">Alex Smith</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
    </div>
  );
};

export default HomePage;
