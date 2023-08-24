import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './image.css';
import './login.css';
const LoginStudent = () => {
    return ( 
        <div className='log'>
            <Table striped bordered>
            <thead>
            <td></td>
            <td>Topic</td>
            <td>Components</td>


            </thead>
            <tr>
            <td>1</td>
            <td>Name</td>
            <td></td>

            </tr>
            <tr>
            <td>2</td>
            <td>Image</td>
            <td><img className="image" src={require('./bitsindrilogo.jpg')}/></td>

            </tr>
            <tr>
            <td>3</td>
            <td>Mobile Number</td>
            <td>999</td>

            </tr>
            <tr>
            <td>4</td>
            <td>DOB</td>
            <td></td>

            </tr>
            <tr>
            <td>5</td>
            <td>Aadhar</td>
            <td></td>

            </tr>
            <tr>
            <td>6</td>
            <td>Hostel Form</td>
            <td></td>

            </tr>
            <tr>
            <td>7</td>
            <td>Parents Consent</td>
            <td></td>

            </tr>
            <tr>
            <td>8</td>
            <td>Hostel Fee</td>
            <td></td>

            </tr>
            <tr>
            <td>9</td>
            <td>Electricity Fee</td>
            <td></td>

            </tr>
            <tr>
            <td>10</td>
            <td>NOC</td>
            <td></td>

            </tr>




            </Table>


        </div>

     );
}
 
export default LoginStudent;