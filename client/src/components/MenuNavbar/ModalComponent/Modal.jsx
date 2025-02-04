import "./Modal.css";
import { motion } from "framer-motion";

const Modal = ({ show, children }) => {
  console.log("Modal renderizado:", show);
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
