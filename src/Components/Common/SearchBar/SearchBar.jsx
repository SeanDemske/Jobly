import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ submit }) => {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {
        setInputValue(inputVal => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputValue);
    }

    return (
        <form className="SearchBar" onSubmit={handleSubmit} >
            <input type="text" value={inputValue} onChange={handleChange} />
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default SearchBar;