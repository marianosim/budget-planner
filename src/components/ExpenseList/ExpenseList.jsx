import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

export const ExpenseList = () => {
    const expenses = [
        {
            id: 1231231,
            name: 'Shopping',
            cost: 50
        },
        {
            id: 1231232,
            name: 'Holiday',
            cost: 300
        },
        {
            id: 1231233,
            name: 'Transportation',
            cost: 60
        },
        {
            id: 1231234,
            name: 'Fuel',
            cost: 25
        }
    ];
    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem {...expense} key={expense.id} />
            ))}
        </ul>
    )
}
