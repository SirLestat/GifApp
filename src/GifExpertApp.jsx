import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece", "Steins gate "]);

  const onAddCategory = (newCategory) => {
    setCategories((prevCategories) => {
      return [newCategory.toLowerCase(), ...prevCategories];
    });
  };
  return (
    <>
      {/*Titulo */}
      <h1>GifExpertApp</h1>

      {/*Input*/}
      <AddCategory onAddCategory={onAddCategory} />

      {/*Listado de gif */}

      <ol>
        {/* */}
        <button onClick={onAddCategory}>Agregar</button>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/*Gif item */}
    </>
  );
};
