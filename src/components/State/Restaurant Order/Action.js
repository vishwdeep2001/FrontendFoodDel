import { type } from "@testing-library/user-event/dist/type/index.js"
import {api} from "../../config/api.js"
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCESS } from "./ActionType.js"

export const updateOrderStatus = ({orderId, orderStatus,jwt}) =>{
    return async (dispatch) =>{
        try{
            dispatch({type: UPDATE_ORDER_STATUS_REQUEST});

            const response = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{},{
                headers:{
                    Authorization:` Bearer ${jwt}`,

                },
            });
            const updateOrder = response.data;
            console.log("Updated Order", updateOrder);
            dispatch({
                type:UPDATE_ORDER_STATUS_SUCESS,
                payload: updateOrder
            });
        }
        catch(error){
            console.log("catch error" , error);
            dispatch({
                type: UPDATE_ORDER_STATUS_FAILURE,error
            });
        }
    };
};


export const fetchRestaurantOrder = ({restaurantId, orderStatus,jwt}) =>{
    return async (dispatch) =>{
        try{
            dispatch({type: GET_RESTAURANTS_ORDER_REQUEST});

            const response = await api.get(`/api/admin/order/restaurant/${restaurantId}`,{params:{order_status:orderStatus},
                headers:{
                    Authorization:` Bearer ${jwt}`,

                },
            });
            const orders = data;
            console.log("restaurant Order", updateOrder);
            dispatch({
                type:GET_RESTAURANTS_ORDER_SUCESS,
                payload: orders
            });
        }
        catch(error){
            console.log("catch error" , error);
            dispatch({
                type: GET_RESTAURANTS_ORDER_FAILURE,error
            });
        }
    };
};