import React from "react";
import './CreateTodoButton.css'

export function CreateTodoButton() {

    const onClickButton = (mensaje) => {
        alert(mensaje)
    }

    return (
        <>
            <button className="button__add"
                    onClick={() => onClickButton('Aqui se deberia abrir el modal')}>
                        +
            </button>
        </>
    )
}