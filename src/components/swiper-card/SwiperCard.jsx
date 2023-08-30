import React from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
import "./SwiperCard.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import swipercard1 from "../../assets/swipercard1.jpg";
import swipercard2 from "../../assets/swipercard2.jpg";
import swipercard3 from "../../assets/swipercard3.jpeg";
import swipercard4 from "../../assets/swipercard4.jpg";
import swipercard5 from "../../assets/swipercard5.jpg";

const cardData = [
  {
    imageUrl: swipercard1,
    title: "سنترال پارک نیویورک",
    text: "در سال ۱۸۵۷، معماران منظر فردریک لاو اولمستد و کالورت ووکس برنده یک مسابقه طراحی برای پارک شدند. طرح گرینزوارد».",
  },
  {
    imageUrl: swipercard2,
    title: "قلعه هیمه جی",
    text: "قلعه هیمجی (姫路城، Himeji-jō) یک مجموعه قلعه ژاپنی در بالای تپه است که در هیمجی، شهری در استان هیوگو ژاپن واقع شده است. این قلعه به عنوان بهترین نمونه بازمانده از معماری اولیه دوره سنگوکو قلعه ژاپنی در نظر گرفته می‌شود.",
  },
  {
    imageUrl: swipercard3,
    title: "ویلا دسته",
    text: "ویلا d'Este ویلایی قرن شانزدهمی در تیوولی، نزدیک رم است، که به خاطر باغ رنسانس ایتالیایی در دامنه تپه و به ویژه به خاطر فواره‌های فراوانش معروف است. این باغ در فهرست میراث جهانی یونسکو ثبت شده است.",
  },
  {
    imageUrl: swipercard4,
    title: "کاخ الحمرا",
    text: "الحمرا (/ælˈhæmbrə/، اسپانیایی: [aˈlambɾa ]؛ عربی: الْحَمْرَاء، به زبان رومی: al-Hamrāʼ) یک مجموعه کاخ،قلعه باغ است که در گرانادا، اندلس، اسپانیا واقع شده است. ",
  },
  {
    imageUrl: swipercard5,
    title: "پارک استورهد",
    text: "استورهد (/ˈstaʊərhɛd/) یک ملک 1,072 هکتاری (2,650 جریب) است. این ملک در نزدیکی شمال غربی شهر (Mere)است و شامل یک عمارت قرن هجدهمی درجه یک و روستای استورتون، یکی از معروف ترین باغ‌ها در باغ منظر انگلیسی است. ",
  },
];

export default function SwiperCard({ navigation, pagination }) {
  return (
    <div className="swipercard-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 80,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation, EffectCoverflow]}
        spaceBetween={20}
        breakpoints={{
          700: {
            spaceBetween: 0,
            slidesPerView: 4,
          },
          500: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          411: {
            spaceBetween: 100,
            slidesPerView: 2,
          },
          300: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index} className="swiper-card-wrapper">
            <Card>
              <Card.Img
                variant="top"
                src={card.imageUrl}
                className="img-fluid"
                loading="lazy"
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
