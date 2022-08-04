import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
import Card from '../UI/Card';

import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from './ExpenseChart';



function ExpenseList(props){
    const [filterValue, setFilterValue] = useState('2020');

    const filterHandler = (selected) =>{
        setFilterValue(selected);
    }
    
   
    const filteredItems = props.items.filter( expense =>{
        return expense.date.getFullYear().toString() === filterValue;
    });
    
   
    const itemList = filteredItems.map((element, index)=>{
        return <ExpenseItem  key={index} date = {element.date} name={element.title} price={element.amount}/>
        
    });
    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter selected ={filterValue} onSelectedFilter ={filterHandler}/>
                <ExpenseChart expenses = {filteredItems}/>
                {filteredItems.length === 0? <p>No expenses found</p> : itemList}
            </Card>
        </div>
        
    )
    
}

export default ExpenseList;