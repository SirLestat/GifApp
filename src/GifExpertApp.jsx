import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one piece"]);

  console.log(categories);
  return (
    <>
      {/*Titulo */}
      <h1>GifExpertApp</h1>

      {/*Listado de gif */}

      <ol>
        <li>a</li>
        <li>b</li>
      </ol>

      {/*Gif item */}
    </>
  );
};
