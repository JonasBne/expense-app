import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

interface IExpenses {
    id: string,
    title: string,
    amount: number,
    date: Date
}

function ExpensesList(props: any) {
    if (props.filteredExpensesArray.length === 0) {
        return (
            <h2 className={'expenses-list__fallback'}>No expenses found.</h2>
        )
    }

    return (
        <ul className={'expenses-list'}>
            {
                props.filteredExpensesArray.map((expense: IExpenses) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
            }
        </ul>
    );

}

export default ExpensesList;