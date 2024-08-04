import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import "../index.css";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <div className="items-container">
      {state?.items?.map((homeItem) => (
        <HomeItem item={homeItem} key={homeItem.id} />
      ))}
    </div>
  );
};

export default Home;
