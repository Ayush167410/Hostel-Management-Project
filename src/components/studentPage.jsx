import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export default function StudentPage() {
  const [studentData, setstudentData] = useState({});

  const fetchStudent = async () => {
    const email = localStorage.getItem("userEmail");
    await fetch("http://localhost:5000/api/studentpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }).then(async (res) => {
      let response = await res.json();
      await setstudentData(response);
    });
  };
  useEffect(() => {
     fetchStudent();
  }, []);
  return(<>
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
          <td>{studentData.name}</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Email</td>
          <td>{studentData.email}</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td>Department</td>
          <td>{studentData.dept}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Hostel No.</td>
          <td>{studentData.hostelno}</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Registration Number</td>
          <td>{studentData.regnumber}</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Roll Number</td>
          <td>{studentData.rollnum}</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Semester</td>
          <td>{studentData.semester}</td>
        </tr>
        <tr>
          <td>8</td>
          <td>DOB</td>
          <td>{studentData.dob}</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Father's Name</td>
          <td>{studentData.fathername}</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Mother's Name</td>
          <td>{studentData.mothername}</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Phone Number</td>
          <td>{studentData.phonumber}</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Gender</td>
          <td>{studentData.gender}</td>
        </tr>
       
       
      </tbody>
    </Table>
   
  </div>
  </>) ;
}
