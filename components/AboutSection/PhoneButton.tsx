import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Number from "../Number";

const PhoneButton = () => {
  return (
    <motion.div
      className="flex gap-1a justify-center items-center cursor-pointer group transition hover:text-darkpink"
      whileHover="hover"
    >
      <FontAwesomeIcon icon={faPhone} />
      <motion.div
        className="text-nowrap text-lg overflow-hidden"
        variants={{
          hover: { width: "auto" },
        }}
        initial={{ width: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Number className="text-center align-middle text-md">+375 29 129 86 65</Number>
      </motion.div>
    </motion.div>
  );
};

export default PhoneButton;
