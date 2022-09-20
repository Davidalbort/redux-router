
import React from 'react'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../actions'



export const Products = () => {
 
  const dispatch = useDispatch()
  const state = useSelector(state => state.products )

  const handleAddToCart = (product) => {
    const cart = {
      id:product.id,
      nombre: product.nombre,
      precio: product.precio,
      banner: product.banner,
      cantidad: 1
    }
    dispatch(actions.addToCart(cart))
  }
  
  return (
    <div>
        <div className="Products-items">
        {state && state.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  )
}
