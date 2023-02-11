import React, { createContext, useReducer } from 'react';

type RequestContextType = {
    hasError: boolean;
    fetchingStarter: boolean;
    fetchingHTML: boolean;
}

const initialState = {
    fetchingStarter: false,
    fetchingHTML: false,
    hasError: false
}

const requestReducer = (state: any, action: { type: string; payload: boolean; }) => {
    switch (action.type) {
        case 'SET_FETCHING_STARTER':
            return {
                ...state,
                fetchingStarter: action.payload
            }
        case 'SET_FETCHING_HTML':
            return {
                ...state,
                fetchingHTML: action.payload
            }
        case 'SET_HAS_ERROR':
            return {
                ...state,
                hasError: action.payload
            }
        default:
            return state;
    }
}

export const RequestContext = createContext<RequestContextType>(initialState);
export const RequestDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const RequestProvider = ({ children } : { children: JSX.Element[] }) => {
    const [state, dispatch] = useReducer(requestReducer, initialState);

    return (
        <RequestContext.Provider value={state}>
            <RequestDispatchContext.Provider value={dispatch}>
                {children}
            </RequestDispatchContext.Provider>
        </RequestContext.Provider>
    )
}