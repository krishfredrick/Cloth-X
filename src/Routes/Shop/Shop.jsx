import React, { useContext } from "react";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../Category-Preview/CategoriesPreview";
import Category from "../Category/Category";

function Shop() {
    return (
      <Routes>
        <Route index element={ <CategoriesPreview/>  } />
        <Route path=":category" element={ <Category/>  } />
      </Routes>
  );
}

export default Shop;
