import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import RateStar from "./Rate";
import axios from "axios";
import config from "../api/config.json";

const ModalAddUserData = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratedValue, setRatedValue] = useState(0);
  const [ratedPendingValue, setRatedPendingValue] = useState(0);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const paylod = { star: ratedPendingValue, productId: id, ...values };
    axios.post(config.url+"star", paylod);
    setRatedValue(ratedPendingValue);
    handleCancel();
  };

  const handleRateStar = (value) => {
    showModal();
    setRatedPendingValue(value);
  };

  return (
    <>
      <RateStar onChange={handleRateStar} value={ratedValue} />
      <Modal
        title="User Info"
        centered
        footer={false}
        maskClosable={false}
        // closeIcon={false}
        onCancel={handleCancel}
        open={isModalOpen}
        className=""
      >
        <Form
          name="basic"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <button
              className="bg-red-950 text-white px-4 py-2 mt-6 rounded-md mx-auto w-full"
              type="submit"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default ModalAddUserData;
