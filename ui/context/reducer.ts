import { Dispatch } from "react";

type AuthAction =
    | { type: "SET_AUTH_TRUE" }
    | { type: "SET_AUTH_FALSE" };

export const authReducer = (state: any, action: AuthAction): any => {

    switch (action.type) {
        case "SET_AUTH_FALSE": //We can only set to false
            return { ...state, isAuth: false };
        case "SET_AUTH_TRUE": //We can only set to false
            return { ...state, isAuth: true };
        default:
            return state;
    }
}

