/* eslint-disable react/prop-types */
import "../index.css";

export const BagItem = ({ bagItem }) => {
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={bagItem.image} />
      </div>
      <div className="item-right-part">
        <div className="company">${bagItem.company}</div>
        <div className="item-name">${bagItem.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs ${bagItem.current_price}</span>
          <span className="original-price">Rs ${bagItem.original_price}</span>
          <span className="discount-percentage">
            (${bagItem.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">
            ${bagItem.return_period} days
          </span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">
            ${bagItem.delivery_date}
          </span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={() => console.log(bagItem)}>
        X
      </div>
    </div>
  );
};

export default BagItem;
