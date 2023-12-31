import { Link } from "react-router-dom";

const CartWidget = ({ number }) => {
  return (
    <div className="cart-container">
      <Link to={"/cart"}>
        {number !== 0 && <div>{number}</div>}
        <i className="bi bi-cart-fill"></i>
      </Link>
    </div>
  );
};

export default CartWidget;
