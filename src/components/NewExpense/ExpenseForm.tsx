import './ExpenseForm.css';
import React, {ChangeEvent, useState} from "react";


function ExpenseForm(props: any) {
    const [enteredTitle, setEnteredTitle] = useState(''); // initial state is an empty string because the form is empty by default
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // reference to declaring type of event (https://stackoverflow.com/questions/42081549/typescript-react-event-types)
    // declare type of value https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget
    const titleChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setEnteredTitle(ev.target.value);
    };

    const amountChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setEnteredAmount(ev.target.value);
    };

    const dateChangeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
        setEnteredDate(ev.target.value);
    };

    const submitHandler = (ev: ChangeEvent<HTMLFormElement>) => {
        ev.preventDefault();

        console.log('click')
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        // reset the value
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

        props.formState(false);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type='text'
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            type='number'
                            min='0.01'
                            step='0.01'
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input
                            type='date'
                            min='2019-01-01'
                            max='2022-12-31'
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className={'new-expense__actions'}>
                    <button type={'button'} onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;