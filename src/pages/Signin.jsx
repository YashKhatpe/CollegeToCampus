import Button from "../components/Button";
import Footer1 from "../components/Footer1";

const Signin = () => {
  return (
    <div className="w-full h-[2238px] relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start pt-[220px] pb-[65px] pl-24 pr-1.5 box-border leading-[normal] tracking-[normal] text-center text-xl text-background-default-default font-poppins mq450:pl-5 mq450:box-border mq750:h-auto mq750:pl-12 mq750:box-border">
      <section className="mt-[-804px] self-stretch flex flex-row items-start justify-start pt-0 pb-[490px] pl-[929px] pr-0 box-border max-w-full lg:pl-[464px] lg:box-border mq450:pl-5 mq450:pb-[207px] mq450:box-border mq750:pl-[232px] mq750:box-border mq1050:pb-[318px] mq1050:box-border">
        <img
          className="w-[575px] relative rounded-lg max-h-full object-cover max-w-[141%] shrink-0"
          alt=""
          src="/trainingpage3@2x.png"
        />
      </section>
      <section className="w-[1248px] flex flex-row items-start justify-center pt-0 px-5 pb-[182px] box-border max-w-full shrink-0 text-center text-31xl text-background-default-default font-poppins">
        <h1 className="m-0 w-[932px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-11xl mq1050:text-21xl">
          CollegeToCampus
        </h1>
      </section>
      <div className="w-[1235px] flex flex-row items-start justify-center pt-0 px-5 pb-[43px] box-border max-w-full shrink-0 text-11xl">
        <b className="w-[463px] relative inline-block shrink-0 max-w-full mq450:text-lg mq1050:text-5xl">{`Sign In with `}</b>
      </div>
      <section className="w-[1248px] flex flex-row items-start justify-center pt-0 px-5 pb-[58px] box-border max-w-full shrink-0">
        <button className="cursor-pointer [border:none] pt-[15px] pb-4 pl-[92px] pr-[63px] bg-border-default-default w-[632px] rounded-lg flex flex-row flex-wrap items-start justify-center box-border max-w-full [row-gap:20px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[78px] w-[632px] relative rounded-lg bg-border-default-default hidden max-w-full z-[1]" />
          <img
            className="h-[47px] w-[45px] relative object-cover min-h-[47px] z-[2]"
            alt=""
            src="/googlelogo9808-1@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[301px] max-w-full ml-[-31px] mq450:ml-0">
            <b className="self-stretch relative text-11xl font-poppins text-black text-center z-[1] mq450:text-lg mq1050:text-5xl">
              Continue with Google
            </b>
          </div>
        </button>
      </section>
      <div className="w-[1235px] flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-16xl">
        <h3 className="m-0 w-[141px] relative text-inherit font-bold font-inherit inline-block shrink-0 mq450:text-2xl mq1050:text-9xl">
          Or
        </h3>
      </div>
      <div className="w-[693px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left">
        <b className="relative inline-block min-w-[59px] mq450:text-base">
          Email
        </b>
      </div>
      <div className="w-[1262px] h-[84px] flex flex-row items-start justify-start pt-0 px-[315px] pb-[19px] box-border max-w-full shrink-0">
        <div className="h-[65px] w-[632px] rounded-lg bg-border-default-default flex flex-row items-start justify-start pt-5 px-[31px] pb-[27px] box-border">
          <div className="w-[632px] relative rounded-lg bg-border-default-default h-[65px] hidden" />
          <input
            className="w-[232px] [border:none] [outline:none] font-lato text-mini bg-[transparent] h-[18px] relative text-gray-500 text-left inline-block z-[1]"
            placeholder="Enter your email here..."
            type="text"
          />
        </div>
      </div>
      <div className="w-[738px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left">
        <b className="relative inline-block min-w-[104px] mq450:text-base">
          Password
        </b>
      </div>
      <div className="w-[1262px] h-[97px] flex flex-row items-start justify-start pt-0 px-[315px] pb-8 box-border max-w-full shrink-0">
        <div className="h-[65px] w-[632px] rounded-lg bg-border-default-default flex flex-row items-start justify-start pt-[21px] px-[29px] pb-[26px] box-border z-[1]">
          <div className="w-[632px] relative rounded-lg bg-border-default-default h-[65px] hidden" />
          <input
            className="w-[232px] [border:none] [outline:none] font-lato text-mini bg-[transparent] h-[18px] relative text-gray-500 text-left inline-block z-[2]"
            placeholder="Enter your password here..."
            type="text"
          />
        </div>
      </div>
      <section className="w-[1261px] h-[86px] flex flex-row items-start justify-center pt-0 px-5 pb-[19px] box-border max-w-full shrink-0">
        <Button
          hasIconEnd={false}
          hasIconStart={false}
          label="Sign In"
          propBorder="1px solid #778da9"
          propAlignSelf="stretch"
          propBorderRadius="18px"
          propWidth="631px"
          propFlex="unset"
          propHeight="unset"
          star="/star2.svg"
          propDisplay="inline-block"
          propMinWidth="84px"
          propFontSize="25px"
          x="/x3.svg"
        />
      </section>
      <section className="w-[1248px] flex flex-row items-start justify-center pt-0 px-5 pb-[723.9px] box-border max-w-full shrink-0 text-center text-6xl text-background-default-default font-poppins mq450:pb-[306px] mq450:box-border mq750:pb-[471px] mq750:box-border">
        <b className="w-[684px] relative inline-block shrink-0 max-w-full mq450:text-xl">
          <span>Don’t have an account?</span>
          <span className="text-gray-100"> Sign Up</span>
        </b>
      </section>
      <Footer1 />
    </div>
  );
};

export default Signin;
