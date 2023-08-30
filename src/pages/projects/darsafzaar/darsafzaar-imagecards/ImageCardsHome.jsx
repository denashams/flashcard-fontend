import React from "react";
import "./ImageCardsHome.css";
import SwiperCard from "../../../../components/swiper-card/SwiperCard";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import prehistoryThumbnail from "../../../../assets/prehistory.png";
import mesopotamiaThumbnail from "../../../../assets/mesopotamia.png";
import egyptThumbnail from "../../../../assets/egypt.png";
import aegeanThumbnail from "../../../../assets/aegean.png";
import greeceThumbnail from "../../../../assets/greece-thumbnail.png";
import romeThumbnail from "../../../../assets/rome.png";
import christianityThumbnail from "../../../../assets/christianity.png";
import byzantineThumbnail from "../../../../assets/byzantine.png";
import gothicTumbnail from "../../../../assets/gothicThumbnail.png";
import renaissanceThumbnail from "../../../../assets/renaissanceThumbnail.png";
import baroqueThumbnail from "../../../../assets/baroque.png";
import rococoThumbnail from "../../../../assets/rococo.jpg";

// Create an array of card objects
const cardData = [
  {
    imgSrc: prehistoryThumbnail,
    title: "پیش از تاریخ",
  },
  {
    imgSrc: mesopotamiaThumbnail,
    title: "بین‌النهرین",
  },
  {
    imgSrc: egyptThumbnail,
    title: "مصر",
  },
  {
    imgSrc: aegeanThumbnail,
    title: "تمدن اژه",
  },
  {
    imgSrc: greeceThumbnail,
    title: "یونان",
  },
  {
    imgSrc: romeThumbnail,
    title: "اتروسک و روم",
  },
  {
    imgSrc: christianityThumbnail,
    title: "صدر مسیحیت",
  },
  {
    imgSrc: byzantineThumbnail,
    title: "بیزانس",
  },
  {
    imgSrc: gothicTumbnail,
    title: "قرون وسطی",
  },
  {
    imgSrc: renaissanceThumbnail,
    title: "رنسانس",
  },
  {
    imgSrc: baroqueThumbnail,
    title: "باروک",
  },
  {
    imgSrc: rococoThumbnail,
    title: "روکوکو",
  },
];

function ImageCards() {
  return (
    <div className="image-card">
      <div className="imagecard-overview">
        <SwiperCard />
      </div>

      <div className="imagecard-subjects">
        <h1>مباحث</h1>
        <div className="imagecard-subjects-wrapper">
          <div className="subjects-thumbnail">
            <div className="row">
              {cardData.map((card, index) => (
                <div key={index} className="col-md-2">
                  <Card style={{ width: "9rem" }} className="border-0 rounded">
                    <Card.Img variant="top" src={card.imgSrc} loading="lazy"/>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="tag-search-wrapper">
            <h2 className="mb-3">برچسب‌ها</h2>
            <input type="text" placeholder="جستجو"></input>
          </div>
        </div>
      </div>
      <div className="imagecard-about">
        <div className="imagecard-about-container">
          <div className="row">
            <div className="col-md-6 imagecard-about-image">image</div>
            <div className="col-md-6">
        <h2 className="mb-4">درباره</h2>
              <p>
                ما معتقدیم می‌توانیم توانایی افراد برای به خاطر سپردن تصاویر را
                به طور اساسی تغییر دهیم. در این جh از تکنیک‌های حافظه و
                رویکردهای جدید برای فراگیری تصاویر استفاده می‌کنیم تا یادگیری
                تصاویر را به طور چشمگیری آسان‌تر و سریع‌تر کنیم.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="imagecard-quiz">
        <h1>quiz</h1>
      </div>
    </div>
  );
}

export default ImageCards;
