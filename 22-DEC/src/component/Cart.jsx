import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cart-reducer'

const Cart = () => {
    const {cartItem } = useSelector((state)=>state.cart.data)
    // const [cartData,setCardData]=useState([])
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     setCardData([cartItem])
    // },
    // [])
    console.log(cartItem,'<<==cartScreen')
  return (
    <div>
        <h1>Cart</h1>
        <div style={{display:'flex', flexWrap:'wrap', }}>
            {cartItem ? (
                Object.keys(cartItem).map((product, index)=>(
                <div style={{height:'300px', width:'300px', border:'1px solid'}} key={cartItem[product].id}>
                    <div>{cartItem[product].id}</div>
                    <div>{cartItem[product].name}</div>
                    <div>{cartItem[product].price}</div>
                    <button onClick={()=>{dispatch(removeFromCart(index))}} >Remove from Cart</button>
                </div>)
            )):<div>No data Found</div>}
        </div>
    </div>
  )
}

export default Cart