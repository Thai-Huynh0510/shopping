import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
const Cart = () => {
  const [total, setTotal] = useState(0)
  const {cart} = useSelector(state=> state)
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + curr.price, 0))
  },[cart])
  return (
    <div className='flex justify-center'>
      {cart && cart.length ? <div className='min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto'>
        <div className='flex flex-col justify-center items-center p-3'>
          {
            cart.map((cartItem) => <CartItem cartItem={cartItem}/>) 
          }
          
          </div>
          <div className='w-[300px]'>
              <div className='flex flex-col justify-center items-end p-5 space-y-5 mt-14'>
                <h1 className='font-bold text-lg text-red-800'> Cart Summary</h1>
                <p>
                  <span className='text-black font-bold'> Total Items: {cart.length}</span>
                </p>
                <p>
                  <span className='text-black font-bold'> Total Price: {total}</span>
                </p>
                </div>
             </div>
      </div> 
        : 
      <div className='min-h-[80vh] flex flex-col items-center justify-center'> 
      <h1 className='text-black font-bold text-3xl mb-2'>Empty Cart </h1> <Link to ={'/'}> <button className='bg-red-800 text-white border-2 rounded-lg font-bold p-4'> Add Items to Cart </button></Link> </div>}
      </div>
  )
}

export default Cart