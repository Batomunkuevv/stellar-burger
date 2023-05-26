import { getIngredientsRequest } from "../../../utils/burger-api";

export const GET_INGREDEINTS_REQUEST = "GET_INGREDEINTS_REQUEST";
export const GET_INGREDEINTS_FAILED = "GET_INGREDEINTS_FAILED";
export const GET_INGREDEINTS_SUCCESS = "GET_INGREDEINTS_SUCCESS";
export const INCREMENT_INGREDIENT = "INCREMENT_INGREDIENT";
export const DECREMENT_INGREDIENT = "DECREMENT_INGREDIENT";
export const RESET_INGREDIENTS_COUNTERS = "RESET_INGREDIENTS_COUNTERS";

export function getIngredients() {
    return (dispatch) => {
        dispatch({
            type: GET_INGREDEINTS_REQUEST,
        });

        getIngredientsRequest()
            .then((res) => {
                const ingredients = res.data.map(item => {
                    return {
                        ...item,
                        counter: 0
                    }
                })

                dispatch({
                    type: GET_INGREDEINTS_SUCCESS,
                    payload: {
                        ingredients: ingredients,
                    },
                });
            })
            .catch(() => {
                dispatch({
                    type: GET_INGREDEINTS_FAILED,
                });
            });
    };
}
