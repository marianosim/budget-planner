import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from 'uuid';

export const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);

    const { name, cost, onInputChange, onResetForm } = useForm({
        name: '',
        cost: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name,
            cost: parseInt(cost)
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
                <div className='col-sm'>
                    <button className='btn btn-primary mt-3' type='submit'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}
