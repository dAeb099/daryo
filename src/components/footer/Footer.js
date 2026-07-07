import Images from "../../assets/img/index";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <img src={Images.logo} alt="logo" className="logo" />
        <p className="footer__info">
          “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot agentligi
          (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti Administratsiyasi
          huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi) tomonidan
          13.03.2015 yil sanasida 0944-sonli guvohnoma bilan ommaviy axborot
          vositasi sifatida ro‘yxatga olingan. Matnli materiallarni to‘liq
          ko‘chirish yoki qisman iqtibos keltirishga, shuningdek, fotografik,
          grafik, audio va/yoki videomateriallaridan foydalanishga “daryo.uz”
          saytiga giperhavola mavjud bo‘lgan va/yoki “Daryo” internet-nashrining
          muallifligini ko‘rsatuvchi yozuv ilova qilingan taqdirda yo‘l
          qo‘yiladi.
        </p>
        <div className="footer__div">
          <img src={Images.google_play} alt="google_play" />
          <img src={Images.app_store} alt="app_store" />
          <div className="footer__last">
            <p className="footer__last__text">
              © «Simple Networking Solutions» MChJ, 2013–2025
            </p>
            <p className="footer__last__text">
              Ishlab chiqaruvchi: Online Service Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
