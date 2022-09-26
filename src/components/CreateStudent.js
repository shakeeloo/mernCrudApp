import React,{useState} from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

export default function CreateStudent() {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    rollno: ''
  })
  const {name,email,rollno} = formData
  const handleChange = (e)=>{
   setFormData({...formData,[e.target.name] : e.target.value})
  }
  const handleSubmit = (e) =>{
   e.preventDefault()

    console.log(formData)
    
    axios.post('http://localhost:4000/students/create-student', formData)
      .then(res => console.log(res.data));
    setFormData({ name: '', email: '', rollno: '' })
    navigate('/student-list')
  }
  return (
  <div className="form-wrapper m-5">
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="Name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name='name' value={name} onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="Email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name='email' value={email} onChange={handleChange}/>
    </Form.Group>
    <Form.Group controlId="Name">
      <Form.Label>Roll No</Form.Label>
      <Form.Control type="text" name='rollno' value={rollno} onChange={handleChange}/>
    </Form.Group>
    <Button variant="danger" size="lg" block="block" type="submit" className="mt-3">
      Create Student
    </Button>
  </Form>
</div>);
}
