import Images from "../../assets/img/index";
import "./videos.css";

const Videos = () => {
  return (
    <section className="videos">
      <h2 className="videos__title">| Videolar </h2>
      <article className="videos__container">
        <div className="videos__video">
          <img src={Images.hantavirus} alt="video" />
          <h3>"Hantavirusga qarshi vaksina yo'q" - Nurmat Otabekov</h3>
        </div>
        <div className="videos__videos">
          <img
            src={Images.hantavirus}
            alt="video"
            className="videos__smallvideo"
          />
          <img
            src={Images.hantavirus}
            alt="video"
            className="videos__smallvideo"
          />
          <img
            src={Images.hantavirus}
            alt="video"
            className="videos__smallvideo"
          />
          <img
            src={Images.hantavirus}
            alt="video"
            className="videos__smallvideo"
          />
          <img
            src={Images.hantavirus}
            alt="video"
            className="videos__smallvideo"
          />
        </div>
      </article>
    </section>
  );
};

export default Videos;
