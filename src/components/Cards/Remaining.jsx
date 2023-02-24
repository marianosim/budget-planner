import { useContext } from "react";
import { AppContext } from "../context/AppContext";


export const Remaining = () => {

    const { remainingBudget } = useContext(AppContext);

    return (
        <div className={`alert alert-${remainingBudget() <= 0 ? 'danger' : 'success'} text-center`}>
            <span className="fw-bold">Remaining: ${remainingBudget()}</span>
        </div>
    )
}
