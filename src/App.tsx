// import styling
import './App.css';

// import components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

interface IExpense {
    id: string,
    title: string,
    amount: number,
    date: Date
}

const dummyExpensesArray: Object[] = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expensesArray, setExpenses] = useState(dummyExpensesArray);

    const addExpenseHandler = (newExpense: IExpense) => {
        setExpenses((prevExpenses: Object[]): Object[] => {
            return [newExpense,...prevExpenses];
        });
    }


    return (
        <div>
            <NewExpense onAddExpenseData={addExpenseHandler}/>
            <Expenses expenses={expensesArray}/>
        </div>
    );
}

export default App;
