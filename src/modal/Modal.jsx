import React, { useState } from "react";
import "./modal.css";
import { AiFillQuestionCircle, AiFillGithub,AiFillLinkedin } from "react-icons/ai"

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <div onClick={toggleModal} className="btn-modal"><AiFillQuestionCircle/></div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 style={{color:"white"}}>Made by Rukiye Aydın</h2>
            <div className="modal-icons">
                <a href="https://github.com/rukiyeaydin" style={{marginInline:"10px", color:"white"}}><AiFillGithub className="github"/></a>
                <a href="https://www.linkedin.com/in/rukiye-ayd%C4%B1n-015743207/" style={{marginInline:"10px", color:"white"}}><AiFillLinkedin className="linkedin"/></a>
            </div>
            <button className="close-modal" onClick={toggleModal}>CLOSE</button>
          </div>
        </div>
      )}
    </>
  );
}