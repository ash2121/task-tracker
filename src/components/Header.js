import PropTypes from "prop-types";
import Button from "./Button";
// import Tasks from './Tasks'
const Header = ({ title, onAdds,showAdd }) => {
  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <Button onclick={onAdds} color= {showAdd? 'red' : 'green'} text= {!showAdd ? 'Add' : 'Close'} />
      </header>
    </>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
