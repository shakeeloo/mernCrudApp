import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { AiOutlineEdit,AiOutlineEye,AiOutlineDelete } from "react-icons/ai";

const  StudentTableRow = (props)=>{
    const deleteStudent = () => {
        axios.delete('http://localhost:4000/students/delete-student/' + props.obj._id)
        .then((res) => {
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
    }
        return (
            <tr>
                <td>{props.obj.name}</td>
                <td>{props.obj.email}</td>
                <td>{props.obj.rollno}</td>
                <td>
                    <Link className="edit-link" to={"/student-detail/"+ props.obj._id}>
                        <AiOutlineEye style={{fontSize:'1.7rem',cursor:'pointer',marginRight:'20px',color:'#212429'}}/>
                    </Link>
                    <Link className="edit-link" to={"/edit-student/" + props.obj._id}>
                        <AiOutlineEdit style={{fontSize:'1.7rem',cursor:'pointer',marginRight:'20px',color:'#212429'}}/>
                    </Link>
                    <AiOutlineDelete onClick={deleteStudent} style={{fontSize:'1.7rem',cursor:'pointer'}}/>
                   
                </td>
            </tr>
        );
    }
export default StudentTableRow;