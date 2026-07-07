import Images from "../../assets/img/index";
import "./header.css";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__left">
        <img src={Images.logo} alt="Logo" className="logo" />
        <div className="header__links">
          <a href="#">O'zbekiston</a>
          <a href="#">Markaziy Osiyo</a>
          <a href="#">Dunyo</a>
          <a href="#">Pul</a>
          <a href="#">Madaniyat</a>
          <a href="#">Sport</a>
          <a href="#">Layfstayl</a>
        </div>
      </div>
      <div className="header__right">
        <input type={"search"} placeholder="Qidiruv" className="search" />
        <a href="#" className="header__cabinet">
          Cabinet
        </a>
      </div>
    </header>
  );
};

export default Header;
