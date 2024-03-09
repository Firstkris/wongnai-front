import React from "react";
import { Link } from "react-router-dom";
import {
  LocationIcon,
  MessageIcon,
  SearchIcon,
  DownTriangleSolidIcon,
} from "../../icons/icon";
import { useRestaurant } from "../../hooks/hooks";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import HeaderToggle from "../../components/HeaderToggle";

export default function HeaderMerchant() {
  const { nameRestaurant } = useRestaurant();
  const [isToggle, setIsToggle] = useState(true);

  console.log(nameRestaurant);
  const [text, setText] = useState("");
  const searchBar = useRef(null);

  const handleSearch = (e) => {
    setText(e.target.value);
  };
  // 'adsf'.includes

  useEffect(() => {
    if (isToggle) {
      const handleClickOutSide = (e) => {
        if (searchBar.current && !searchBar.current.contains(e.target))
          setIsToggle(false);
      };
      document.addEventListener("mouseup", handleClickOutSide);
      return () => document.removeEventListener("mouseup", handleClickOutSide);
    }
  }, [isToggle]);

  return (
    <header
      ref={searchBar}
      className="bg-white py-4 flex 
     justify-around border-b-2
    "
    >
      <Link to={"/"} className="flex">
        <div className="text-xl pt-1">Wong</div>

        <MessageIcon className="w-10 h-10 fill-red_primary" />
      </Link>

      {/* <div className="absolute top-14 ml-12 flex flex-col gap-2  bg-red-500">
        {text
          ? nameRestaurant
              .filter(
                (item) =>
                  item.category.categoryName.includes(text) ||
                  item.restaurantName.includes(text)
              )
              .slice(0, 6)
              .map((item) => (
                <Link to={`/restaurants/${item.id}`} key={item.id}>
                  <div className="flex gap-6">
                    <img
                      src={item.profileImg}
                      alt=""
                      className="w-[50px] h-[50px]"
                    />
                    <div>
                      <div>{item.restaurantName}</div>
                      <div>{item.subtitle}</div>
                    </div>
                  </div>
                </Link>
              ))
          : null}
      </div> */}
      <HeaderToggle />
    </header>
  );
}
