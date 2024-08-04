import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent14 from "../components/FrameComponent14";
import Search from "../components/Search";
import Navbar1 from "../components/Navbar1";
import axios from 'axios';
import { useEffect, useState } from "react";


 
// import Navbar from "../components/Navbar";


const JobListings = () => {

  const [data, setData] = useState([]);



  useEffect(() => {
    const refreshList = () => {
      console.log('data init');
    axios
      .get("http://localhost:8000/job_listing")
      .then(res =>{ setData( res.data );
                    console.log(res.data)})
      .catch(err => console.log(err));
    };

    refreshList();
  }, []);

  

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full h-[1694px] relative bg-gray-300 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[122px] box-border gap-[86px] leading-[normal] tracking-[normal] text-center text-6xl text-silver font-lato mq1275:h-auto">
        {/* <FrameComponent3
        frameHeaderTop="unset"
        frameHeaderPosition="unset"
        frameHeaderMinHeight="132px"
        logo2="/logo-21@2x.png"
      /> */}
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full shrink-0">
          <div className="w-[857px] flex flex-row items-start justify-start pt-3 px-0 pb-[11px] box-border relative max-w-full">
            <div className="h-full w-[728px] absolute !m-[0] top-[0px] right-[44px] bottom-[0px] rounded-6xl bg-gray-300" />
            <h1 className="m-0 w-[857px] relative text-inherit font-extrabold font-inherit whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1] mq450:text-xl">{`Ab naukri ki tension ko bolo bye!!  Find your new job here `}</h1>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 ml-[-87px]">
              <img
                className="w-[28.7px] h-[27.8px] relative rounded-6xl overflow-hidden shrink-0 z-[2]"
                loading="lazy"
                alt=""
                src="/arrow-downcircle.svg"
              />
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[430.9px] pl-5 pr-[33px] box-border max-w-full mq450:pb-[182px] mq450:box-border mq1100:pb-[280px] mq1100:box-border">
          <div className="w-[967px] flex flex-row items-start max-w-full mq1100:flex-wrap ">
            <FrameComponent13 />
            <FrameComponent14 />

            <ul>
              {data.map((job, index) => (
                <li key={index}>{job.title}</li>
              ))}
            </ul>

          </div>
        </section>
        <section className="w-[1402px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full shrink-0 text-left text-45xl text-silver font-lato">
          <div className="flex-1 flex flex-row items-end justify-center [row-gap:20px] max-w-full mq1275:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start min-w-[617px] [row-gap:20px] max-w-full mq750:min-w-full mq1100:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-w-[358px] max-w-full mq450:min-w-full gap-[23px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20.5px] max-w-full">
                  <h1 className="m-0 self-stretch h-[55.6px] relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit flex items-center shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1] mq450:text-19xl mq450:leading-[38px] mq750:text-32xl mq750:leading-[51px]">
                    Connect
                  </h1>
                  <h1 className="m-0 w-[399px] relative text-10xl font-normal font-inherit inline-block max-w-full z-[2] mq450:text-4xl">
                    Bridging students with recruiters for opportunities
                  </h1>
                </div>
                <div className="w-[451px] flex flex-col items-start justify-start gap-[33px] max-w-full text-xl gap-4">
                  <div className="flex flex-row items-start justify-start gap-[26px]">
                    <img
                      className="h-[33px] w-[35px] relative overflow-hidden shrink-0 min-h-[33px]"
                      loading="lazy"
                      alt=""
                      src="/facebook.svg"
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
                        src="/twitter.svg"
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
                    <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_33px)] mq450:text-base">
                      2024. All rights reserved.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[399px] flex flex-col items-start justify-start pt-[24.1px] px-0 pb-0 box-border min-w-[399px] max-w-full text-10xl mq750:min-w-full mq1100:flex-1">
                <div className="self-stretch relative mq450:text-4xl">
                  <p className="m-0 font-extrabold">RESOURCES</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">+1234567890</p>
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0">contactcc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="w-[399px] flex flex-col items-start justify-end pt-0 px-0 pb-6 box-border min-w-[399px] max-w-full ml-[-11px] text-10xl mq750:min-w-full mq1100:ml-0 mq1275:flex-1">
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
        </section>
      </div>
    </>
  );
};

export default JobListings;
