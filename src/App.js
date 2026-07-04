import "./App.css";
import images from "./assets/img/index.js";

const App = () => {
  return (
    <>
      <div className="top container">
        <div className="top__left">
          <p className="temperature">
            <img
              src={images.sun}
              alt="Temperature"
              className="temperature__img"
            />
            32°C
          </p>

          <a href="#">Toshkent</a>
          <img src={images.bank_logo} alt="Bank Logo" className="bank__logo" />
          <p>|</p>

          <p className="top__course">USD: 12,178.85</p>
          <p className="top__course">EUR: 14,053.18</p>
          <p className="top__course">RUB: 146.54</p>
        </div>
        <div className="top__right">
          <img src={images.jch_2026} alt="JCH 2026" className="jch_2026" />
          <a href="#">O'zbekcha</a>
        </div>
      </div>
      <header className="header container">
        <div className="header__left">
          <img src={images.logo} alt="Logo" className="logo" />
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

      <main className="container">
        <div className="main__content content__container">
          <section className="new">
            <img src={images.sergeli} alt="Sergeli" className="new__img" />
            <article className="new__info">
              <h2 className="new__title">
                Shavkat Mirziyoyev Sergelidagi “Aqlli tuman” loyihasi bilan
                tanishdi. Tizim qolgan tumanlarda ham joriy etiladi
              </h2>
              <p className="new__desc">
                Davlatimiz rahbariga dastlab hokimlik binosida tuman
                idoralarining “yagona darcha” tamoyili asosida tashkil etilgan
                faoliyati haqida maʼlumot berilgan. Binoda hokimlikdan tashqari
                yana 5 ta tashkilot faoliyat yuritib, ular tomonidan aholi va
                tadbirkorlarga 30 dan ortiq turdagi davlat xizmatlari koʻrsatib
                kelinmoqda.
              </p>
            </article>
          </section>
          <section className="new reverse">
            <img src={images.sergeli2} alt="Sergeli" className="new__img" />
            <article className="new__info">
              <h2 className="new__title">
                Shavkat Mirziyoyev Sergelidagi “Aqlli tuman” loyihasi bilan
                tanishdi. Tizim qolgan tumanlarda ham joriy etiladi
              </h2>
              <p className="new__desc">
                Davlatimiz rahbariga dastlab hokimlik binosida tuman
                idoralarining “yagona darcha” tamoyili asosida tashkil etilgan
                faoliyati haqida maʼlumot berilgan. Binoda hokimlikdan tashqari
                yana 5 ta tashkilot faoliyat yuritib, ular tomonidan aholi va
                tadbirkorlarga 30 dan ortiq turdagi davlat xizmatlari koʻrsatib
                kelinmoqda.
              </p>
            </article>
          </section>
          <section className="new">
            <img src={images.sergeli3} alt="Sergeli" className="new__img" />
            <article className="new__info">
              <h2 className="new__title">
                Shavkat Mirziyoyev Sergelidagi “Aqlli tuman” loyihasi bilan
                tanishdi. Tizim qolgan tumanlarda ham joriy etiladi
              </h2>
              <p className="new__desc">
                Davlatimiz rahbariga dastlab hokimlik binosida tuman
                idoralarining “yagona darcha” tamoyili asosida tashkil etilgan
                faoliyati haqida maʼlumot berilgan. Binoda hokimlikdan tashqari
                yana 5 ta tashkilot faoliyat yuritib, ular tomonidan aholi va
                tadbirkorlarga 30 dan ortiq turdagi davlat xizmatlari koʻrsatib
                kelinmoqda.
              </p>
            </article>
          </section>
        </div>
        <div className="main__sidebar sidebar__container">
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
          <div className="sidebar__item">
            <h3>
              Nima uchun yutinganda tomoq og'riydi va bu vaqtda nima qilish
              zarur?
            </h3>
            <p className="date">
              <img src={images.calendar} alt="Sana" className="date__img" />
              Bugun, 15:50
            </p>
            <hr />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
