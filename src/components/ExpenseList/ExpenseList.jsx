import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";


export const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    return (
        <>
            <h4 className="d-flex justify-content-between align-items-center ms-3 me-3">
                <p>
                    Name
                </p>
                <p>
                    Date
                </p>
                <p>
                    Category
                </p>
                <p>
                    Cost
                </p>
            </h4>
            <ul className="list-group">
                {expenses.map((expense) => (
                    <ExpenseItem {...expense} key={expense.id} />
                ))}
            </ul>
        </>
    )
}
