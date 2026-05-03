import { useState } from "react";
import Cardm from "./Cardm";

const initialColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "black",
  "white",
];

function List() {
  const [colorList, setColorList] = useState(initialColors);

  const removeColor = (colorToRemove) => {
    setColorList((prevColors) =>
      prevColors.filter((color) => color !== colorToRemove)
    );
  };

  const addRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setColorList((prevColors) => [...prevColors, randomColor]);
  };

  const colorItems = colorList.map((color, index) => (
    <Cardm key={index} color={color} onRemove={removeColor} />
  ));

  return (
    <>
      <button onClick={addRandomColor}>Add Random Color</button>
      {colorItems.length > 0 ? (
        colorItems
      ) : (
        <p>No colors available</p>
      )}
    </>
  );
}

export default List;