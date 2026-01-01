import React, { useState } from "react";

const TrafficLight = () => {
  // 🔹 Estado principal
  const [color, setColor] = useState("red");

  const changeColor = () => {
    if (color === "red") setColor("yellow");
    else if (color === "yellow") setColor("green");
    else if (color === "green") setColor("red");
    else setColor("red"); 
  };

  return (
    <div className="container">
      <div className="traffic-light">
        <div
          className={`light red ${color === "red" ? "on" : ""}`}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={`light yellow ${color === "yellow" ? "on" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={`light green ${color === "green" ? "on" : ""}`}
          onClick={() => setColor("green")}
        ></div>

        <div
          className={`light purple ${color === "purple" ? "on" : ""}`}
          onClick={() => setColor("purple")}
        ></div>
      </div>

      <div className="buttons">
        <button onClick={changeColor}>
          Cambiar color
        </button>

        <button onClick={() => setColor("purple")}>
          Activar púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;

