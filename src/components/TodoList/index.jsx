import React from "react";

export function TodoList(props) {
    return (
        <>
            <section className="todoList__section">
                <ul className="todoList__section__ul">
                    {props.children}
                </ul>
            </section>
        </>
    )
}