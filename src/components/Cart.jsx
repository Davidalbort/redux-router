
import React from 'react'

const Cart = ({ListTitle    }) => {
    const handleDeleteToCart = () => {
        console.log('hey i am button delete cart')
    }
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
            <tr>
                <th><button onClick={handleDeleteToCart}>X</button></th>
                <th>hola</th>
                <th>hola</th>
                <th>hola</th>
                <th>hola</th>
                <th>hola</th>
            </tr>
        </tbody>
    </table>
  )
}

export default Cart

