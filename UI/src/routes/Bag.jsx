import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import NoItems from "../components/NoItems";
import "../index.css";

const Bag = () => {
  const bagItems = useSelector((state) => state.bagItems);

  return (
    <>
      {bagItems.length > 0 ? (
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((bagItem) => (
              <BagItem bagItem={bagItem} key={bagItem.key} />
            ))}
          </div>
          <BagSummary bagSummary />
        </div>
      ) : (
        <div className="no-item-container">
          <NoItems />
        </div>
      )}
    </>
  );
};

export default Bag;
