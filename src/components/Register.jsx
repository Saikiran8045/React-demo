import React,{useState} from 'react'
import Fruits from '/Fruits.jsx'

export default function Register() {
  const [fruits,setfruits]=useState([
    {fruitName:"watermelon",fruitPrice:40,fruitDescription:"Good for Health"},
    {fruitName:"apple",fruitPrice:25,fruitDescription:"keep doctors away"},
    {fruitName:"banana",fruitPrice:3,fruitDescription:"Good for calcium"},
    {fruitName:"mango",fruitPrice:20,fruitDescription:"Provides  glucose content"}

  ])
  return (
    <div>
      <h1>Register page</h1>
      <Fruits myFruits={fruits}/>
    </div>
  )
}
