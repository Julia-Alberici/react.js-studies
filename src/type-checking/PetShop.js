import PropTypes from "prop-types";

function PetShop(props) {
  const { dogs, cats, customers, customerName, onClick } = props;

  return (
    <div>
      <h1>Dogs: {dogs}</h1>
      <h1>Cats: {cats}</h1>
      <div>Customers amount: {customers} </div>
      <div>Customer name: {customerName}</div>
      <button onClick={onClick}>Iniciar banho</button>
    </div>
  );
}

PetShop.defaultProps = {
  dogs: 0,
  cats: 0,
  customers: 0,
  customerName: "Jhon Doe",
};

PetShop.propTypes = {
  dogs: PropTypes.number.isRequired,
  cats: PropTypes.number.isRequired,
  customers: PropTypes.number.isRequired,
  customerName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(["Completed", "Disabled"]),
};

export default PetShop;
