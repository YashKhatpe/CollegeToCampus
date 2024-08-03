import PropTypes from "prop-types";

const Header3 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[269px] box-border gap-5 max-w-full shrink-0 text-center text-3xl text-background-default-default font-poppins ${className}`}
    >
      <img
        className="h-[54.2px] w-[311px] relative object-cover"
        loading="lazy"
        alt=""
        src="/logo-3@2x.png"
      />
      <div className="w-[680px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
        <b className="self-stretch relative shrink-0">
          <span className="whitespace-pre-wrap">{`Home      `}</span>
          <span className="[text-decoration:underline] text-skyblue">
            Job Listing
          </span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      Training      `}</span>
          <span className="text-gray-200">Resources</span>
          <span className="text-background-default-default whitespace-pre-wrap">{`      `}</span>
          <span className="text-gray-100">Interaction</span>
        </b>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <button className="cursor-pointer border-border-brand-default border-[1px] border-solid py-2.5 px-[34px] bg-lightslategray rounded-radius-200 overflow-hidden flex flex-row items-start justify-start gap-space-200">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/star.svg"
          />
          <div className="relative text-base leading-[140%] font-extrabold font-single-line-body-base text-text-brand-on-brand text-left inline-block min-w-[44px]">
            Login
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/x.svg"
          />
        </button>
      </div>
    </header>
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
