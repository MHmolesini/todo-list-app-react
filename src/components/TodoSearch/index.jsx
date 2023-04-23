import React from "react";
import './TodoSearch.css'

export function TodoSearch() {

    const OnSearchValueChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <>
            <input 
                className="input" 
                placeholder="Search to Task"
                onChange={OnSearchValueChange}></input>
        </>
    )
}
