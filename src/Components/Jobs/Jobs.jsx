import React from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import Job from "../Common/Job/Job"


const Jobs = () => {
    return (
        <div className="Companies">
            <div className="list-container">
                <SearchBar />
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    );
}

export default Jobs;