import {items} from './items';
import ExpenseList from './Components/Expense/ExpenseList';
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';

function App() {


  const [expenses, setExpenses] = useState(items);
  const updateDataHandler =(expense)=>{
    console.log(expense);
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
    console.log(items);
  }

  
  return (
    <div>
         <NewExpense onUpdateData={updateDataHandler}/>
         <ExpenseList items = {expenses} />
    </div>
   
  );
    
}

export default App;
