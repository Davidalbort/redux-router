
import React from 'react'
import {  useSelector } from 'react-redux'



const Cart = ({ListTitle    }) => {


    const handleDeleteToCart = () => {
        console.log('hey i am button delete cart')
    }

    const state = useSelector(state => state.carts);

    
  return (
    <table>
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th>{ListTitle.name}</th>
                <th>{ListTitle.price}</th>
                <th>{ListTitle.quantity}</th>
                <th>{ListTitle.subtotal}</th>
            </tr>
        </thead>
        <tbody>
            {state && state.map(cart => (
                <tr key={cart.id}>
                    <th><button onClick={handleDeleteToCart}>X</button></th>
                    <th></th>
                    <th>{cart.nombre}</th>
                    <th>{cart.precio}</th>
                    <th>{cart.cantidad}</th>
                    <th>{cart.precio*cart.cantidad}</th>
                </tr>

            ))}
        </tbody>
    </table>
  )
}

export default Cart

