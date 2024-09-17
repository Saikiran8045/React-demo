import React,{useState} from 'react'

export default function Input() {

    //const[mail,setMail]=useState("")
    //const [password,setPassword]=useState("")
    const [formData,setFormData]=useState({
        email:" ",
        password:" "
    })
    function handleChange(e){
        const {name,value}=e.target
        console.log(name,value)
        //previous is used to access other object

        setFormData((prev)=>({
            //spreading the every object and getting the specific key
            ...prev,
            [name]:value
        }))
        
    
    }
    function handleSubmit(e){
        e.preventDefault()       
        alert("handle submit"+mail)
    }
    //this function helps to save the ebtered the input field data
    function handleMail(e){
        console.log(e.target.value)
        //event always carry the target object from which we get the information
        setMail(e.target.value)
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <p>
        <input type="text" placeholder='Enter your name' id='name' name='mail' onChange={handleChange}/>
        {/* name attribute must carry the variable as the value onChange{handlemail} */}
        </p>
        <p>
             <input type="text" placeholder='Enter your password' id='password' name='password' onChange={handleChange}
             //onChange={(e)=>{setPassword(e.target.value)}}
             />
        </p>
        <button>Submit</button>
        </form> 
    </div>
  )
}
