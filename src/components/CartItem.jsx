import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../stores/redux'
const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
    const handleRemove = () =>{
        dispatch(removeFromCart(cartItem.id))
    }
  return (
    <div className='items-center flex p-5 justify-between bg-black mt-2 mb-2 rounded-xl '>
        <div className='flex p-3 '>
            <img src={cartItem.image} className='h-28 rounded-lg' alt={cartItem.title}></img>
            <div className='ml-10 self-start space-x-5'>
                <h1 className='text-xl text-white font-bold'>{cartItem.title}</h1>
                <p className='text-white font-extrabold'>{cartItem.price}</p>
            </div>
        </div>
        <div>
        <button className='bg-red-800 text-white border-2 rounded-lg font-bold p-4' onClick={handleRemove}>
      Remove from cart
    </button>
        </div>
    </div>
  )
}

export default CartItem