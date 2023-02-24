import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { TiDelete } from 'react-icons/ti';
import { deleteExpense } from '../../services/firestore';
import { AppContext } from '../context/AppContext';

export const ExpenseItem = ({ expense }) => {
    const { name, cost, id, date, category } = expense;

    const { dispatch } = useContext(AppContext);


    const handleDelete = () => {
        deleteExpense(id)
            .then(() => {
                dispatch({
                    type: 'REMOVE_EXPENSE',
                    payload: id
                })
            })
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{date}</td>
                <td>{category}</td>
                <td>
                    <Badge pill bg='primary' className='mr-3'>
                        ${cost}
                    </Badge>
                    <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
                </td>
            </tr>
        </>
    )
};
