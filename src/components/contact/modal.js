import { Modal } from "antd";
import React, { useState, useEffect } from "react";

function ModalContact(props) {
  const [isModalOpen, setIsModalOpen] = useState(props.showModal);

  useEffect(() => {
    setIsModalOpen(props.showModal);
  }, [props.showModal]);

  const handleOk = () => {
    setIsModalOpen(false);
    props.handleClose();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    props.handleClose();
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default ModalContact;
