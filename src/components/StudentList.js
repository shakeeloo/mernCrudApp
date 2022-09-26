import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow.js';

const StudentList = () => {
  const [students,setStudents] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/students/')
    .then(res => {
      setStudents(res.data);
    })
    .catch((error) => {
      console.log("not getting data",error);
    })
  },[students])

  // const DataTable = () => {
  //   console.log(students,"studentslIst")
  //   return students.map((res, i) => {
  //     return <StudentTableRow obj={res} key={i} />;
  //   });
  // }
  return (
  <div className="table-wrapper m-5">
  <Table bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Roll No</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    })}
    </tbody>
  </Table>
</div>);
}

export default StudentList;
