import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { addExpense } from "../../services/firestore";
import { AppContext } from "../context/AppContext";


export const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);


    const { name, cost, category, onInputChange, onResetForm } = useForm({
        name: '',
        cost: '',
        category: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        const expense = {
            name,
            cost: parseInt(cost),
            date: new Date().toISOString().slice(0, 10),
            category,
        };
        addExpense(expense)
            .then(newExpense => {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: newExpense
                })
            })
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        name='name'
                        value={name}
                        onChange={onInputChange}
                    />
                </div>
                <div className='col-sm'>
                    <label htmlFor="cost">Cost:</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        name='cost'
                        value={cost}
                        onChange={onInputChange}
                    />
                </div>
                <div className="col-sm">
                    <label htmlFor="category">Category:</label>
                    <select
                        className="form-select"
                        name="category"
                        value={category}
                        onChange={onInputChange}
                    >
                        <option disabled>Open this select menu</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Bar & Restaurants">Bar & Restaurants</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Services">Services</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Supermarket">Supermarket</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                    </select>
                </div>
                <div className='col-sm'>
                    <button className='btn btn-primary mt-3' type='submit'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}
