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
import HeaderToggleMerchant from "./HeaderToggleMerchant";
import { useMerchant } from "../../feature/auth/contexts/MerchantContext";

export default function HeaderMerchant() {
  const { merchant } = useMerchant();

  const { nameRestaurant } = useRestaurant();
  const [isToggle, setIsToggle] = useState(true);

  console.log(nameRestaurant);
  const [text, setText] = useState("");
  const searchBar = useRef(null);

  console.log("merchant", merchant);
  const handleSearch = (e) => {
    setText(e.target.value);
  };

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
      <div className="flex items-center">
        <Link to={"/"} className="text-xl flex  ">
          <div className="pt-1">Wong</div>
          <MessageIcon className="w-10 h-10 fill-red_primary" />
        </Link>

        <Link
          to={`/merchant/login`}
          className="  rounded-2xl px-2 py-1 ml-2 bg-gray_primary"
        >
          Merchant
        </Link>
      </div>

      <HeaderToggleMerchant />
    </header>
  );
}
