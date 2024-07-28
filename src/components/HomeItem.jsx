/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { bagAction } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispath = useDispatch();
  const bagItems = useSelector((state) => state.bagItems);
  const existInBag = bagItems?.find((bag) => item.id === bag.id);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt={item.item_name} />
      <div className="item-name">{item.item_name}</div>
      <div className="company-name">{item.company}</div>
      <div className="rating">
        {item.rating.stars} ⭐ ({item.rating.count} reviews)
      </div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!existInBag ? (
        <button
          className="btn btn-add-bag btn-success"
          onClick={() => dispath(bagAction.addItem(item))}
        >
          Add to Bag
        </button>
      ) : (
        <button
          className="btn btn-add-bag btn-danger"
          onClick={() => dispath(bagAction.removeItem({ id: item.id }))}
        >
          Remove from Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
