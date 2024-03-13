import React from "react";
import { Link } from "react-router-dom";
import {
  LocationIcon,
  MessageIcon,
  SearchIcon,
  DownTriangleSolidIcon,
  BarThreeIcon,
} from "../icons/icon";
import HeaderToggle from "../components/HeaderToggle";
import { useRestaurant } from "../hooks/hooks";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function Header() {
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
     justify-around border-b-2 z-50
    "
    >
      <Link to={"/"} className="flex">
        <div className="text-xl pt-1">Wong</div>

        <MessageIcon className="w-10 h-10 fill-red_primary" />
      </Link>
      <div className="flex gap-5">
        <div>
          <form className="flex">
            <input
              value={text}
              onChange={handleSearch}
              onClick={() => setIsToggle(true)}
              className="rounded-l-lg bg-gray_primary pl-3 w-[200px] focus:outline-none"
              placeholder="ชื่อร้านอาหาร..."
            />
            <div className="bg-red_primary w-10 rounded-r-lg cursor-pointer">
              <button>
                <SearchIcon className="w-6 h-6 text-white bg-red_primary mt-2 ml-2" />
              </button>
            </div>

            {isToggle ? (
              <div
                className={`${
                  text &&
                  nameRestaurant.filter(
                    (item) =>
                      item.category.categoryName.includes(text) ||
                      item.restaurantName.includes(text)
                  ).length != 0
                    ? "absolute top-16 flex flex-col gap-5 bg-white w-1/4 px-8 py-4 rounded-xl shadow-md"
                    : ""
                }`}
              >
                {text
                  ? nameRestaurant
                      .filter(
                        (item) =>
                          item.category.categoryName.includes(text) ||
                          item.restaurantName.includes(text)
                      )

                      .slice(0, 4)
                      .map((item) => (
                        <Link
                          to={`/restaurants/${item.id}`}
                          key={item.id}
                          className="cursor-pointer"
                        >
                          <div className="flex items-center gap-4 pb-3">
                            {/* <LocationIcon className={"w-5 fill-none "} /> */}
                            <img
                              src={item.profileImg}
                              alt=""
                              className="w-[100px] h-[50px] object-cover "
                            />
                            <div className="pl-3 flex flex-col gap-1">
                              <div>{item.restaurantName}</div>
                              <div className="text-gray-400 text-sm">
                                {item.subtitle}
                              </div>
                            </div>
                          </div>
                          <hr />
                        </Link>
                      ))
                  : null}
              </div>
            ) : null}
          </form>
        </div>
      </div>

      <HeaderToggle />
    </header>
  );
}
