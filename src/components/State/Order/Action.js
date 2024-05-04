

import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_USERS_NOTIFICATION_FAILURE, GET_USERS_NOTIFICATION_REQUEST, GET_USERS_NOTIFICATION_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from './ActionType'
import { GET_USER_FAILURE, GET_USER_SUCCESS } from '../Authentication/ActionTypes';
import { api } from '../../config/api';

export const createOrder = (reqData) => {
  console.log(reqData);
  return async (dispatch) =>{
    dispatch({type:CREATE_ORDER_REQUEST});
    try{
        const {data} = await api.post('/api/order',reqData.order,{
            headers: {
                Authorization:`Bearer ${reqData.jwt}`,
            },
        });
        console.log("Data",data);
        if(data.payment_url){
            window.location.href = data.payment_url;
        }
        console.log("Created order", data);
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data});
    }
    catch(error){
        console.log("error",error);
        dispatch({type:CREATE_ORDER_FAILURE, payload:error});
    }
  };
};


export const getUsersOrders = (jwt) => {
  return async (dispatch) => {
    // Dispatch action to indicate the start of the request
    dispatch({ type: GET_USERS_ORDERS_REQUEST });

    try {
      // Make an API request to fetch user orders
      const { data } = await api.get(`api/order/user`, {
        headers: {
          Authorization: `Bearer ${jwt}`, // Use JWT for authorization
        },
      });

      // Dispatch action with the fetched data if successful
      dispatch({ type: GET_USERS_ORDERS_SUCCESS, payload: data });
      console.log("Success",data)
    } catch (error) {
      // Dispatch action if an error occurs dursing the request
      dispatch({ type: GET_USERS_ORDERS_FAILURE, payload: error });
    }
  };
};



  export const getUsersNotification = () => {
    return async (dispatch) =>{
      dispatch({type:GET_USERS_NOTIFICATION_REQUEST});
      try{
          const {data} = await api.get('/api/notifications');
         
          console.log("all notifications", data);
          dispatch({type:GET_USERS_NOTIFICATION_SUCCESS,payload:data});
      }
      catch(error){
          console.log("error",error);
          dispatch({type:GET_USERS_NOTIFICATION_FAILURE, payload:error});
      }
    };
  };