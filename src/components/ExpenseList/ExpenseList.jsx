import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";


export const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem {...expense} key={expense.id} />
            ))}
        </ul>
    )
}
