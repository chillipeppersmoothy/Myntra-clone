import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import "../index.css";

const Home = () => {
  const homeItems = useSelector((state) => state.items);

  return (
    <div className="items-container">
      {homeItems.map((homeItem) => (
        <HomeItem item={homeItem} key={homeItem.id} />
      ))}
    </div>
  );
};

export default Home;
