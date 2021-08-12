import './Card.css';
import {HTMLProps} from "react";

function Card (props: HTMLProps<any>) {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;