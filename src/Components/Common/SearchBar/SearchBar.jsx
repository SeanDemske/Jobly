import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <input type="text"/>
            <button className="btn btn-primary">Submit</button>
        </div>
    );
}

export default SearchBar;