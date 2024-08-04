/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import "../index.css";
import { bagAction } from "../store/bagSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const BagItem = ({ bagItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img
          className="bag-item-img"
          src={bagItem.image}
          alt={bagItem.item_name}
        />
      </div>
      <div className="item-right-part">
        <div className="bag-company">{bagItem.company}</div>
        <div className="item-name">{bagItem.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {bagItem.current_price}</span>
          <span className="original-price">Rs {bagItem.original_price}</span>
          <span className="discount">({bagItem.discount_percentage}% OFF)</span>
        </div>
        <div className="return-period">
          <span className="return-period-days">
            {bagItem.return_period} days
          </span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{bagItem.delivery_date}</span>
        </div>
      </div>

      <div
        className="remove-from-cart"
        onClick={() => dispatch(bagAction.removeItem({ id: bagItem.id }))}
      >
        <RiDeleteBin6Fill data-testid="delete-icon"/>
      </div>
    </div>
  );
};

export default BagItem;
