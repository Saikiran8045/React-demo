import React,{useState} from 'react'
import './stylings/Patient.css'
import axios from 'axios'

export default function Patient() {
    const [patientData,setPatientData]=useState({
        name:"",
        age:" ",
        salary:" ",
        gender:"",
        specialization:""
  })

    function handleSubmit(e){
        e.preventDefault()
        console.log(patientData)
        axios.post(`https://doc-back.onrender.com/doctors`,{
            name:patientData.name,
            age:patientData.age,
            gender:patientData.gender,
            salary:patientData.salary,
            specialization:patientData.specialization})
            .then((res)=>{
                console.log(res)
            })
            console.log(patientData)
        
    }
   
    function handleInputChange(e){
         const {name,value}=e.target
         console.log(name,value)
         setPatientData((prev)=>({
            ...prev,
            [name]:value
         }))   

    }
  return (
    <div className='patient-container'>
        <form onSubmit={handleSubmit}>
      <p>
        <input  type="text" placeholder='Enter the patient name' name='name' onChange={handleInputChange}  />
      </p>
      <p>
        <input  type="number" placeholder='Enter the age' name='age' id='age' onChange={handleInputChange} />
      </p>
      <p>
        <input  type="text" placeholder='Enter the gender' name='gender' id='gender' onChange={handleInputChange}  />
      </p>
      <p>
        <input  type="text"  placeholder='Enter the salary' name='salary' id='salary' onChange={handleInputChange} />
      </p>
      <p>
        <input  type="text" placeholder='Enter the specialization' name='specialization' id='specialization' onChange={handleInputChange} />
      </p>
      
      <button>submit</button>
      </form>
    </div>
  )
}

