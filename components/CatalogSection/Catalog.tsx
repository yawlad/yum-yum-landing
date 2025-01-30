"use client";

import { useEffect, useState } from "react";

const data = [
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    group: "Соевые снеки",
    price: 10.0,
  },
];
const groups = [
  "Соевые снеки",
  "Сладости и киcлости",
  "Моти и пирожные",
  "Жевательные штуки",
  "Чипсы",
  "Лапша и крекеры",
];
const Catalog = () => {
  const [currentGroup, setCurrentGroup] = useState<string>("");
  useEffect(() => {
    setCurrentGroup(groups[0]);
  }, []);
  return (
    <div id="catalog" className="py-6">
      <div className="container py-4">
        <h3 className="text-center text-darkpink font-semibold text-2xl drop-shadow-lg">
          Каталог
        </h3>
        <div className="flex justify-between gap-6 mt-8">
          {groups.map((group, index) => (
            <div
              key={index}
              className={`flex-1 text-white p-2 text-lg text-center grow rounded-md cursor-pointer shadow-md flex justify-center items-center transition ${
                group == currentGroup ? "bg-darkpink" : "bg-orange"
              }`}
              onClick={() => {
                setCurrentGroup(group);
              }}
            >
              {group}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-5 justify-center w-full mt-8 drop-shadow-lg">
          {data
            .filter((item) => item.group == currentGroup)
            .map((item, index) => (
              <div
                key={index}
                className="leading-[1] text-center text-pink font-semibold text-lg w-[20%] p-4 bg-gray shadow-lg rounded-md flex flex-col justify-center items-center"
              >
                <h5 className=" ">{item.name}</h5>
                <img className="w-[80%]" src={item.image} />
                <div>Цена: {item.price}р</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
