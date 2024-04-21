import { type } from "@testing-library/user-event/dist/type"
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType"
import {useDispatch } from "react-redux";
import { api } from "../../config/api";
export const createMenuItem = ({menu,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try{
            const {data} =await api.post(`api/admin/food`, menu,{
                headers:{
                    Authorization: `Bearer${jwt}`,
                },
            });
            console.log("created menu",data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS,payload:data});
        }
        catch(error){
            console.log("error", error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE})
        }
    };
};

export const getMenuItemsByRestaurantID = (reqData) =>{
    return async (dispatch) =>{
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_REQUEST});
        try{
            const {data} =await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian} && seasonal={reqData.seasonal}&food_category=${reqData.foodCategory}`, {
                headers:{
                    Authorization: `Bearer${reqData.jwt}`,
                },
            });
            console.log("getmenu items menu",data);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_SUCCESS,payload:data});
        }
        catch(error){
            console.log("error", error);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_FAILURE,payload:error})
        }
    };
};

export const searchMenuItem = ({keyword,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try{
            const {data} =await api.get(`api/food/search?name=${keyword}`,{
                headers:{
                    Authorization: `Bearer${jwt}`,
                },
            });
            console.log("Search item menu",data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS,payload:data});
        }
        catch(error){
            console.log("error", error);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE})
        }
    };
};
// export const getAllIngredientsOfMenuItem = (reqData) =>{
//     return async (dispatch) =>{
//         dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_REQUEST});
//         try{
//             const {data} =await api.post("api/admin/food", menu,{
//                 headers:{
//                     Authorization: `Bearer${jwt}`,
//                 },
//             });
//             console.log("created menu",data);
//             dispatch({type:CREATE_MENU_ITEM_SUCCESS,payloaddata});
//         }
//         catch(error){
//             console.log("error", error);
//             dispatch({type:CREATE_MENU_ITEM_FAILURE})
//         }
//     };
// };

export const updateMenuItemsAvailability = ({foodId,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try{
            const {data} =await api.post(`api/admin/food/${foodId}`, {},{
                headers:{
                    Authorization: `Bearer${jwt}`,
                },
            });
            console.log("created menu",data);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS,payload:data});
        }
        catch(error){
            console.log("error", error);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,payload:error})
        }
    };
};

export const deleteFoodAction = ({foodId,jwt}) =>{
    return async (dispatch) =>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try{
            const {data} =await api.delete(`api/admin/food/${foodId}`, {
                headers:{
                    Authorization: `Bearer${jwt}`,
                },
            });
            console.log("created menu",data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS,payload:foodId});
        }
        catch(error){
            console.log("error", error);
            dispatch({type:DELETE_MENU_ITEM_FAILURE,payload:error});
        }
    };
};