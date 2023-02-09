import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { TiDelete } from 'react-icons/ti';

export const ExpenseItem = (expense) => {
    const { name, cost } = expense;
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {name}
            <div>
                <Badge pill bg='primary' className='mr-3'>
                    ${cost}
                </Badge>
                <TiDelete size='1.5em'></TiDelete>
            </div>
        </li >
    )
};
