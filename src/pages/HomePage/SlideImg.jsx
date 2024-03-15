import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function SlideImg() {
  const navigate = useNavigate();

  const handleclickCard = () => {
    navigate(`/restaurants/filter`);
  };
  const array = [
    {
      img: "https://www.ansto.gov.au/sites/default/files/styles/hero_image_2z/public/hero-images/Healthy%20food.jpg?h=10d202d3&itok=yuZT70xV",
    },
    {
      img: "https://as1.ftcdn.net/v2/jpg/02/48/92/96/1000_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg",
    },
    {
      img: "https://befoodnv.be/static/uploads-cms2/home-banner-befood-1800-def.jpg",
    },
  ];
  return (
    <Carousel
      className=" rounded-xl h-96 object-cover "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {array.map((a) => (
        <div className="relative cursor-pointer  " onClick={handleclickCard}>
          <img
            src={a.img}
            alt="image 1"
            className="h-96 w-full aspect-video object-cover"
          />
          <div
            className=" absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  bg-red_primary text-white px-8 py-4 rounded-2xl shadow-xl border border-white text-[30px] 
          md:text-[50px]"
          >
            ค้นหาร้าน ในกรุงเทพและปริมณฑล
          </div>
        </div>
      ))}
    </Carousel>
  );
}
