
import React, { useEffect } from 'react'
import { Filter } from '../components/Filter'
import { Products } from '../components/Products'
import { getProducts } from '../services/utilities/getList'
import { useDispatch } from 'react-redux'
import { actions } from '../actions'


export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts().then(responsive => dispatch(actions.initProducts(responsive)));
   
    
  },[])
  return (
    <>
      <Filter />
      <Products />
    </>
  )
}
