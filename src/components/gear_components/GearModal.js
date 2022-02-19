import React, { useState } from "react";

const GearModal = ({ slot, children }) => {
  const [show, setShow] = useState(false);
  const showOrHide = show ? { display: "block" } : { display: "none" };
  return (
    <div className="modal">
      <button
        style={{}}
        onClick={() => {
          setShow(true);
        }}
      >
        open {slot}
      </button>
      <div style={showOrHide} className="example">
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
