import React from "react";
import ReactDOM from "react-dom";

const GearModal = ({ show, slot, toggleModal, children }) => {
  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="modal" onClick={toggleModal}>
      <div
        className="modal-window"
        onClick={(e) => {
          e.stopPropagation(); // wow.
        }}
      >
        <div className="modal-header">{slot}</div>
        <div className="modal-content" onClick={toggleModal}>
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={toggleModal}>close</button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default GearModal;
