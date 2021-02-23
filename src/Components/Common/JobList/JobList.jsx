import React, { useContext } from "react";
import Job from "./Job/Job"
import useClientUserAuth from "../../../Utils/useClientUserAuth";
import UserContext from "../../../Context/UserContext";

const JobList = ({ jobs }) => {
    const { currentUser } = useContext(UserContext);
    useClientUserAuth(currentUser);

    const renderJobs = () => {
        return (
            jobs.map(job => <Job job={job} key={job.id} />)
        );
    }

    const renderNotFound = () => {
        return (
            <p>No results found.</p>
        );
    }
    return (
        (jobs && jobs.length > 0) ? renderJobs() : renderNotFound()
    );
}

export default JobList;