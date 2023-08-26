import React from "react";

export default function StudentPage() {
  const data = async () => {
    const email = await localStorage.getItem("userEmail");
    const response = await fetch("http://localhost:5000/api/studentpage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    const json = await response.json();
    console.log("done");
    return json;
  };
  console.log(data, "dkjf");

  return (
    <div>
      {" "}
      {data !== {} ? (
        Array(data).map((student) => {
          return (
            <div key={student.name}>
              <p>{student.name} </p>
              <p>{student.dept} </p>
              <p>{student.rollnum} </p>
              <p>{student.gender} </p>
              <p>gandu</p>
            </div>
          );
        })
      ) : (
        <div>Empty</div>
      )}{" "}
    </div>
  );
}
