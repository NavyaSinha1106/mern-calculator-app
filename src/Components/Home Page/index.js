import "./HomePage.css";
import React, { useState } from "react";
import InputComponent from "../Input Component";

function HomePage(props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const calculateAdd = async (e) => {
    e.preventDefault();

    const data = {
      num1: num1,
      num2: num2,
    };

    fetch("http://localhost:8080/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNum3(data.num3);
      });
  };

  const calculateMinus = async (e) => {
    e.preventDefault();

    const data = {
      num1: num1,
      num2: num2,
    };

    fetch("http://localhost:8080/api/minus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNum3(data.num3);
      });
  };

  const calculateDivide = async (e) => {
    e.preventDefault();

    const data = {
      num1: num1,
      num2: num2,
    };

    fetch("http://localhost:8080/api/divide", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.num3 == null) {
          setNum3("Cannot divide by 0");
        } else {
          setNum3(data.num3);
        }
      });
  };

  const calculateMultiply = async (e) => {
    e.preventDefault();

    const data = {
      num1: num1,
      num2: num2,
    };

    fetch("http://localhost:8080/api/multiply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNum3(data.num3);
      });
  };

  const clearInput = async (e) => {
    setNum1("");
    setNum2("");
    setNum3("");
  };

  return (
    <>
      <h1>MERN Simple Calculator</h1>
      <table className="Calculator">
        <tr>
          <td>
            <InputComponent
              num1={num1}
              num2={num2}
              setNum1={setNum1}
              setNum2={setNum2}
            ></InputComponent>
            <p>Answer is : {num3}</p>
          </td>
          <td>
            <input id="refresh" type="button" onClick={clearInput} value="C" />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="/" onClick={calculateDivide} />
          </td>
          <td>
            <input type="button" value="*" onClick={calculateMultiply} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="-" onClick={calculateMinus} />
          </td>
          <td>
            <input type="button" onClick={calculateAdd} value="+" />
          </td>
        </tr>
      </table>
    </>
  );
}

export default HomePage;
