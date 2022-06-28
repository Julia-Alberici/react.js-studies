import PropType from "prop-types";

function Button(props) {
  const { children, onClick } = props;

  return <button onClick={onClick}>{children}</button>;
}

Button.defaultProps = {
  children: "Button",
};

Button.propTypes = {
  children: PropType.string,
  onClick: PropType.func.isRequired,
};

export default Button;
