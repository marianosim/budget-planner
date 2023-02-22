import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const ExpenseTotal = () => {

    const { totalExpenses, budget } = useContext(AppContext);

    return (
        <div className={`alert alert-${totalExpenses() >= budget ? 'danger' : 'primary'}`}>
            <span><strong>Spent so far:</strong> ${totalExpenses()}</span>
        </div>
    )
}
