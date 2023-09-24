import React, { Component } from "react";
import loading from "../loading.gif";

const load = () => {
  return (
  
    <div className="text-center">
      <img
        className="my-4"
        src={loading}
        alt="Loading"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
    
  );
};

export default load;
