import { ExpenseList } from "../ExpenseList/ExpenseList";
import { AddExpenseForm } from "../AddExpenseForm/AddExpenseForm";

export const MainContent = () => {
    return (
        <>
            <h3 className='mt-3'>Expenses</h3>
            <div className='row-mt3'>
                <div className='col-sm'>
                    <ExpenseList />
                </div>
                <h3 className='mt-3'>Add Expense:</h3>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <AddExpenseForm />
                    </div>
                </div>
            </div>
        </>
    )
}
