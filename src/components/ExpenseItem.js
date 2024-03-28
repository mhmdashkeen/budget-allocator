
import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    }

 
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><TiPlus className='bg-success text-white' style={{cursor: "pointer", borderRadius: "50%", fontSize: "26px"}} onClick={()=> increaseAllocation(props.name)} /></td>
        <td><TiMinus className='bg-danger text-white' style={{cursor: "pointer",  borderRadius: "50%", fontSize: "26px"}} onClick={()=> decreaseAllocation(props.name)} /></td>
        <td><TiDelete size='1.5em' style={{cursor: "pointer", borderRadius: "50%", fontSize: "26px"}} onClick={handleDeleteExpense} /></td>
        </tr>
    );
};
export default ExpenseItem;