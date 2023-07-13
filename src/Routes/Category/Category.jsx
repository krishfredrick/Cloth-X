import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contextApi/CategoriesContextAPI";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { CategoryContainer, Title } from './category.styles';
function Category() {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoryMap[category]);
  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);


  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
