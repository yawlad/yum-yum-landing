
const Header = () => {
  return (
    <header className="bg-darkgray">
      <div className="container text-darkpink flex justify-between items-center py-4 ">
        <img src={"/images/logo.svg"} alt="" className="w-28"/>
        <nav className="flex gap-10">
          <a className="text-xl font-semibold" href="#discounts">
            Акции
          </a>
          <a className="text-xl font-semibold" href="#catalog">
            Каталог
          </a>
          <a className="text-xl font-semibold" href="#about">
            О нас
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
