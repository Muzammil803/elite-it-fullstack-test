import React from "react";

function Footer(){
    return(
        <>
         <div id="footer" className="Footer h-full flex justify-evenly pt-14">
        <div style={{ marginLeft: "-80px" }}>
          <h1 className="font-bold text-white text-4xl mb-10">Subscribe Our Email</h1>
          <input type="email" placeholder="Email Address" className="bg-blue-600 w-full px-6 h-[40px]" />
          <button className="bg-red-600 font-bold text-white w-full text-center mt-6 h-[40px]">Subscribe Now</button>
        </div>

        <div className="mx-40px">
          <h1 className="font-bold text-white text-xl mb-8">Locum Tenens</h1>
          <ul>
            <li className="text-white">What is Locum Tenens?</li>
            <li className="text-white">Why Work Locum Tenens?</li>
            <li className="text-white">Work With Imperial Locum!</li>
          </ul>
          <ul className="mt-4">
            <li className="text-white underline mb-2">Privacy</li>
            <li className="text-white underline mb-10">Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-white text-xl mb-6">About Imperial Locum</h1>
          <ul>
            <li className="text-white mb-2">Our Story</li>
            <li className="text-white mb-10">Our People</li>
          </ul>
        </div>


      </div>

      <div id="copR"><h1 className="text-white text-center">@ 2023 imperial Locum.All.Right.Reserved,</h1></div>
        </>
    )
};

export default Footer;