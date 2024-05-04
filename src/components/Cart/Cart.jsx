import { Box, Divider, Modal, TextField,Grid } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import HomeIcon from "@mui/icons-material/Home";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import {Button, Card} from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor:'black',
    outline:"none",
    boxShadow: 24,
    p:4,
    
  };
const initialValues={
    StreetAddress:"",
    State:"",
    Pincode:"",
    City:""
}

const Cart = () => {
  const createOrderUsingSelectedAddress=()=> {};
  const handleOpenAddressModel=()=>setOpen(true);
  const [open, setOpen] = React.useState(false);
 const {cart,auth} =useSelector(store=>store)
 const dispatch=useDispatch();
  const handleClose = () => setOpen(false);
const validationSchema = Yup.object().shape({
  // StreetAddress: Yup.string().required("Street Address is required"),
  // State: Yup.string().required("State is required"),
  // Pincode: Yup.string().required("Pincode is required"),
  // City: Yup.string().required("City is required")
});


const handleSubmit=(values)=>{
  const data={
    jwt:localStorage.getItem("jwt"),
     order : {
      restaurantId : cart.cart.item[0].food?.restaurant.id,
      deliveryAddress: {
        fullName: auth.user?.fullName,
        streetAddress: values.streetAddress,
        city: values.city,
        state: values.state,
        postalCode: values.pincode,
        country: "India"
      }
  
    
    }
  }
  dispatch(createOrder(data))
  console.log("form value ",values)
};


  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
         
            {cart.cart?.item.map((item)=><CartItem item={item}></CartItem>)}
            <Divider/>
            <div className='billDetails px-5 text-sm'>
            <p className='font-extralight py-5'>Bill Details</p>
            <div className='space-y-3'>
                <div className='flex justify-between text-gray-400'>
                    <p>Item total</p>
                    <p>₹{cart.cart?.total}</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                    <p>Delivery Fee</p>
                    <p>₹21</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                    <p>Platform Fee</p>
                    <p>₹33</p>
                </div>
                <div className='flex justify-between text-gray-400'>
                    <p>GST and Restaurant Charges</p>
                    <p>₹81</p>
                </div>
                <Divider/>
            </div>
            <div className='flex justify-between text-gray-400'>
            <p>Total Pay</p>
            <p>₹{cart.cart?.total+21+33+81}</p>
            </div>
            </div>
           
            </section>
          <Divider orientation='vertical' flexItem/>
          <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
            
            <div>
                <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                <div className='flex gap-5 flex-wrap justify-center'>
                {[1,1,1,1].map((item)=>(<AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>))}
                <Card className='flex gap-5 w-64 p-5'>
        <AddLocationAltOutlinedIcon />
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
           
            <Button variant="outlined" fullWidth onClick={handleOpenAddressModel}>Add</Button>

        </div>

    </Card>
                </div>
            </div>

          </section>
        </main>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field as={TextField} name="streetAddress" label="Street Address" fullWidth variant="outlined" />
                  <ErrorMessage name="streetAddress" component="div" className="error" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="state" label="State" fullWidth variant="outlined" />
                  <ErrorMessage name="state" component="div" className="error" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="city" label="City" fullWidth variant="outlined" />
                  <ErrorMessage name="city" component="div" className="error" />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} name="pincode" label="Pincode" fullWidth variant="outlined" />
                  <ErrorMessage name="pincode" component="div" className="error" />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth variant='contained' type="submit" color="primary">Deliver Here</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Modal>
    </>
  )
}

export default Cart