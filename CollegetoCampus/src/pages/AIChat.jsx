import FrameComponent22 from "../components/FrameComponent22";
import FrameComponent23 from "../components/FrameComponent23";
import "../global.css";
const AIChat = () => {
  return (
    <>
      <nav
        className="text-white p-4 flex justify-between items-center"
        style={{
          backgroundColor: "#0D1B2A",
        }}
      >
        <div className="text-2xl font-bold">CollegeToCampus</div>
        <ul className="flex space-x-4">
          <li
          >
            <a
              style={{
                color: "white",
              }}
              href="homepage2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              style={{
                color: "white",
              }}
              href="#job-listings"
            >
              Job Listings
            </a>
          </li>
          <li>
            <a
              style={{
                color: "white",
              }}
              href="#training"
              className="font-bold"
            >
              Training
            </a>
          </li>
          <li>
            <a
              style={{
                color: "white",
              }}
              href="#resources"
            >
              Resources
            </a>
          </li>
          <li>
            <a
              style={{
                color: "white",
              }}
              href="#interaction"
            >
              Interaction
            </a>
          </li>
        </ul>
        <button className="bg-blue-700 px-4 py-2 rounded">Login</button>
      </nav>
      <div className="w-full relative bg-gainsboro overflow-hidden flex flex-col items-start justify-start gap-[71px] leading-[normal] tracking-[normal] gap-[18px] gap-[35px]">
        <FrameComponent22
          logo2IconHeight="58px"
          logo2="/logo-2@2x.png"
          star="/star.svg"
          label="Login"
          x="/x.svg"
          hasIconEnd={false}
          hasIconStart={false}
        />
        <section className="w-[1395px] flex flex-row items-start justify-center pt-0 px-5 pb-[408px] box-border max-w-full text-left text-31xl text-gray-500 font-lato lg:pb-[265px] lg:box-border mq750:pb-[172px] mq750:box-border">
          <div className="w-[1027px] flex flex-col items-start justify-start gap-[49px] max-w-full gap-6">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[64px] font-extrabold font-inherit [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mq450:text-11xl mq450:leading-[38px] mq1050:text-21xl mq1050:leading-[51px]">
              Enhancing Your Job Training with Personalized AI Assistance
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[66px] pr-[67px] box-border max-w-full text-center text-xl mq1050:pl-[33px] mq1050:pr-[33px] mq1050:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[54px] max-w-full gap-[27px]">
                <div className="w-[849px] flex flex-row items-start justify-end py-0 px-[29px] box-border max-w-full">
                  <div className="flex-1 relative inline-block max-w-full mq450:text-base">
                    Your Personal AI Assistant for Tailored Career Guidance and
                    Support
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[33px] max-w-full text-left text-mini text-black gap-4">
                  <button className="cursor-pointer [border:none] pt-[13px] pb-[35px] pl-[70px] pr-5 bg-gray-300 self-stretch rounded-lg flex flex-row items-start justify-center box-border max-w-full hover:bg-dimgray mq450:pl-5 mq450:box-border">
                    <div className="h-[68px] w-[894px] relative rounded-lg bg-gray-300 hidden max-w-full" />
                    <div className="w-[308px] relative text-6xl tracking-[0.1px] leading-[20px] font-medium font-poppins text-background-default-default text-center flex items-center justify-center shrink-0 z-[1] mq450:text-xl mq450:leading-[16px]">
                      Ask AI Chat
                    </div>
                  </button>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-6 pb-10 pl-8 pr-5 box-border relative gap-[7px] max-w-full mq750:pt-5 mq750:pb-[26px] mq750:box-border">
                    <img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle-64.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-center gap-1.5 min-w-[521px] max-w-full mq1050:flex-wrap mq1050:min-w-full">
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <div className="flex flex-col items-start justify-start gap-[71px]">
                          <img
                            className="w-[33px] h-[37px] relative rounded-9980xl overflow-hidden shrink-0 z-[1]"
                            loading="lazy"
                            alt=""
                            src="/user.svg"
                          />
                          <div className="flex flex-row items-start justify-start py-0 pl-[5px] pr-0">
                            <img
                              className="h-[37px] w-[33px] relative rounded-9980xl overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/user.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-6 min-w-[492px] max-w-full mq750:min-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[55px] max-w-full mq750:flex-wrap gap-[27px]">
                            <div className="flex-[0.9275] rounded-lg bg-border-default-default flex flex-row items-start justify-start pt-3.5 pb-4 pl-[19px] pr-1.5 box-border min-w-[224px] whitespace-nowrap max-w-full z-[1] mq450:flex-1">
                              <div className="h-12 w-[345px] relative rounded-lg bg-border-default-default hidden max-w-full" />
                              <div className="flex-1 relative z-[2]">{`Hello, How may I help you today? `}</div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-[38px] px-0 pb-0 box-border min-w-[231px] max-w-full">
                              <div className="self-stretch rounded-lg bg-border-default-default flex flex-row items-start justify-start pt-3.5 pb-4 pl-[15px] pr-0 box-border whitespace-nowrap max-w-full z-[1]">
                                <div className="h-12 w-[355px] relative rounded-lg bg-border-default-default hidden max-w-full" />
                                <div className="flex-1 relative inline-block max-w-full z-[2]">
                                  How should I start learning python
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch rounded-lg bg-border-default-default flex flex-row items-start justify-start pt-2.5 pb-[35px] pl-[19px] pr-[11px] box-border max-w-full z-[1] text-gray-500">
                            <div className="h-[315px] w-[752px] relative rounded-lg bg-border-default-default hidden max-w-full" />
                            <div className="flex-1 relative inline-block max-w-full z-[2]">
                              <p className="m-0">Learn the Basics</p>
                              <p className="m-0">
                                Start with the fundamentals of Python
                                programming:
                              </p>
                              <ul className="m-0 font-inherit text-inherit pl-5">
                                <li className="mb-0">
                                  Variables and Data Types
                                </li>
                                <li className="mb-0">Operators</li>
                                <li className="mb-0">
                                  Control Flow (if statements, loops)
                                </li>
                                <li className="mb-0">Functions</li>
                                <li className="mb-0">
                                  Basic Data Structures (lists, tuples,
                                  dictionaries, sets)
                                </li>
                              </ul>
                              <p className="m-0">Resources:</p>
                              <ul className="m-0 font-inherit text-inherit pl-5">
                                <li className="mb-0">
                                  {`Official Python Documentation: `}
                                  <a
                                    className="text-[inherit]"
                                    href="https://docs.python.org/3/tutorial/index.html"
                                    target="_blank"
                                  >
                                    <span className="[text-decoration:underline]">
                                      docs.python.org
                                    </span>
                                  </a>
                                </li>
                                <li className="mb-0">
                                  Automate the Boring Stuff with Python by Al
                                  Sweigart (free online version available)
                                </li>
                              </ul>
                              <p className="m-0">
                                Apply what you've learned by working on small
                                projects. Here are some ideas:
                              </p>
                              <ul className="m-0 font-inherit text-inherit pl-5">
                                <li className="mb-0">Simple Calculator</li>
                                <li className="mb-0">To-Do List App</li>
                                <li className="mb-0">Web Scraper</li>
                                <li>Basic Game (e.g., Tic-Tac-Toe)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <input
                          className="[border:none] [outline:none] bg-border-default-default self-stretch h-[50px] rounded-lg flex flex-row items-start justify-start pt-4 pb-[17px] pl-[19px] pr-[17px] box-border font-lato text-mini text-gray-600 min-w-[250px]"
                          placeholder="Type here"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[45px] px-0 pb-0">
                      <img
                        className="w-8 h-9 relative rounded-9980xl overflow-hidden shrink-0 z-[1]"
                        alt=""
                        src="/user-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent23 />
      </div>
    </>
  );
};

export default AIChat;
