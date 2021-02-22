import React from "react";
import "./Job.css";

const Job = ({job}) => {
    return (
        <div className="Job">
            <div className="left-side">
                <p className="title">{ job.title }</p>
                <p className="company-name">{ job.companyName }</p>
                <p>Salary: { job.salary }</p>
                <p>Equity: { job.equity }</p>
            </div>
            <div className="right-side">
                <button className="btn btn-apply w-700">Apply</button>
            </div>
        </div>
    );
}

export default Job