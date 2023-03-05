import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router";
import "./cart.css";
const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const handleCheckOut = () => {
    setTotal(0);
    addToCart([{}]);
  };

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT</div>
        <div className="cart-items">
          {myCart.slice(1).map((item) => {
            return (
              <div className="cart-item">
                <img className="cart-item-img" src={item.imageUrl} alt="" />
                {item.name} : {item.price}$
              </div>
            );
          })}
          <div className="cart-total">TOTAL: {total} $</div>
        </div>
        <button className="cart-checkout" onClick={handleCheckOut}>
          DONE
        </button>
        <button className="cart-gohome" onClick={handleGoHome}>
          RETURN HOME
        </button>
      </section>
    </>
  );
};

export default Cart;
