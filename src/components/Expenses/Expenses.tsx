import './Expenses.css';

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesLIst";
import {useState} from "react";

interface IExpenses {
    id: string,
    title: string,
    amount: number,
    date: Date
}

function Expenses(props: any) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterHandler = (year: string) => {
        setFilteredYear(year);
    };

    const filteredExpenses = props.expenses.filter((expense: IExpenses) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selectedYear={filteredYear} onFilterByYear={filterHandler}/>
            <ExpensesList filteredExpensesArray={filteredExpenses}/>
        </Card>

    )
}

export default Expenses;
