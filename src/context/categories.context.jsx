import { createContext,useEffect,useState } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.jsx";

export const CategoriesContext = createContext({
  categoriesMap : {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

useEffect(()=>{
//   addCollectionAndDocuments('categories',SHOP_DATA)
  const getCategoriesMap = async () =>{
    const categoriesMap = await getCategoriesAndDocuments()
    setCategoriesMap(categoriesMap);
  }
  getCategoriesMap();
 },[])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
};

