import React, { useState, useContext } from "react";
import UserContext from "../../../../Context/UserContext";
import "./Job.css";

const Job = ({job}) => {

    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();
  
    React.useEffect(function updateAppliedStatus() {
      setApplied(hasAppliedToJob(job.id));
    }, [job.id, hasAppliedToJob]);
  
    /** Apply for a job */
    async function handleApply(evt) {
      if (hasAppliedToJob(job.id)) return;
      applyToJob(job.id);
      setApplied(true);
    }

    return (
        <div className="Job">
            <div className="left-side">
                <p className="title">{ job.title }</p>
                <p className="company-name">{ job.companyName }</p>
                <p>Salary: { job.salary }</p>
                <p>Equity: { job.equity }</p>
            </div>
            <div className="right-side">
                <button 
                    onClick={handleApply} 
                    className="btn btn-apply w-700"
                    disabled={applied}
                    >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    );
}

export default Job