import "../index.css";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const bagItems = useSelector((state) => state.bagItems);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">
          <CiSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonOutline />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <AiOutlineHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link to="/bag" className="action_container" style={{ color: "black" }}>
          <IoBagOutline />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">
            {bagItems.length > 0 ? bagItems.length : 0}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
