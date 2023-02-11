import React, { createContext, useReducer } from 'react';

type DisplayContextType = {
    formContent: string;
}

const initialState = {
    formContent: ""
}

const displayReducer = (state: any, action: { type: string; payload: boolean | string; }) => {
    switch (action.type) {
        case 'SET_FORM_CONTENT':
            return {
                ...state,
                formContent: action.payload
            }
        default:
            return state;
    }
}

export const DisplayContext = createContext<DisplayContextType>(initialState);
export const DisplayDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const DisplayProvider = ({ children } : { children: JSX.Element[] }) => {
    const [state, dispatch] = useReducer(displayReducer, initialState);

    return (
        <DisplayContext.Provider value={state}>
            <DisplayDispatchContext.Provider value={dispatch}>
                {children}
            </DisplayDispatchContext.Provider>
        </DisplayContext.Provider>
    )
}