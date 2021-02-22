import React, { useState, useEffect } from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import JobList from "../Common/JobList/JobList";
import JoblyAPI from "../../JoblyAPI";


const Jobs = () => {
    const [searchValue, setSearchValue] = useState("");
    const [jobs, setJobs] = useState([])

    const submit = (val) => {
        setSearchValue(searchVal => val);
    }

    const search = async() => {
        const data = await JoblyAPI.getJobs(searchValue);
        setJobs(data);
    }

    useEffect(() => {
        search();
    }, [searchValue])

    return (
        <div className="Jobs">
            <div className="list-container">
                <SearchBar submit={submit} />
                <JobList jobs={jobs} />
            </div>
        </div>
    );
}

export default Jobs;