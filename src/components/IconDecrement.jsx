import PropTypes from "prop-types";

export const IconDecrement = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Button">
          <path id="Path 2" d="M17 12H7" stroke="white" strokeLinecap="round" />
          <path
            id="Oval"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="white"
          />
        </g>
      </svg>
    </button>
  );
};

IconDecrement.propTypes = {
  onClick: PropTypes.func,
};
