import React,{useState,useEffect} from "react";
import Cards from "../components/Cards";
import config from "../api/config.json";
import axios from "axios"
const Products = () => {
  const [productList, setProductList] = useState(false);

  useEffect(()=>{
    axios.get(config.url)
    .then((res)=>{
     setProductList(res.data)
    })
  },[])
  return (
    <section className="w-full">
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
            {productList&& productList.map((data,key)=><Cards data={data} key={key}/>)}
        </div>
      </div>
    </section>
  );
};

export default Products;
