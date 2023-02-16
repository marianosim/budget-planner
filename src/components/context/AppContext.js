import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        {id:1, name: 'shopping', cost: 40},
        {id:2, name: 'holiday', cost: 300},
        {id:3, name: 'Car service', cost: 50}
    ],

};

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>
        {children}
    </AppContext.Provider>)
}