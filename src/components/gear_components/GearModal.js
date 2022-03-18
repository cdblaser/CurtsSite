import React, { useState } from "react";

const GearModal = ({ slot, src, children }) => {
  const [show, setShow] = useState(false);
  const showOrHide = show ? { display: "block" } : { display: "none" };
  return (
    <div className="modal">
      <img
        src={src}
        alt={slot}
        className="slot"
        onClick={() => {
          setShow(!show);
        }}
      />
      <div style={showOrHide} className="modal-window">
        <div className="modal-header">header</div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          footer
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Close modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default GearModal;
