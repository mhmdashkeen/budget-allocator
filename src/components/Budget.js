import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { budget, currency, expenses,  dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (e) => {
        if(e.target.value > 20000){
            setNewBudget(20000)
        }else{
            if(totalExpenses > e.target.value){
                alert("You cannot reduce the budget value lower than the spending");
            }else{
                setNewBudget(e.target.value);
            }
        }
    }
    useEffect(()=> {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }, [newBudget]) 

    console.log(totalExpenses, "Rem")
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
}
 
export default Budget;