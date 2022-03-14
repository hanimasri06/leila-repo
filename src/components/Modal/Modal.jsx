import React from "react";
import { useGlobalContext } from "../../context";
import "./modal.css";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  const { isModalOpen, closeModal, info } = useGlobalContext();
  const { name, tel, email } = info;
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>{name}</h3>
        <a href={`mailto:${email}?body=ana ${name} ishtaktou ilayki aydan`}>
          {email}
        </a>
        <a href={`tel:${tel}`}>{tel}</a>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
