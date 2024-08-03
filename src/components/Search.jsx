import { useMemo } from "react";
import PropTypes from "prop-types";

const Search = ({ className = "", propPadding, propFlex }) => {
  const searchStyle = useMemo(() => {
    return {
      padding: propPadding,
      flex: propFlex,
    };
  }, [propPadding, propFlex]);

  return (
    <div
      className={`self-stretch rounded-radius-200 bg-background-default-default border-border-default-default border-[1px] border-solid overflow-hidden flex flex-row items-start justify-start py-[19px] pl-space-400 pr-[15px] gap-space-200 z-[1] ${className}`}
      style={searchStyle}
    >
      <input
        className="w-[calc(100%_-_47px)] [border:none] [outline:none] font-single-line-body-base text-base bg-[transparent] h-4 flex-1 relative leading-[100%] text-text-default-default text-left inline-block min-w-[150px] p-0"
        placeholder="Your email for updates"
        type="text"
      />
      <img
        className="h-4 w-4 relative overflow-hidden shrink-0"
        alt=""
        src="/x1.svg"
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Search;
