import { CallToAction, TrySharp } from "@mui/icons-material";
import { api } from "../../config/api";

import {  } from "./Reducer";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENTS_FAILURE, CREATE_EVENTS_REQUEST, CREATE_EVENTS_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENTS_FAILURE, DELETE_EVENTS_REQUEST, DELETE_EVENTS_SUCCESS, DELETE_RESTAURANTS_FAILURE, DELETE_RESTAURANTS_SUCCESS, DELETE_RESTAURANTs_REQUEST, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS } from "./ActionType";

export const getAllRestaurantsAction =(jwt)=>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_RESTAURANTS_REQUEST});

        try{
            const {data} =await api.get("/api/restaurants",{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_ALL_RESTAURANTS_SUCCESS,payload:data});
            console.log("all restaurants",data);
        }
        catch(error){
            console.log("catch error",error)
            dispatch({type:GET_ALL_RESTAURANTS_FAILURE,payload:error})
        }
    };
};

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
        try {
            const { data } = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data });
            console.log("all restaurants", data);
        } catch (error) {
            console.log("catch error", error);
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error });
        }
    };
};

export const createRestaurant =(reqData)=>{
    console.log("token------",reqData.token);
    return async (dispatch) =>{
        dispatch({type:CREATE_RESTAURANT_REQUEST});
        try{
            const {data} = await api.post(`/api/admin/restaurants`,reqData.data,{
                headers:{
                    Authorization:`Bearer ${reqData.token}`,
                },
            });
            dispatch({type:CREATE_RESTAURANT_SUCCESS,payload:data});
            console.log("created restaurant",data);
        }
        catch(error){
            dispatch({type:CREATE_RESTAURANT_FAILURE});
            console.log("error",error);
        }
    };
};

export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const { data } = await api.put(`/api/admin/restaurant/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data });
            console.log("updated restaurant", data);
        } catch (error) {
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error });
            console.log("error", error);
        }
    };
};


export const deleteRestaurant = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANTs_REQUEST });
        try {
            const { data } = await api.delete(`/api/admin/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: DELETE_RESTAURANTS_SUCCESS, payload: restaurantId });
        } catch (error) {
            console.log(error);
            dispatch({ type: DELETE_RESTAURANTS_FAILURE, payload: error });
        }
    };
};
export const updateRestaurantStatus =({ restaurantId, jwt})=>{
    return async (dispatch)=>{
        dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST})
        try{
            const res = await api.put(`/api/admin/restaurant/${restaurantId}/status`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS,payload:res.data});
        }
        catch(error){
            console.log(error);
            dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE,payload:error});
        }
    };
};

export const createEventAction =({ data,jwt,restaurantId})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_EVENTS_REQUEST})
        try{
            const res = await api.post(`/api/admin/events/restaurant/${restaurantId}`,
            data,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_EVENTS_SUCCESS,payload:res.data});
        }
        catch(error){
            console.log(error);
            dispatch({type:CREATE_EVENTS_FAILURE,payload:error});
        }
    };
};

export const getAllEvents =({  jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_EVENTS_REQUEST})
        try{
            const res = await api.get(`/api/events`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_ALL_EVENTS_SUCCESS,payload:res.data});
        }
        catch(error){
            console.log(error);
            dispatch({type:GET_ALL_EVENTS_FAILURE,payload:error});
        }
    };
};

export const deleteEvents =({ eventId, jwt})=>{
    return async (dispatch)=>{
        dispatch({type:DELETE_EVENTS_REQUEST})
        try{
            const res = await api.delete(`/api/admin/events/${eventId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:DELETE_EVENTS_SUCCESS,payload:eventId});
        }
        catch(error){
            console.log(error);
            dispatch({type:DELETE_EVENTS_FAILURE,payload:error});
        }
    };
};

export const getRestaurantsEvents =({ restaurantId, jwt})=>{
    return async (dispatch)=>{
        dispatch({type:GET_ALL_RESTAURANTS_REQUEST})
        try{
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_ALL_RESTAURANTS_SUCCESS,payload:res.data});
        }
        catch(error){
            console.log(error);
            dispatch({type:GET_ALL_RESTAURANTS_FAILURE,payload:error});
        }
    };
};

export const createCategoryAction =({ reqData, jwt})=>{
    return async (dispatch)=>{
        dispatch({type:CREATE_CATEGORY_REQUEST})
        try{
            const res = await api.post(`/api/admin/category`,reqData,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:CREATE_CATEGORY_SUCCESS,payload:res.data});
        }
        catch(error){
            console.log(error);
            dispatch({type:CREATE_CATEGORY_FAILURE,payload:error});
        }
    };
};

export const getRestaurantCategory =({  jwt,restaurantId})=>{
    return async (dispatch)=>{
        dispatch({type:GET_RESTAURANTS_CATEGORY_REQUEST})
        try{
            const res = await api.get(`/api/category/restaurant/${restaurantId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
            });
            dispatch({type:GET_RESTAURANTS_CATEGORY_SUCCESS,payload:res.data});
        }
        catch(error){
            console.log(error);
            dispatch({type:GET_RESTAURANTS_CATEGORY_REQUEST,payload:error});
        }
    };
};

