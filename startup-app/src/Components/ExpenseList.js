import ExpenseItem from "./ExpenseItem";


function ExpenseList({ items }){
   
    const itemList = items.map((element, index)=>{
        return <ExpenseItem key={index} date = {items[index].date} name={items[index].title} price={items[index].amount}/>
    })
    return (
        <div>
            {itemList}
        </div>
    )
    
}

export default ExpenseList;