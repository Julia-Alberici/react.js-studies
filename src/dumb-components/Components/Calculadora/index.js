import PropType from "prop-types";

function Calc(props) {
  const { onChange } = props;
  return (
    <div>
      <input onChange={onChange} />
    </div>
  );
}

Calc.propTypes = {
  onChange: PropType.func.isRequired,
};

export default Calc;
