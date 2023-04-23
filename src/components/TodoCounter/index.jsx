import React from "react";
import './TodoCounter.css';

export function TodoCounter({total, completed}) {

    return (
        <>
            <h2 className='h2'>My Tasks</h2>
            <h3>Has completado {completed} de {total} TODOs</h3>
        </>
    )
}

