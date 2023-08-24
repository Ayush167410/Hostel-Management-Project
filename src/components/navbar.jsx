// import React, { Component } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import Navbar from 'react-bootstrap/Navbar';
// import "./nav.css";
// const Navbar = () => {
//   return (
//     <React.Fragment>
//       <nav className="navbar navbar-expand-sm">
//         <span className="nav-brand" id="brand">
//           BIT Hostels
//         </span>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//         <ul className="navbar-nav ml-auto navin" id="navbarToggleExternalContent" data-bs-theme="dark">
//           <li className="nav-item btn btn-outline-dark but">
//             <a href="#" className="navitem_a">
//               Map
//             </a>
//           </li>
//           <li className="btn btn-outline-dark but">
//             <a href="#" className="navitem_a">
//               Login as Student
//             </a>
//           </li>
//           <li className="btn btn-outline-dark but">
//             <a href="#" className="navitem_a">
//               Login as Admin
//             </a>
//           </li>
//           <li className="btn btn-outline-dark but">
//             <a href="#" className="navitem_a">
//               Login as Super Admin
//             </a>
//           </li>
//           <li className="btn btn-outline-dark but">
//             <a href="#" className="navitem_a">
//               Register
//             </a>
//           </li>
//         </ul>
//         </Navbar.Collapse>
//       </nav>
//     </React.Fragment>
//   );
// };

// export default Navbar;
import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './nav.css';
import Modal from 'react-bootstrap/Modal';
import {map} from './Map.js';
import Intro from './homeIntro.jsx';
import Register from './register.jsx';
import  {Route,Routes} from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import LogStudent from './logstudent';
import LogAdmin from './logadmin';
import LogSuperAdmin from './logsuperadmin';

function NavBar() {




  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
        
      <Container>
      <img className='navimg' src={require("./bitsindrilogo.jpg")}/>
       <Navbar.Brand href="home" id='brand'>BIT Hostels</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav">
            <Nav.Link className='btn btn-outline-dark navitem'><Link className='navitem' to ='/home'>Home</Link></Nav.Link>
            <Nav.Link className='btn btn-outline-dark navitem' ><Link className='navitem' to ='/register'>Register</Link></Nav.Link>
            <Nav.Link className='btn btn-outline-dark navitem' ><Link className='navitem' to ='/logstu'>Login as Student</Link></Nav.Link>
            <Nav.Link className='btn btn-outline-dark navitem' ><Link className='navitem' to ='/logadm'>Login as Admin</Link></Nav.Link>
            <Nav.Link className='btn btn-outline-dark navitem' ><Link className='navitem' to ='/logsupadm'>Login as Super Admin</Link></Nav.Link>
            
           
            
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='content'>
<Routes>
      <Route path="/home" element={<Intro/>}/>
      <Route path="/register" element={<Register/>}/>+
      <Route path="/logstu" element={<LogStudent/>}/>
      <Route path="/logadm" element={<LogAdmin/>}/>
      <Route path="/logsupadm" element={<LogSuperAdmin/>}/>
      </Routes>
      </div>

    </div>

    
  );
}

export default NavBar;


// class NavBar extends Component {
//   state = {  } 

//   map=()=>
//   {
    
//       <div
//       className="modal show"
//       style={{ display: 'block', position: 'initial' }}
//     >
//       <Modal.Dialog>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer>
//       </Modal.Dialog>
//     </div>
    

//   }

//   render() { 
//     return (
//       <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
        
//       <Container>
//       <img className='navimg' src={require("./bitsindrilogo.jpg")}/>
//        <Navbar.Brand href="#home" id='brand'>BIT Hostels</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ml-auto nav">
//             <Nav.Link className='btn btn-outline-dark navitem' onClick={this.map} href="#map">Map</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#register">Register</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#logstu">Login as Student</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#logadm">Logins as Admin</Nav.Link>
//             <Nav.Link className='btn btn-outline-dark navitem' href="#logsupadm">Login as Super Admin</Nav.Link>
            
           
            
          
//           </Nav>
          
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     );
//   }
// }
 
// export default NavBar;