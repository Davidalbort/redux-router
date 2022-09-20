import React, {useState,useEffect} from "react";

const useLocalStorge = (itemName,initialValue) => {
    const [item, setItem]=useState(initialValue);
    const [error, setError]=useState(false);
    const [loading,setLoading]=useState(true);
    
    useEffect(() =>{
      setTimeout(() =>{
        try{
          const localStorageItem = localStorage.getItem(itemName);

          let parsedItem;
          
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            parsedItem=initialValue;
          }else{
            parsedItem= JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch(error){
          setError(error)
        }
      },1000)
    })
 
    const addToCart = (product) => {
      if(item){
        const carts = item.map(cart => {
          if(cart.id === product.id){
            return{
              ...cart,
              cantidad: cart.cantidad+1
            }
          }else{
            return{
              ...cart,product
            }
          }
        })
        saveItem(carts);
      }else(
        saveItem(product)
      )
    }
  
  const saveItem = (newitem) =>{
    try{
      const stringifieditem = JSON.stringify(newitem);
      localStorage.setItem(itemName,stringifieditem);
      setItem(newitem);
    }catch(error){
      setError(error);
    }
  
  }
  return {item,saveItem,loading,error,addToCart}
}

export {useLocalStorge};