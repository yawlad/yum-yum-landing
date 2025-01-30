import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const PhoneButton = () => {
  return (
    <motion.div
      className="cursor-pointer flex group transition hover:text-darkpink"
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
        телефон
      </motion.div>
    </motion.div>
  );
};

export default PhoneButton;
