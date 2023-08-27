import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './tabl.css';




export default function AdminPage() {
    const [adminData, setadminData] = useState({});
    const [studentData, setstudentData] = useState([]);
    const [studentapplied, setstudentapplied] = useState([]);
  

  const fetchAdmin = async () => {
    const email = localStorage.getItem("userEmail");
    await fetch("http://localhost:5000/api/adminpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }).then(async (res) => {
      let response = await res.json();
      await setadminData(response[0]);
      await setstudentData(response[1]);
    });
  };
  useEffect(() => {
    fetchAdmin();
  }, []);
  const fetchpplied = async () => {
    const hno = localStorage.getItem("hostelno");
    await fetch("http://localhost:5000/api/studentapplied", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ hostelno: hno }),
    }).then(async (res) => {
      let response = await res.json();
      await setstudentapplied(response);
      console.log('successf');
    });
  };
  useEffect(() => {
    fetchpplied();
  }, []);
  console.log(adminData,'Admin');
  console.log(studentData,'student');
  console.log(studentapplied,'studenth');

  const handleAccept=()=>
  {
    console.log('succ');

  }
  const handleReject=()=>
  {

  }

  

  return (
    <div className="tab">
      <Table striped bordered hover className="table-success">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Credential</th>
          <th>Detail</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Name</td>
          <td>{adminData.name}</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Email</td>
          <td>{adminData.email}</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>Department</td>
          <td>{adminData.dept}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Hostel No.</td>
          <td>{adminData.hostelno}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Phone Number</td>
          <td>{adminData.phonumber}</td>
        </tr>
        </tbody>
        </Table>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Registration Number</th>
          <th>Name</th>
          <th>Roll no</th>
          <th>Accept</th>
          <th>Reject</th>
          
        </tr>
      </thead>
      <tbody>

      {studentapplied.map(student=>
        <tr>
          <td>{student.regnumber}</td>
          <td>{student.name}</td>
          <td>{student.rollnum}</td>
          <td><button className="btn btn-success btn-sm" onClick={handleAccept} >Accept</button></td>
          <td><button className="btn btn-danger btn-sm" onClick={handleReject}>Reject</button></td>


        </tr>)}

     

      </tbody>
      </Table>





    </div>
  )
}
