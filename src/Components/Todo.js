import React, { useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

export const Todo = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const array = ["awais", "junaid", "hamza"];
  function name() {
    setModalIsOpen(true);
  }
  return (
    <>
      {array.map((item) => {
        return (
          <>
            {" "}
            <div className="card">
              <h2>{item}</h2>
              <div className="actions">
                <button
                  className="btn"
                  onClick={() => {
                    name();
                  }}
                >
                  Delete
                </button>
              </div>
              {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
              {modalIsOpen && <Backdrop setModalIsOpen={setModalIsOpen} />}
            </div>
          </>
        );
      })}
    </>
  );
};
