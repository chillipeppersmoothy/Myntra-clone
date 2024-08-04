import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import NoItems from "../components/NoItems";
import "../index.css";

const Bag = () => {
  const state = useSelector((state) => state);

  return (
    <>
      {state?.bagItems?.length > 0 ? (
        <div className="bag-page">
          <div className="bag-items-container">
            {state?.bagItems?.map((bagItem) => (
              <BagItem bagItem={bagItem} key={bagItem.id} />
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