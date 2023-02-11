import React, { createContext, useReducer } from 'react';

type EditorContextType = {
    content: string;
    validYAML: boolean;
}

const initialState = {
    content: "",
    validYAML: true
}

const editorReducer = (state: any, action: { type: string; payload: boolean | string; }) => {
    switch (action.type) {
        case 'SET_CONTENT':
            return {
                ...state,
                content: action.payload
            }
        case 'SET_VALID_YAML':
            return {
                ...state,
                validYAML: action.payload
            }
        default:
            return state;
    }
}

export const EditorContext = createContext<EditorContextType>(initialState);
export const EditorDispatchContext = createContext<React.Dispatch<any> | null>(null);

export const EditorProvider = ({ children } : { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(editorReducer, initialState);

    return (
        <EditorContext.Provider value={state}>
            <EditorDispatchContext.Provider value={dispatch}>
                {children}
            </EditorDispatchContext.Provider>
        </EditorContext.Provider>
    )
}

