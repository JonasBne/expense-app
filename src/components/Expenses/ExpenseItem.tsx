import {useState} from "react";

import './ExpenseItem.css';

import Card from '../UI/Card';
import ExpenseDateCalender from "./ExpenseDateCalender";

interface ExpenseItemProp {
    title: string,
    amount: number,
    date: Date
}

function ExpenseItem(props: ExpenseItemProp) {
    const expenseDate = props.date;
    const expenseAmount = props.amount;
    const expenseTitle = props.title;

    return (
        <li>
            <Card className={'expense-item'}>
                <ExpenseDateCalender date={expenseDate}/>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">€{expenseAmount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;