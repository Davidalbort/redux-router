import React from 'react'
import Cart from '../components/Cart'

const listTitle = {
    name: 'PRODUCT',
    price: 'PRICE',
    quantity: 'QUANTITY',
    subtotal: 'SUBTOTAL',
    
}
const Checkout = () => {
  return (
    <div>
      chekout
        <Cart ListTitle={listTitle}/>
    </div>
  )
}

export {Checkout}
