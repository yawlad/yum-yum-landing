"use client";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
import PhoneButton from "./PhoneButton";

const About = () => {
  return (
    <div id="about" className="py-6">
      <div className="container py-4">
        <h3 className="text-center text-darkpink font-semibold text-2xl drop-shadow-lg">
          О нас
        </h3>
        <div className="flex gap-10 justify-center mt-6">
          <div className="w-[30%] text-center text-pink font-semibold text-lg p-8 bg-gray shadow-lg rounded-md flex flex-col items-center gap-4">
            <h5>YUM YUM</h5>
            <div className="bg-about grow bg-cover bg-no-repeat w-[80%] rounded-md"></div>
            <div className="w-full flex justify-center gap-4">
              <Link
                target="_blank"
                href={"https://www.instagram.com/yumyum.asianshop/"}
                className="cursor-pointer transition hover:text-darkpink"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.tiktok.com/@asianshopyumyum?_t=ZM-8tV3X4N2f7F"
                }
                className="cursor-pointer transition hover:text-darkpink"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
              <PhoneButton />
            </div>
          </div>
          <div className="w-fit text-center text-pink font-semibold text-lg p-8 bg-gray shadow-lg rounded-md flex flex-col justify-center items-center gap-4">
            <h5>Где мы находимся</h5>
            <div>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad0531a51b65de87c5e9af2399d990d3abaa8803788c378438311c105482266c6&amp;source=constructor"
                className="w-[400px] h-[400px]"
              ></iframe>
            </div>
            <div>Прямо по направлению от главного входа</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
