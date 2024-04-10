import { TrySharp } from "@mui/icons-material";
import { api } from "../../config/api";
import { type } from "@testing-library/user-event/dist/type";
import { GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS } from "./Reducer";

export const getAllRestaurantsAction =(token)=>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_RESTAURANTS_REQUEST});
        try{
            const {data} =await api.get("/api/restaurants",{
                headers:{
                    Authorization:`Bearer ${token}`,
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

export const getRestaurantById =(reqData)=>{
    return async (dispatch) =>{
        dispatch({type:GET_RESTAURANT_BY_ID_REQUEST});
        try{
            const {data} =await api.get("/api/restaurants/${reqData.restaurantId}",{
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            });
            dispatch({type:GET_RESTAURANT_BY_ID_SUCCESS,payload:response.data});
            console.log("all restaurants",data);
        }
        catch(error){
            console.log("catch error",error)
            dispatch({type:GET_RESTAURANT_BY_ID_FAILURE,payload:error})
        }
    };
};