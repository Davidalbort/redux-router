import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions';
import { getProducts } from '../services/utilities/getList';
const Filter = () => {
  const dispatch = useDispatch();
  const handleToFilter = async (e) => {
    const typeFilter = e.target.value;
    e.target.value=typeFilter;
    console.log(typeFilter);
    const products = await getProducts();
    if(typeFilter==='MinortoMajor'){
      dispatch(actions.priceMinorProducts(products))
    }else if (typeFilter === 'MaJortoMinor'){
      dispatch(actions.priceMajorProducts(products))
    }else if (typeFilter === 'Alphabet'){
      dispatch(actions.sortByAlphabetProducts(products))
    }else{
      dispatch(actions.initProducts(products))
    }
    
  }
  return (
    <form >
      <select id='typeFilter'  onChange={handleToFilter}>
        <option value='ByDefault'>ByDefault</option>
        <option value='Alphabet'>Alphabet</option>
        <option value='MinortoMajor'>minortoMajor</option>
        <option value='MaJortoMinor'>MaJortoMinor</option>
      </select>
    </form>
  )
}

export { Filter }
