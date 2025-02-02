
const data = [
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
  {
    name: "Соевые палочки Jinmofang",
    image: "/images/product.png",
    price: 10.0,
  },
];

const Discounts = () => {
  return (
    <div id="discounts" className="py-6">
      <div className="container py-4">
        <h3 className="text-center text-darkpink font-semibold text-2xl drop-shadow-lg">
          Акции
        </h3>
        <div className="flex flex-wrap gap-5 justify-center w-full mt-4 drop-shadow-lg">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center text-pink font-semibold text-lg w-[20%] p-4 bg-gray shadow-lg rounded-md flex flex-col justify-center items-center"
            >
              <h5 className=" ">{item.name}</h5>
              <img className="w-[80%]" src={item.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discounts;
