import React from 'react'
import { DirectoryContainer } from './Directory.styles';
import DirectoryItem from '../Directory-item/DirectoryItem';



function Directory({categories }) {
  console.log(categories);
  return (
    <DirectoryContainer>
      {categories.map((product) => {
        // console.log(category.title);
        // console.log(category);
        return <DirectoryItem key={product.id} category={product} />
    })}
    </DirectoryContainer>
  );
}

export default Directory
