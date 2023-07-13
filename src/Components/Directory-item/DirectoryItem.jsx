import React from 'react'
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './Directory.style'
import { useNavigate } from 'react-router-dom';

function DirectoryItem({category}) {
  const{title, imageUrl, route} = category;
  const navigate = useNavigate();
  const onNavigateHandler =()=>navigate(route) 
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage style={{background: `url(${imageUrl})` }} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem
