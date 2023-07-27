import React, { useState } from "react";

function InputComponent(props) {
  return (
    <>
      <input
        type="text"
        value={props.num1}
        onChange={(e) => props.setNum1(e.target.value)}
      />
      <input
        type="text"
        value={props.num2}
        onChange={(e) => props.setNum2(e.target.value)}
      />
    </>
  );
}

export default InputComponent;
