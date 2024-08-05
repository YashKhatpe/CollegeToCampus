import MainContent2 from "../components/MainContent2";
import Footer2 from "../components/Footer2";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import EmailPasswordFields from "../components/EmailPasswordFields";
import Button from "../components/Button";
const Signup = () => {
  
  const {login, register } = useKindeAuth();
  return (
    <div className="w-full h-[2645px] relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start pt-[184px] pb-[140px] pl-24 pr-1.5 box-border gap-[454px] leading-[normal] tracking-[normal] text-left text-mini text-gray-500 font-lato gap-[227px] lg:pl-12 lg:box-border gap-[57px] mq750:h-auto gap-[113px] mq750:pl-6 mq750:box-border">
      <header className="mt-[-768px] ml-[-256px] w-[1760px] h-[314px] relative overflow-hidden shrink-0 max-w-[132%]">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[1185px] rounded-lg max-h-full w-[575px] object-cover"
          alt=""
          src="/trainingpage3@2x.png"
        />
      </header>
      <div className="w-[232px] relative hidden z-[1]">
        Enter your first name here...
      </div>
      <div className="!m-[0] absolute top-[2193px] left-[96px] flex flex-row items-start justify-start">
        <div className="!m-[0] absolute bottom-[-57px] left-[0px] flex flex-row items-start justify-start">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/frame.svg"
          />
          <img
            className="h-[313px] w-6 relative overflow-hidden shrink-0 z-[3]"
            alt=""
            src="/frame.svg"
          />
        </div>
        <img
          className="h-64 w-[35px] relative overflow-hidden shrink-0 z-[4]"
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
      </div>
      {/* <MainContent2 /> */}
      <section
      className={`w-[1248px] flex flex-row items-start justify-center pt-0 px-5 pb-[322px] box-border max-w-full shrink-0 text-center text-31xl text-background-default-default font-poppins lg:pb-[209px] lg:box-border mq450:pb-[88px] mq450:box-border mq1050:pb-[136px] mq1050:box-border`}
    >
      <div className="w-[932px] flex flex-col items-start justify-start gap-[58px] max-w-full gap-[29px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[43px] box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-11xl mq1050:text-21xl">
            CollegeToCampus
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full text-11xl">
          <div className="w-[632px] flex flex-col items-end justify-start gap-[43px] max-w-full gap-[21px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[23px] pr-5 box-border max-w-full">
              <h3 className="m-0 w-[463px] relative text-inherit font-bold font-inherit inline-block shrink-0 max-w-full mq450:text-lg mq1050:text-5xl">
                Create your account
              </h3>
            </div>
            <button onClick={register} className="cursor-pointer [border:none] pt-[15px] pb-4 pl-[100px] pr-[55px] bg-border-default-default self-stretch rounded-lg overflow-hidden flex flex-row flex-wrap items-start justify-center box-border max-w-full [row-gap:20px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="h-[47px] w-[45px] relative object-cover min-h-[47px]"
                alt=""
                src="/googlelogo9808-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[301px] max-w-full ml-[-31px] mq450:ml-0">
                <b className="self-stretch relative text-11xl font-poppins text-black text-center mq450:text-lg mq1050:text-5xl">
                  Continue with Google
                </b>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[916px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <form className="m-0 w-[684px] flex flex-col items-end justify-start gap-7 max-w-full">
            <div className="w-[667px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h2 className="m-0 h-[46px] w-[141px] relative text-16xl font-bold font-poppins text-background-default-default text-center inline-block shrink-0 mq450:text-2xl mq1050:text-9xl">
                Or
              </h2>
            </div>
            <div className="w-[671px] flex flex-row items-start justify-end pt-0 px-[18px] pb-3.5 box-border max-w-full">
              <div className="flex-1 flex flex-col items-end justify-start gap-[19px] max-w-full">
                <div className="self-stretch h-[99px] relative">
                  <b className="absolute top-[0px] left-[0px] text-xl inline-block font-poppins text-background-default-default text-left w-[115px] h-8 min-w-[115px] mq450:text-base">
                    First Name
                  </b>
                  <div className="absolute top-[31px] left-[0px] rounded-lg bg-border-default-default w-[632px] h-[65px] overflow-hidden z-[1]" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
                  <div className="flex flex-row items-start justify-start py-0 px-px">
                    <b className="relative text-xl inline-block font-poppins text-background-default-default text-left min-w-[112px] mq450:text-base">
                      Last Name
                    </b>
                  </div>
                  <input
                    className="w-full [border:none] [outline:none] bg-border-default-default self-stretch h-[65px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[22px] px-[30px] pb-[25px] box-border font-lato text-mini text-gray-500 min-w-[250px] z-[1]"
                    placeholder="Enter your last name here..."
                    type="text"
                  />
                </div>
                <EmailPasswordFields
                  email="Email"
                  emailPlaceholderPlacehold="Enter your email here..."
                />
                <EmailPasswordFields
                  propGap="unset"
                  email="Password"
                  propMinWidth="104px"
                  emailPlaceholderPlacehold="Enter your password here..."
                />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[3px] box-border max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-0.5 max-w-full">
                    <b className="relative text-xl font-poppins text-background-default-default text-left mq450:text-base">
                      Confirm Password
                    </b>
                    <input
                      className="w-full [border:none] [outline:none] bg-border-default-default self-stretch h-[65px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[21px] px-[26px] pb-[26px] box-border font-lato text-mini text-gray-500 min-w-[250px]"
                      placeholder="Enter your password here again... "
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[30px] max-w-full">
              <div className="w-[669px] flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full">
                <Button
                  hasIconEnd={false}
                  hasIconStart={false}
                  label="Create your account"
                  propBorder="1px solid #778da9"
                  propAlignSelf="unset"
                  propBorderRadius="18px"
                  propWidth="unset"
                  propFlex="1"
                  propHeight="unset"
                  star="/star.svg"
                  propDisplay="unset"
                  propMinWidth="unset"
                  propFontSize="25px"
                  x="/x.svg"
                />
              </div>
              <b className="self-stretch relative text-6xl font-poppins text-center mq450:text-xl">
                <span className="text-background-default-default">
                  Already have an account?
                </span>
                <span className="text-gray-100"> Sign In</span>
              </b>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Signup;
