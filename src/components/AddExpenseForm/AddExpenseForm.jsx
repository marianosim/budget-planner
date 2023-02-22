import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

export const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);

    const { name, cost, category, onInputChange, onResetForm } = useForm({
        name: '',
        cost: '',
        category: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost),
            date: new Date(),
            category
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
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
                        class="form-select"
                        name="category"
                        value={category}
                        onChange={onInputChange}
                    >
                        <option selected disabled>Open this select menu</option>
                        <option value="shopping">Shopping</option>
                        <option value="bar & restaurants">Bar & Restaurants</option>
                        <option value="transportation">Transportation</option>
                        <option value="services">Services</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="supermarket">Supermarket</option>
                        <option value="miscellaneous">Miscellaneous</option>
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
