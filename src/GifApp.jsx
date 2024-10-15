import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["One Piece", "Dr Stone"]);

  const handleAddCategory = () => {
    //const newCategory = "Shigatsu Kimi No Uso";
    setCategories(["Shigatsu Kimi No Uso", ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory setCategories={setCategories} />
      
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
