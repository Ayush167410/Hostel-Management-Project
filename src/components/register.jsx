import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./reg.css";
const Register = () => {
  return (
    <div>
      <Form className="form">
      <h6>Select your designation</h6>
      <Form.Select aria-label="formSelect" >
          <option value="1">Student</option>
          <option value="2">Admin</option>
          <option value="3">Super Admin</option>
        </Form.Select>
   
        <Form.Group className='input' controlId="formName">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Name"  />
        </Form.Group>
        <Form.Group className='input' contorlId="formEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Email"  />
        </Form.Group>
        <Form.Group className='input' controlId="formPassword">
            <Form.Label>Create Password</Form.Label>
            <Form.Control type="password" placeholder="Create Password" />
        </Form.Group>
        <hr/>
    <Button type="submit" variant="secondary">Submit</Button>
        
       
      </Form>
      
    </div>
  );
};

export default Register;
