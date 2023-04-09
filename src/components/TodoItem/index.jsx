import React from "react";
import { RxCross2 } from 'react-icons/rx'
import './TodoItem.css'

export function TodoItem(props) {
    return (
        <>
            <li className="todoItem">
                <span type="checkbox" className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>J</span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>
                <span className="Icon Icon-delete"><RxCross2/></span>
            </li>
        </>
    )
}