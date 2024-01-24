import React, { useReducer, createContext, useContext, ReactNode } from "react";


// Define a type for your state
type AppStateType = {
    url: string;
    // Initialize other properties as needed
};

// Define the action type
type ActionType = {
    type: string; // Modify this according to your actual actions
    // Add other action properties as needed
};

// Define the initial state function
const initialState = (): AppStateType => ({
    url: "http://biubiu-3fb0e2105d16.herokuapp.com/",
    // token: null,
    // name: null,
});

// Define the reducer
const reducer = (state: AppStateType, action: ActionType) => {
    switch (action.type) {
        // case "signup":
        //     fetch(state.url + "/users/", {
        //         method: "post",
        //         headers: {
        //             "Content - Type": "application/json"
        //         },
        //         body: JSON.stringify(action.payload)
        //     })
        //     .then(response => response.json())
        //     .then(user => {
        //         return {
        //             ...state,
        //             token: user.token
        //             name: user.name
        //         }
        //     })
        //     case "login":
        //         fetch(state.url + "/login/", {
        //             method: "post",
        //             headers: {
        //                 "Content - Type": "application/json"
        //             },
        //             body: JSON.stringify(action.payload)
        //         })
        //         .then(response => response.json())
        //         .then(user => {
        //             return {
        //                 ...state,
        //                 token: user.token,
        //                 name: user.name
        //             }
        //         })
        default:
            return state;
    }
};

// Create the context with the initial state
const AppContext = createContext<{
    state: AppStateType;
    dispatch: React.Dispatch<ActionType>;
} | null>(null);

// Define the props for the AppState component
type AppStateProps = {
    children: ReactNode;
};

// Create the context provider component
export const AppState: React.FC<AppStateProps> = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState());

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};

// Create a custom hook to use the context
export const useAppState = () => {
    const context = useContext(AppContext);
};
