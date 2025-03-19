import Slider from "react-slick";
import image from "../assets/Trending/1.webp";
import image2 from "../assets/Trending/2.webp";
import image3 from "../assets/Trending/3.webp";
import image4 from "../assets/Trending/4.webp";
import image5 from "../assets/Trending/5.webp";
import image6 from "../assets/Trending/6.webp";
import image7 from "../assets/Trending/7.webp";
import image8 from "../assets/Trending/8.webp";
import image9 from "../assets/Trending/9.webp";
import image10 from "../assets/Trending/10.webp";

const images = [
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} border-none h-12 w-12 flex justify-center items-center rounded-lg bg-neutral-800 hover:bg-neutral-700 z-20 transition-colors duration-200`}
      style={{ ...style, display: "block", position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <span className="text-white">›</span>
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} border-none h-12 w-12 flex justify-center items-center rounded-lg bg-neutral-800 hover:bg-neutral-700 z-20 transition-colors duration-200`}
      style={{ ...style, display: "block", position: "absolute", left: "0", top: "50%", transform: "translateY(-50%)" }}
      onClick={onClick}
    >
      <span className="text-white">‹</span>
    </div>
  );
};

const Sliding = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    dotsClass: "slick-dots mt-4",
    customPaging: () => (
      <button className="w-3 h-3 bg-neutral-500 rounded-full mx-1 hover:bg-neutral-300" />
    ),
  };

  return (
    <div className="container mx-auto relative">
      <h1 className="mt-20 text-xl md:text-2xl font-bold md:ml-28 ml-10">Trending Now</h1>
      <div className="mt-4 px-4 md:px-14 max-w-[1200px] mx-auto relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2 md:px-5">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto rounded-xl object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliding;