import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik' 
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../State/Authentication/Action';

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER"
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("values:", values)
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div style={{ backgroundColor: 'black', padding: '20px' }}>
      <Typography variant='h5' className='text-center'>
        Register
      </Typography>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          
            <Form>
              <Field
              as={TextField}
                name="fullName"
                label="Full Name"
                fullWidth
                variant="outlined"
                margin="normal"
               
              />
              <Field
              as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
              
              />
              <Field
              as={TextField}
                name="password"
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                margin="normal"
                
              />
             
              
                <Field
                fullWidth
                margin="normal"
                as={Select}
                  labelId="role-simple-select-label"
                  id="demo-simple-select"
                  name="role"
                 // value={role}
                  
                  
                >
                  <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                  <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                </Field>
          
             
              <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type='submit' variant='contained'>Register</Button>
            </Form>
      
        </Formik>
      </div>
      <Typography variant='body2' align='center'>
        If you have an account already!
        <Button size='small' onClick={() => navigate("/account/login")}>
          Login
        </Button>
      </Typography>
    </div>
  )
}
