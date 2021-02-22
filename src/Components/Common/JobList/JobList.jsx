import React from "react";
import Job from "./Job/Job"

const JobList = ({ jobs }) => {

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