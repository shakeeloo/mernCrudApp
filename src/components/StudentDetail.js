import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function StudentDetail(props) {
    const style ={
        padding:"20px"
    }
    const [data,setData] = useState({
        name:'',
        email:'',
        rollno:''
    })
    const params = useParams()
    const {name,email,rollno} = data
      useEffect(()=>{
        axios.get('http://localhost:4000/students/edit-student/' + params.id)
        .then(res => {
           setData(
            {
                name:res.data.name,
                email:res.data.email,
                rollno:res.data.rollno
            }
           )
          })
          .catch((error) => {
            console.log(error);
          })
      },[])
      return (
    <div className="card mt-5 mx-auto" style={{width: "18rem"}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: <span style={style}>{name}</span> </li>
            <li className="list-group-item">Email: <span style={style}>{email}</span></li>
            <li className="list-group-item">Roll #: <span style={style}>{rollno}</span></li>
        </ul>
    </div>
  )
}
