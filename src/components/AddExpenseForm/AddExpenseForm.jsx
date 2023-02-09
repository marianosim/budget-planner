import React from 'react'

export const AddExpenseForm = () => {
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name:</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        name='name'></input>
                </div>
                <div className='col-sm'>
                    <label for="cost">Add Expense:</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        name='cost'></input>
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
