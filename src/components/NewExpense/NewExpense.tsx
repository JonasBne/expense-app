import './NewExpense.css';

// import components
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


function NewExpense(props: any) {
    function saveExpenseDataHandler (enteredExpenseData: Object) {
        const expenseData = {
            id: Math.trunc(Math.random()*100+1).toString(),
            ...enteredExpenseData
        };

        props.onAddExpenseData(expenseData);

    }

    const [showComponent, setShowComponent] = useState(false);

    const addNewButtonClickHandler = () => {
        setShowComponent(prevState => !prevState);
    }

    const cancelButtonClickHandler = () => {
        setShowComponent(prevState => !prevState);
    }


    return (
        <div className={"new-expense"}>
            {
                showComponent && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelButtonClickHandler} formState={setShowComponent}/>

            }
            {
                !showComponent && <button type={'button'} onClick={addNewButtonClickHandler}>Add new expense</button>
            }
        </div>
    )
}

export default NewExpense;