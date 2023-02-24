import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                expenses: action.payload
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'REMOVE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        case 'EDIT_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state;
    }
}



const initialState = {
    budget: 2000,
    expenses: [],

};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = () => {
        return state.expenses.reduce((acc, item) => acc += item.cost, 0)
    }

    const remainingBudget = () => {
        return state.budget - totalExpenses()
    }


    return (<AppContext.Provider value={{
        state,
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
        totalExpenses,
        remainingBudget
    }}>
        {children}
    </AppContext.Provider>)
}