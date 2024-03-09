import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../stores/redux'
const SingleProduct = ({product}) => {
  const dispatch = useDispatch()
  const {cart} = useSelector(state => state)
  const handleAdd = () => {
    dispatch(addToCart(product))
  }
  const handleRemove = () =>{
    dispatch(removeFromCart(product.id))
  }
  return (
    <div>
      <div className='group flex flex-col items-center border-2 border-red-300 gap-3 p-4 h-{360px} mt-10 ml-5 rounded-xl' key={product.id}>
    <div className='h-[180px]'>
      <img src = {product?.image} alt = {product.title} className='object-cover h-full w-full'>
      </img>
    </div>
    <div className='text-black w-40 truncate mt-3 font-bold text-md'>
      {product.title}
    </div>
    <div className='text-black font-semibold'>
      {product.price}$
    </div>
    <div className='flex items-center justify-center w-full mt-5'>
    <button className='bg-red-800 text-white border-2 rounded-lg font-bold p-4' onClick={cart.some(item => item.id === product.id)? handleRemove: handleAdd}>
      {
        cart.some(item => item.id === product.id) ? 'Remove from cart' :'Add to cart'
      }
    </button>
    </div>
      </div>
    </div>
  )
}

export default SingleProduct