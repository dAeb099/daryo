import Images from "../../assets/img/index";
import "./new.css";

const New = () => {
  return (
    <>
      <h2 className="new__title">| Yangi</h2>
      <section className="new">
        <img src={Images.sergeli} alt="Sergeli" className="new__img" />
        <article className="new__info">
          <h2 className="new__title">
            Shavkat Mirziyoyev Sergelidagi “Aqlli tuman” loyihasi bilan
            tanishdi. Tizim qolgan tumanlarda ham joriy etiladi
          </h2>
          <p className="new__desc">
            Davlatimiz rahbariga dastlab hokimlik binosida tuman idoralarining
            “yagona darcha” tamoyili asosida tashkil etilgan faoliyati haqida
            maʼlumot berilgan. Binoda hokimlikdan tashqari yana 5 ta tashkilot
            faoliyat yuritib, ular tomonidan aholi va tadbirkorlarga 30 dan
            ortiq turdagi davlat xizmatlari koʻrsatib kelinmoqda.
          </p>
          <p className="date">Bugun, 15:48</p>
        </article>
      </section>
      <section className="new reverse">
        <img src={Images.sergeli2} alt="Sergeli" className="new__img" />
        <article className="new__info">
          <h2 className="new__title">
            Shavkat Mirziyoyev Sergelidagi “Aqlli tuman” loyihasi bilan
            tanishdi. Tizim qolgan tumanlarda ham joriy etiladi
          </h2>
          <p className="new__desc">
            Davlatimiz rahbariga dastlab hokimlik binosida tuman idoralarining
            “yagona darcha” tamoyili asosida tashkil etilgan faoliyati haqida
            maʼlumot berilgan. Binoda hokimlikdan tashqari yana 5 ta tashkilot
            faoliyat yuritib, ular tomonidan aholi va tadbirkorlarga 30 dan
            ortiq turdagi davlat xizmatlari koʻrsatib kelinmoqda.
          </p>
          <p className="date">Bugun, 15:48</p>
        </article>
      </section>
      <section className="new">
        <img src={Images.sergeli3} alt="Sergeli" className="new__img" />
        <article className="new__info">
          <h2 className="new__title">
            Shavkat Mirziyoyev Sergelidagi “Aqlli tuman” loyihasi bilan
            tanishdi. Tizim qolgan tumanlarda ham joriy etiladi
          </h2>
          <p className="new__desc">
            Davlatimiz rahbariga dastlab hokimlik binosida tuman idoralarining
            “yagona darcha” tamoyili asosida tashkil etilgan faoliyati haqida
            maʼlumot berilgan. Binoda hokimlikdan tashqari yana 5 ta tashkilot
            faoliyat yuritib, ular tomonidan aholi va tadbirkorlarga 30 dan
            ortiq turdagi davlat xizmatlari koʻrsatib kelinmoqda.
          </p>
          <p className="date">Bugun, 15:48</p>
        </article>
      </section>
    </>
  );
};

export default New;
