import React, { Fragment, useContext } from "react";
// import "./shop.styles.scss";
import { CategoriesContext } from "../../contextApi/CategoriesContextAPI";
import CategoryPreview from "../../Components/category-preview/CategoryPreview";
function CategoriesPreview() {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoryMap).map((title) => {
         const products = categoryMap[title];
        return (
         <CategoryPreview key={title} title={title} products={products}/>
        );
      })}
    </>
  );
}

export default CategoriesPreview;
