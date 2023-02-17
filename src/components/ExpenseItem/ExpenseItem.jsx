import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export const ExpenseItem = (expense) => {
    const { name, cost, id } = expense;
    
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'REMOVE_EXPENSE',
            payload: id
        });
    }
    
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <Badge pill bg='primary' className='mr-3'>
                    ${cost}
                </Badge>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li >
    )
};
