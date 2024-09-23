import React from "react";
import { useState } from "react";

export const Banner = ({ banerName, perantsDatagaToGet }) => {
  const [inputfield, setinputField] = useState("");
  perantsDatagaToGet(inputfield);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setinputField(e?.target?.value)}
        placeholder="Filter by category"
        className="mb-5 p-2 border-2 border-gray-300 text-black"
      />
      <h1 className="h-[40vh] text-center flex justify-center items-center border-2 border-gray-100">
        {banerName}
      </h1>
      <h1 className="h-[40vh] text-center flex justify-center items-center border-2 border-gray-100">
        {inputfield}
      </h1>
    </div>
  );
};
