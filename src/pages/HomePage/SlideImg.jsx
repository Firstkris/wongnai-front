import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function SlideImg() {
  const navigate = useNavigate();

  const handleclickCard = () => {
    navigate(`/restaurants/filter`);
  };
  return (
    <Carousel
      className="rounded-xl h-96 object-cover"
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
      <img
        onClick={handleclickCard}
        src="https://s3-ap-southeast-1.amazonaws.com/wpimage.powermag.kingpower.com/wp-content/uploads/2022/05/30164928/Headbackground118.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        onClick={handleclickCard}
        src="https://www.dasta.or.th/uploads/article/202107/1625972225_a10cd7a5d176826b0b5d.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        onClick={handleclickCard}
        src="https://blog.hungryhub.com/wp-content/uploads/2023/05/%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%97%E0%B8%A2.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
