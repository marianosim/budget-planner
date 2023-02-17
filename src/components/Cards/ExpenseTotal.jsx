import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const ExpenseTotal = () => {

    const { totalExpenses, budget } = useContext(AppContext);

    return (
        <div className={`alert alert-${totalExpenses() >= budget ? 'danger' : 'primary'}`}>
            <span>Spent so far: ${totalExpenses()}</span>
        </div>
    )
}
