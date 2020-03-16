import React from "react";
import { Modal } from "antd";

const ModalComponent = props => {
  const { title, visible, onOk, onCancel, destroyOnClose, children } = props;
  return (
    <div>
      <Modal
        destroyOnClose={destroyOnClose}
        title={title}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </div>
  );
};
export default ModalComponent;
