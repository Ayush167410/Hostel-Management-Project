import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';




export default function AdminPage() {
    const [adminData, setadminData] = useState({});
    const [studentData, setstudentData] = useState({});
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

  

  return (
    <div>
      <Table striped bordered hover>
      <thead>
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
          <th>#</th>
          <th>Name</th>
          <th>Roll no</th>
          
        </tr>
      </thead>
      <tbody>
     

      </tbody>
      </Table>





    </div>
  )
}
