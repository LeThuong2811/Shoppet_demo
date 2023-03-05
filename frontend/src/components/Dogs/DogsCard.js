import "./dogs.css";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const DogsCard = (props) => {
  const { id, name, breed, price, description, imageUrl } = props;
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, setTotal } = useContext(CartContext);

  const handleClick = () => {
    setIsAdded(true);
    const newItems = {
      name: name,
      price: price,
      imageUrl: imageUrl,
    };
    addToCart((item) => [...item, newItems]);
    setTotal((total) => (total += Number(price)));
  };

  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p> {name} </p>
          <p> {breed} </p>
        </div>

        <div className="dogs-img-container">
          <img
            className="dogs-img"
            src={imageUrl}
            alt={`picture of: ${name}`}
          />
        </div>
        <div className="dogs-desc">{description}</div>
        <div className="dogs-price">{price}</div>
        {isAdded ? (
          <button className="dogs-btn-disabled">ADDED</button>
        ) : (
          <button className="dogs-btn" onClick={() => handleClick()}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCard;
