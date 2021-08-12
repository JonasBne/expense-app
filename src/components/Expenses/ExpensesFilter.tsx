import './ExpensesFilter.css';
import {ChangeEvent} from "react";

const ExpensesFilter = (props: any) => {
    const dropDownHandler = (ev: ChangeEvent<HTMLSelectElement>) => {
        props.onFilterByYear(ev.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selectedYear} onChange={dropDownHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;