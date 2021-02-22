import React from "react";
import "./Job.css";

const Job = () => {
    return (
        <div className="Job">
            <div className="left-side">
                <p className="title">Accommodation manager</p>
                <p className="company-name">Moore PLC</p>
                <p>Salary: 175,000</p>
                <p>Equity: 0</p>
            </div>
            <div className="right-side">
                <button className="btn btn-apply w-700">Apply</button>
            </div>
        </div>
    );
}

export default Job