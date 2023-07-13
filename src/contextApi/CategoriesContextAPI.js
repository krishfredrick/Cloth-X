
import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../JSON/shop-data';
import { addCollectionAndDoc, getCollectionAndDoc } from '../utils/firebase.utils';

export const CategoriesContext = createContext({
  categoryMap:{},
});

export const  CategoriesProvider = ({children})=>{
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [categoryMap, setCategoryMap] = useState({})
    useEffect(()=>{
    const getCategoryMap = async()=>{
      const catgoryData = await getCollectionAndDoc();
      // console.log(catgoryData);
      setCategoryMap(catgoryData);
    }
    getCategoryMap();
  },[]);

  const value = {categoryMap}

  return ( <CategoriesContext.Provider value={value} > {children} </CategoriesContext.Provider> )
}