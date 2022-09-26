import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';

export default function EditStudent(props) {
  let params = useParams();
  let navigate = useNavigate();
  const [data,setData] = useState({
    name:'',
    email:'',
    rollno:''
  })

  const {name,email,rollno} = data

  useEffect(()=>{
    axios.get('http://localhost:4000/students/edit-student/' + params.id)
      .then(res => {
        setData({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  },[])

  const handleChange = (e) =>{
    setData({...data,[e.target.name] : e.target.value},console.log(data))
  }

  const onSubmit = (e) => {
    e.preventDefault()
   console.log(data,"dataooooo")
    axios.put('http://localhost:4000/students/update-student/' + params.id, data)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    navigate('/student-list')
  }
  //     rollno: this.state.rollno
  return (
  <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' value={name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='email' value={email} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" name='rollno' value={rollno} onChange={handleChange} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }


  