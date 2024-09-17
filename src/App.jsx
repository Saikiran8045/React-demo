import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import List from './List';
import Input from './Input';
import DrawerAppBar from './Navbar';
import Cards from './Cards';
import Home from './components/Home';
import Register from './components/Register';
import Contact from './components/Contact';
import Login from './components/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Patient from './components/Patient';

//import Button from '@mui/material/Button';

// function App() {
  

//   return (
//    <div>
//     <p>Hello World</p>
//     <p>LIKHITH</p>
//    </div>
//   )
// }export default App


// creating through class components
// class App extends React.Component {
//   render() {
//     return(
//       <p>hello world welcome</p>
//     )
    
//   }
// }
// export default App

// function App(){
//   const[name,setName]=useState("likhith")
//   const[student,setStudent]=useState({id:1,name:"likhith"})  //object
//   const[number,setNumber]=useState([1,2,3,4,5,6,7,8])   //array
//   return(
//     <div>
//       {console.log("good morning")}
//       <h1>Name is: {name} </h1>
//       <h1>student details is {student.id}</h1> 
//        {/* here in the above and below we are accessing data through objects*/ }
//       <h1>student name is {student.name}</h1>
//       <p>accessingarray {number[3]}</p>
//       <p>accesing array{number[2]}</p>
//       <p>accesing array{number} <b>here accessing array values directly it will print in string format it is not correct</b></p> {/here accessing array values directly it will print in string format/}
      

//       {
//         number.map((item)=>{

//           return <span>{item} </span>
//         })
//       }
//     </div>
//   )
// }
const  App = ()=>{
  

  return (
   // <div>
//<Button variant="contained">Hello world</Button>
   // </div>
    //  <div>
    //  <Navbar bg="primary" expand="lg" className="bg-body-tertiary">
    //    <Container>
    //      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //      <Navbar.Collapse id="basic-navbar-nav">
    //        <Nav className="me-auto">
    //          <Nav.Link href="#home">Home</Nav.Link>
    //       <Nav.Link href="#link">Link</Nav.Link>
    //          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //            <NavDropdown.Item href="#action/3.2">
    //              Another action
    //            </NavDropdown.Item>
    //            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //            <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //              Separated link
    //            </NavDropdown.Item>
    //          </NavDropdown>
    //        </Nav>
    //      </Navbar.Collapse>
    //    </Container>
    //  </Navbar>
    //  <Card style={{ width: '18rem' }}>
    //    <Card.Img variant="top" src="holder.js/100px180" />
    //    <Card.Body>
    //      <Card.Title>Card Title</Card.Title>
    //      <Card.Text>
    //        Some quick example text to build on the card title and make up the
    //        bulk of the card's content.
    //      </Card.Text>
    //      <Button variant="primary">Go somewhere</Button>
    //    </Card.Body>
    //  </Card>
    
    //  </div>
    <div>
      <BrowserRouter>
          <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/patient' element={<Patient/>}/>
        </Routes>

      </BrowserRouter>
      
      
  
      
      {/* <DrawerAppBar/>
      <Input/> 
      <Home/>
      <Register/>
      <Login/>
      <Contact/>

      <Cards/> */}
      
    </div>
     )
  }
export  default App