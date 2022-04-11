import PropTypes from "prop-types";

const Button = ({ color, text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="btn"
      type="button"
      style={{ backgroundColor: color }}
    >
      {text}{" "}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onclick: PropTypes.func,
};
export default Button;
