import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import JobList from "../Common/JobList/JobList";
import JoblyAPI from "../../JoblyAPI";
import useClientUserAuth from "../../Utils/useClientUserAuth";
import UserContext from "../../Context/UserContext";


const Jobs = () => {
    const { currentUser } = useContext(UserContext);
    useClientUserAuth(currentUser);

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
                <SearchBar submit={submit} placeholder="Search for jobs" />
                <JobList jobs={jobs} />
            </div>
        </div>
    );
}

export default Jobs;