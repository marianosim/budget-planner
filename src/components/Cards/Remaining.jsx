import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const Remaining = () => {

    const { remainingBudget } = useContext(AppContext);

    return (
        <div className={`alert alert-${remainingBudget() <= 0 ? 'danger' : 'success'}`}>
            <span><strong>Remaining:</strong> ${remainingBudget()}</span>
        </div>
    )
}
