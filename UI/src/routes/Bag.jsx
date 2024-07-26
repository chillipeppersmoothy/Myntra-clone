import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import "../index.css";
import { useSelector } from "react-redux";

const bagSummary = {
  totalItem: 1,
  totalDiscount: 10,
  totalMRP: 1000,
  finalPayment: 900,
};

const Bag = () => {
  const bagItem = useSelector((state) => state.items[0]);

  return (
    <div className="bag-page">
      <div className="bag-items-container">
        <BagItem bagItem={bagItem} />
      </div>
      <BagSummary bagSummary={bagSummary} />
    </div>
  );
};

export default Bag;
