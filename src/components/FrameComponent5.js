import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[37px] pl-[23px] pr-5 box-border max-w-full shrink-0 text-left text-10xl text-silver font-lato ${className}`}
    >
      <div className="w-[1175px] flex flex-row flex-wrap items-start justify-center gap-[107px] max-w-full gap-[27px] gap-[53px]">
        <div className="flex-1 flex flex-col items-end justify-start gap-[35.7px] min-w-[347px] max-w-full mq450:min-w-full gap-[18px]">
          <img
            className="self-stretch h-[301px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/homepage9-21@2x.png"
          />
          <div className="flex flex-row items-start justify-end py-0 px-[11px]">
            <img
              className="h-[18.7px] w-[18.7px] relative"
              loading="lazy"
              alt=""
              src="/icon1.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[347px] max-w-full mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full">
            <img
              className="self-stretch h-[301px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/homepage7-21@2x.png"
            />
            <div className="w-[516.4px] flex flex-row items-start justify-start gap-[77.7px] max-w-full mq450:flex-wrap gap-[19px] gap-[39px]">
              <div className="flex-1 relative inline-block min-w-[273px] max-w-full">
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
                    <span>Guides and tools for resumes, interviews and</span>
                  </span>
                </p>
                <p className="m-0">
                  <span className="font-medium">
                    <span>job postings.</span>
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-start justify-start pt-[6.7px] px-0 pb-0">
                <img
                  className="w-[18.7px] h-[18.7px] relative"
                  alt=""
                  src="/icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
