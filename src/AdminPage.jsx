import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';


export default function AdminPage() {
    const [adminData, setadminData] = useState({});
    const [studentData, setstudentData] = useState({});

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
  console.log(adminData,'Admin');
  console.log(studentData,'student');
  return (
    <div>

    </div>
  )
}
