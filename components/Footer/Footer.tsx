import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import Number from "../Number";
import PhoneButton from "../AboutSection/PhoneButton";

const Footer = () => {
  return (
    <footer className="bg-darkgray">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center gap-4 text-lg">
          <div className="">Yum Yum</div>

          <div className="flex justify-center gap-4">
            <a
              target="_blank"
              href={"https://www.instagram.com/yumyum.asianshop/"}
              className="cursor-pointer transition hover:text-darkpink"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              target="_blank"
              href={"https://www.tiktok.com/@asianshopyumyum?_t=ZM-8tV3X4N2f7F"}
              className="cursor-pointer transition hover:text-darkpink"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
        <div className="text-center text-pink mt-2 text-sm">
          &copy; <Number>{new Date().getFullYear()}</Number> ООО ДАБЛ УАЙ. Все
          права защищены.
        </div>
        <div className="text-center text-pink mt-1 text-xs">
          Данный сервис не является интернет-магазином, а используется лишь в
          информационных целях. <br />
          Все актуальные цены уточняйте по номеру телефона, на странице
          инстаграм магазина, а так же в самом магазине Yum Yum
        </div>
      </div>
    </footer>
  );
};

export default Footer;
