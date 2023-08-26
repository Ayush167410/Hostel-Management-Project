import React, { useEffect, useState } from "react";

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
    {studentData.name}
  </div>
  </>) ;
}
