import Images from "../../assets/img/index";
import "./top.css";

const Top = () => {
  return (
    <div className="top container">
      <div className="top__left">
        <p className="temperature">
          <img
            src={Images.sun}
            alt="Temperature"
            className="temperature__img"
          />
          32°C
        </p>

        <a href="#">Toshkent</a>
        <img src={Images.bank_logo} alt="Bank Logo" className="bank__logo" />
        <p>|</p>

        <p className="top__course">USD: 12,178.85</p>
        <p className="top__course">EUR: 14,053.18</p>
        <p className="top__course">RUB: 146.54</p>
      </div>
      <div className="top__right">
        <img src={Images.jch_2026} alt="JCH 2026" className="jch_2026" />
        <a href="#">O'zbekcha</a>
      </div>
    </div>
  );
};

export default Top;
