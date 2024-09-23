"use client";
import React from "react";
import { Banner } from "./Banner";
import { useState } from "react";

export const AboutC = () => {
  const [banerName, setBannerName] = useState("This is Banner");
  const [childToGetData, setchildToGetData] = useState("");
  const perantsDatagaToGet = (data) => {
    setchildToGetData(data);
  };
  return (
    <div>
      <Banner perantsDatagaToGet={perantsDatagaToGet} banerName={banerName} />
      <h1 className="py-3 text-center bg-yellow-700">perantes</h1>
      <div className="flex gap-5 py-5 justify-center">
        <button
          onClick={() => setBannerName("first banner")}
          className="bg-blue-700 text-white p-4"
        >
          first btn
        </button>
        <button
          onClick={() => setBannerName("2nd banner")}
          className="bg-blue-700 text-white p-4"
        >
          Secand btn
        </button>
      </div>
      <h1 className="h-[40vh] text-center flex justify-center items-center border-2 border-gray-100">
        parents: {childToGetData}
      </h1>
    </div>
  );
};
