import React from "react";
import './TodoSearch.css'

export function TodoSearch() {

    const [searchValue, setSearchValue] = React.useState('')

    const OnSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <>
            <input 
                className="input" 
                placeholder="Search to Task" 
                value={searchValue}
                onChange={OnSearchValueChange}></input>
            <p>{searchValue}</p>
        </>
    )
}
