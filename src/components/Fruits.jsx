import React from 'react'

export default function Fruits(props) {
    console.log(props)
  return (
    <div>
      {
        props.myFruits.map((item)=>{
           return(
           <div key={item.fruitPrice}>
            <p>Name:{item.fruitName}</p>
            <p>Price:{item.fruitPrice}</p>
                 
                </div>
           )
        })
      }
    </div>
  )
}
