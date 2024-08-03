import Header3 from "../components/Header3";
import Button1 from "../components/Button1";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import Search from "../components/Search";

const HomePage = () => {
  return (
    <div className="w-full h-[4405px] relative bg-gray-300 overflow-hidden flex flex-col items-start justify-start pt-6 pb-[171px] pl-[60px] pr-7 box-border gap-[18px] leading-[normal] tracking-[normal] text-left text-31xl text-background-default-default font-lato mq750:pl-[30px] mq750:box-border mq1050:h-auto">
      <section className="mt-[-608px] self-stretch flex flex-row items-start justify-start pt-0 pb-[276px] pl-[965px] pr-0 box-border max-w-full lg:pl-[482px] lg:box-border mq750:pl-[241px] mq750:pb-[179px] mq750:box-border mq450:pl-5 mq450:box-border">
        <img
          className="w-[575px] relative rounded-lg max-h-full object-cover max-w-[149%] shrink-0"
          alt=""
          src="/trainingpage3@2x.png"
        />
      </section>
      <img
        className="w-full h-[729.5px] absolute !m-[0] top-[102px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/convocationhomepage-2@2x.png"
      />
      <Header3 />
      <div className="w-[954px] flex flex-row items-start justify-center pt-0 px-0 pb-[43px] box-border max-w-full shrink-0">
        <h1 className="m-0 w-[666px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full z-[1] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
          Empower Your Future
        </h1>
      </div>
      <div className="w-[859px] flex flex-row items-start justify-center pt-0 px-0 pb-1.5 box-border max-w-full shrink-0 text-base font-single-line-body-base">
        <b className="w-[571px] relative inline-block shrink-0 max-w-full z-[1]">
          Connecting students with Opportunities through Dynamic Training and
          Placement Solutions
        </b>
      </div>
      <div className="w-[530px] flex flex-row items-start justify-center pt-0 px-0 pb-[266px] box-border max-w-full">
        <Button1 labelText="Join" />
      </div>
      <FrameComponent11 />
      <div className="w-[420px] h-0 relative text-silver hidden max-w-full z-[7] text-10xl">
        <p className="m-0">
          <span>
            <b>AI Resume Scanner</b>
          </span>
        </p>
        <p className="m-0">
          <span className="font-medium">
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-lgi">
          <span className="font-medium">
            <span>
              Advanced scanning and detailed resume analysis for applicants
            </span>
          </span>
        </p>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pl-1 pr-0 box-border max-w-full shrink-0 text-xl text-silver font-single-line-body-base">
        <div className="w-[1068px] relative font-semibold inline-block shrink-0 max-w-full mq450:text-base">
          We bridge students seeking employment with recruiters, offering
          Comprehensive resources, training programs and interactive features to
          enhance placements and career success.
        </div>
      </div>
      <img
        className="w-3.5 h-[13px] relative hidden z-[9]"
        alt=""
        src="/icon2.svg"
      />
      <img
        className="w-3.5 h-[13px] relative hidden z-[10]"
        alt=""
        src="/icon2.svg"
      />
      <img
        className="w-[13px] h-[13px] relative hidden z-[11]"
        alt=""
        src="/icon3.svg"
      />
      <section className="w-[1280px] flex flex-row items-start justify-center pt-0 px-0 pb-[21px] box-border max-w-full">
        <img
          className="w-[1010px] relative rounded-lg max-h-full object-cover max-w-full"
          loading="lazy"
          alt=""
          src="/homepage2-2@2x.png"
        />
      </section>
      <section className="w-[1292px] flex flex-row items-start justify-center pt-0 px-0 pb-[30px] box-border max-w-full shrink-0 text-center text-31xl text-silver font-lato">
        <h1 className="m-0 w-[554px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center justify-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
          Job Connection
        </h1>
      </section>
      <section className="w-[1292px] flex flex-row items-start justify-center pt-0 px-0 pb-8 box-border max-w-full shrink-0 text-center text-xl text-silver font-lato">
        <b className="w-[792px] relative inline-block shrink-0 max-w-full mq450:text-base">
          <p className="m-0">
            A platform connecting students with recruiters for employment
          </p>
          <p className="m-0"> opportunities</p>
        </b>
      </section>
      <section className="w-[1292px] flex flex-row items-start justify-center pt-0 px-0 pb-[23px] box-border max-w-full shrink-0 text-left text-10xl text-silver font-lato">
        <div className="w-[978px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap mq1050:justify-center">
          <div className="w-[445px] flex flex-col items-start justify-start gap-[21px] min-w-[445px] max-w-full mq750:min-w-full mq1050:flex-1">
            <img
              className="self-stretch h-[253px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/homepage9-2@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-2.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[61px] max-w-full mq450:flex-wrap gap-[30px]">
                <div className="flex-1 relative inline-block min-w-[227px] max-w-full">
                  <p className="m-0">
                    <span>
                      <b>Placement Resources</b>
                    </span>
                  </p>
                  <p className="m-0">
                    <span className="font-medium">
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0 text-lgi">
                    <span className="font-medium">
                      <span>
                        Guides and tools for resumes, interviews and job
                        postings.
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                  <img
                    className="w-4 h-[15px] relative"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[444px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[444px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
              <img
                className="self-stretch h-[253px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/homepage7-2@2x.png"
              />
              <div className="w-[430px] flex flex-row items-start justify-start gap-[65px] max-w-full mq450:flex-wrap gap-8">
                <div className="flex-1 relative inline-block min-w-[227px] max-w-full">
                  <p className="m-0">
                    <span>
                      <b>Placement Resources</b>
                    </span>
                  </p>
                  <p className="m-0">
                    <span className="font-medium">
                      <span>&nbsp;</span>
                    </span>
                  </p>
                  <p className="m-0 text-lgi">
                    <span className="font-medium">
                      <span>
                        Guides and tools for resumes, interviews and job
                        postings.
                      </span>
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <img className="w-4 h-4 relative" alt="" src="/icon-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1290px] flex flex-row items-start justify-center pt-0 px-0 pb-[68px] box-border max-w-full shrink-0 text-left text-10xl text-silver font-lato mq750:pb-11 mq750:box-border">
        <div className="w-[980px] flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap mq1050:justify-center">
          <div className="w-[447px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[447px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full gap-[19px]">
              <img
                className="self-stretch h-[254px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/homepage8-2@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-3 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[60px] max-w-full mq450:flex-wrap gap-[30px]">
                  <div className="flex-1 relative inline-block min-w-[225px] max-w-full">
                    <p className="m-0">
                      <span>
                        <b>Interactive Features</b>
                      </span>
                    </p>
                    <p className="m-0">
                      <span className="font-medium">
                        <span>&nbsp;</span>
                      </span>
                    </p>
                    <p className="m-0 text-lgi">
                      <span className="font-medium">
                        <span>
                          Realtime sessions for practice and feedback for users.
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-[15px] h-4 relative"
                      alt=""
                      src="/icon-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[446px] flex flex-col items-end justify-start gap-[38px] min-w-[446px] max-w-full mq750:min-w-full mq1050:flex-1 gap-[19px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
              <img
                className="h-[254px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/homepage6-2@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-5">
              <div className="relative">
                <p className="m-0">
                  <span>
                    <b>Training Programs</b>
                  </span>
                </p>
                <p className="m-0">
                  <span className="font-medium">
                    <span>&nbsp;</span>
                  </span>
                </p>
                <p className="m-0 text-lgi">
                  <span className="font-medium">
                    <span>
                      Interactive courses with detailed content and schedules
                      availablr
                    </span>
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
                <img className="w-4 h-[15px] relative" alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1264px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-full shrink-0 text-left text-31xl text-silver font-lato">
        <h1 className="m-0 relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq1050:text-21xl mq1050:leading-[51px] mq450:text-11xl mq450:leading-[38px]">
          Empower Your Future
        </h1>
      </section>
      <section className="w-[1264px] flex flex-row items-start justify-center pt-0 px-0 pb-[66px] box-border max-w-full shrink-0 text-center text-xl text-silver font-single-line-body-base">
        <div className="w-[792px] relative font-semibold inline-block shrink-0 max-w-full mq450:text-base">
          Connecting students with employers through innovative resources and
          interactive features for successfull placements
        </div>
      </section>
      <FrameComponent12 />
      <footer className="self-stretch flex flex-row items-start justify-start py-0 pl-3.5 pr-0 box-border max-w-full shrink-0 text-left text-45xl text-silver font-lato">
        <div className="flex-1 flex flex-row items-end justify-center [row-gap:20px] max-w-full lg:flex-wrap">
          <div className="flex-1 flex flex-row items-start justify-start min-w-[617px] [row-gap:20px] max-w-full mq750:min-w-full mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[358px] max-w-full gap-[23px] mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20.5px] max-w-full">
                <h1 className="m-0 self-stretch h-[55.6px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq1050:text-32xl mq1050:leading-[51px] mq450:text-19xl mq450:leading-[38px]">
                  Connect
                </h1>
                <h3 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[2] mq450:text-4xl">
                  Bridging students with recruiters for opportunities
                </h3>
              </div>
              <div className="w-[451px] flex flex-col items-start justify-start gap-[33px] max-w-full text-xl gap-4">
                <div className="flex flex-row items-start justify-start gap-[26px]">
                  <img
                    className="h-[33px] w-[35px] relative overflow-hidden shrink-0 min-h-[33px]"
                    loading="lazy"
                    alt=""
                    src="/facebook1.svg"
                  />
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[7px]">
                    <img
                      className="w-9 h-[33px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/instagram.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1">
                    <img
                      className="w-8 h-[30px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/twitter1.svg"
                    />
                  </div>
                  <img
                    className="h-[30px] w-[37px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/github.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[9px] max-w-full">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/copyright-circle.svg"
                  />
                  <b className="flex-1 relative inline-block max-w-[calc(100%_-_33px)] mq450:text-base">
                    2024. All rights reserved.
                  </b>
                </div>
              </div>
            </div>
            <div className="w-[399px] flex flex-col items-start justify-start pt-[24.1px] px-0 pb-0 box-border min-w-[399px] max-w-full text-10xl mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch relative mq450:text-4xl">
                <p className="m-0 font-extrabold">RESOURCES</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">+1234567890</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">contactcc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-10xl lg:flex-1 mq750:min-w-full mq1050:ml-0">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20.7px] max-w-full">
              <div className="self-stretch h-[83.7px] relative inline-block shrink-0 z-[1] mq450:text-base">
                <p className="m-0">
                  <span>
                    <span className="font-extrabold">{`SUPPORT `}</span>
                  </span>
                </p>
                <p className="m-0">
                  <b>
                    <span>&nbsp;</span>
                  </b>
                </p>
                <p className="m-0 text-xl">
                  <b>
                    <span>Enter your email address</span>
                  </b>
                </p>
              </div>
              <div className="w-[333px] flex flex-col items-start justify-start gap-4 max-w-full">
                <Search
                  propAlignSelf="stretch"
                  propWidth="unset"
                  propMarginTop="unset"
                />
                <button className="cursor-pointer border-lightslategray border-[1px] border-solid py-3 px-[79px] bg-lightslategray rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-space-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/star.svg"
                  />
                  <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left">
                    Join our platform now
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/x.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
