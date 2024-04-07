import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik' // Import Form from Formik
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';
const initialValues={
    email:"",
    password:""
  };


export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit=(values)=>{
    dispatch(loginUser({userData:values,navigate}))
  }
  return (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
    <Typography variant='h5' className='text-center'>
        Login
    </Typography>
    <div > {/* Set background color for the form */}
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
            <Field as={TextField} name="email" label="Email" fullWidth variant="outlined" margin="normal" />
            <Field as={TextField} name="password" label="Password" fullWidth variant="outlined" type="password" margin="normal" />
           
            <Button sx={{mt:2,padding:"1rem"}} fullWidth type='submit' variant='contained'>Login</Button>
        </Form>
    </Formik>
    </div>
    <Typography variant='body2' align='center'>
        Don't have an account?
        <Button size='small' onClick={()=>navigate("/account/register")}>
            Register
        </Button>
    </Typography>
</div>
  )
}
