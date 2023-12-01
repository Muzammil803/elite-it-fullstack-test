import React, { useEffect, useState } from "react";
import { Button, Popover, Table } from "antd";
import RateStar from "../components/Rate";
import axios from "axios";
import config from "../api/config.json";
import Footer from "../components/Footer";
import myImage from '../images/home_image.jpg';

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Product Name",
    dataIndex: "product_name",
  },
  {
    title: "Ratings",
    dataIndex: "rating",
    render: (name, record) => <RateStar value={name} disabled />,
  },
  {
    title: "Actions",
    dataIndex: "product_des",
    render: (name, record) => (
      <Popover style={{ maxWidth: "300px" }} content={name} title="Details:">
        <Button className="bg_theme text-white" type="">
          Details
        </Button>
      </Popover>
    ),
  },
];

const ProductList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(config.url + "star").then((res) => {
      if (Array.isArray(res?.data) && res?.data?.length) {
        let arrangeData = res?.data?.map((obj, index) => {
          return {
            key: index,
            name: obj?.name,
            email: obj?.email,
            product_name: obj?.productData?.title,
            product_des: "$ " + obj?.productData?.price,
            rating: obj?.star,
          }
        });
        setData(arrangeData);
      }
    });
  }, []);

  return (
    <>
      <div className="relative">
        <img
          className="h-[400px] w-full object-cover bg-black opacity-810"
          src={myImage}
          alt="Description of the image"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">LISTING</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor semper nibh, bibendum ultricies elit mollis id.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-8">
        <div className="w-4/5 mx-auto border">
          <div>
            <p className="font-semibold text-2xl m-4">LIST OF PRODUCTS</p>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
      <Footer /></>
  );
};
export default ProductList;
