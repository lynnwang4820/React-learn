import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props){
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');
    

    const titleHandler =(event) =>{
        setNewTitle(event.target.value);
    }

    const amountHandler = (event) =>{
        setNewAmount(event.target.value);
    }
    
    const dateHandler =(event) =>{
        setNewDate(event.target.value);
    }

    const submitHandler =(event)=>{
        event.preventDefault();

        const expenseData ={
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate  + 'T00:00:00')
        };

        console.log(expenseData);
        props.onSaveData(expenseData);

        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }

 
    return(
        <form onSubmit={submitHandler}>
            <div className ="expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value ={newTitle} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"  value={newAmount} min="0.01" step ="0.01" onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"  value={newDate} min="2019-01010.01" max ="2022-12-31" onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.isCancelEdit}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;