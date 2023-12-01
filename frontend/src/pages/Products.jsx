import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import config from "../api/config.json";
import axios from "axios"
import myImage from '../images/home_image.jpg';
import Footer from "../components/Footer";

const Products = () => {
  const [productList, setProductList] = useState(false);

  useEffect(() => {
    axios.get(config.url)
      .then((res) => {
        setProductList(res.data)
      })
  }, [])
  return (
    <>
      {/* <Footer /> */}
      <section className="w-full">
        <div className="relative">
          <img
            className="h-[400px] w-full object-cover  bg-black opacity-810"
            src={myImage}
            alt="Description of the image"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div >
              <h1 className="text-4xl font-bold mb-6">Solutions that Inspire, <br /> Products that Deliver</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor semper nibh, bibendum ultricies elit mollis id.
              </p>
            </div>
          </div>
        </div>



        <div className="w-4/5 mx-auto mt-10">
          <div className="mx-auto text-center text-3xl text-slate-900 font-semibold">
            <p className="">View Our Products</p>
          </div>
          <div className="mt-8 mx-auto w-4/5 text-center">
            <p>
              Lorem Ipsum has been the industry's standard the dummy text ever
              Lorem Ipsum has been the industry's standard. dummy text ever{" "}
            </p>
          </div>
          <div className="mt-8 mx-auto  flex justify-center space-x-6">
            {productList && productList.map((data, key) => <Cards data={data} key={key} />)}
          </div>
        </div>
      </section>
    <div className="mt-10">
    <Footer /> 
    </div>
    </>
  );
};

export default Products;
