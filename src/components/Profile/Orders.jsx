import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../State/Order/Action';
import OrderCard from './OrderCard';
import { orderReducer } from '../State/Order/Reducer';
import {order} from '../State/store'
const Orders = () => {
  const { auth,cart,order } = useSelector((store)=>store); // Add a check to ensure state.orders is defined
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    dispatch(getUsersOrders(jwt));
  }, [auth.jwt]);

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
      <div className='space-y-5 w-full lg:w-1/2'>
      {order.orders.map((order) =>
    order.items.map((item) => (
        <OrderCard order={order} item={item} />
    ))
)}
      </div>
    </div>
  );
};

export default Orders;
