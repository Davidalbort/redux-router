import axios from 'axios';
const baseUrl = "https://8933-181-233-90-124.ngrok.io/list"

const getProducts = async() => {
  const products = await axios.get(baseUrl)
  console.log(products.data.data)
  return products.data.data;
}

export {getProducts}
