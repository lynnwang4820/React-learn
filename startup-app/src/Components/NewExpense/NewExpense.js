import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';

function NewExpense (props){
    
    const [isEdit, setEdit] = useState(false);

    const editHandler = ()=>{
        setEdit(true);
    }
    
    const saveDataHandler =(enteredData) =>{
        const expenseData ={
            id: Math.random().toString(),
            ...enteredData
        };
        props.onUpdateData(expenseData);
        setEdit(false);
    }

    const cancelHandler = () =>{
        setEdit(false);
    }

    return (
        <div className="new-expense">
            {!isEdit ?<button onClick ={editHandler}>Add New Expense</button> : <ExpenseForm onSaveData={saveDataHandler} isCancelEdit = {cancelHandler} />} 
        </div>
    );
}

export default NewExpense;