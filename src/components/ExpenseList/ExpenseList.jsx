import { useContext, useEffect } from "react";
import { getExpenses } from "../../services/firestore";
import { AppContext } from "../context/AppContext";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";


export const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);

    useEffect(() => {
        getExpenses()
            .then(data => {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: data
                })
            })
    }, [dispatch])

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Category</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense, i) => {
                            return <ExpenseItem expense={expense} key={i} />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
