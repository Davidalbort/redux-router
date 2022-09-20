
import React from 'react'
import Product from './Product'

const products =[
  {
  id: 1,
  nombre: "LA CEREZA CREATIVA",
  tipo_servicio: "Otros servicios",
  precio: 5103,
  calificacion: 0,
  banner: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/ae4ec5698c09cb6cc4e949214aa4b37b.600x338.png"
},{
  id: 2,
  nombre: "LA CEREZA CREATIVA",
  tipo_servicio: "Otros servicios",
  precio: 5103,
  calificacion: 0,
  banner: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/75375376fc985871994ed6df3a224c0a.600x338.jpg"
},{
  id: 3,
  nombre: "LA CEREZA CREATIVA",
  tipo_servicio: "Otros servicios",
  precio: 5103,
  calificacion: 0,
  banner: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/7235a4d79db4a1d9ea991632e2e5ef76.600x338.jpg"
},{
  id: 4,
  nombre: "LA CEREZA CREATIVA",
  tipo_servicio: "Otros servicios",
  precio: 5103,
  calificacion: 0,
  banner: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/banners_empresas/a32cb59825c41c8d91f79fad328f17d1.600x338.jpg"
},

]

export const Products = () => {
  const handleAddToCart = (product) => {
    console.log(product)
  }
  return (
    <div>
        <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}
