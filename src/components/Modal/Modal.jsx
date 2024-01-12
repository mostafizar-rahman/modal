import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft } from "react-icons/fa";
import "./modal.css"

const Modal = ({ setModalIsOpen, url, type, currentId }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentId);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="modal">
            <div className="modal-container">
                <button className="close-btn" onClick={closeModal}>
                    <i><IoMdClose /></i>
                </button>
                {
                    type === "video" ? <iframe src={url}></iframe> : <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                }

                <div className="action-btn">
                    <button className="prev-button" onClick={prevImage}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-button" onClick={nextImage}>
                        <FaChevronLeft />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
