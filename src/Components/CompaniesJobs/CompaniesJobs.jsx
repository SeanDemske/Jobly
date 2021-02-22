import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyAPI from "../../JoblyAPI";
import JobList from "../Common/JobList/JobList"

const CompaniesJobs = () => {
    const { companyId } = useParams();
    const [company, setCompany] = useState([]);

    const search = async() => {
        const data = await JoblyAPI.getCompany(companyId);
        setCompany(data);
    }

    useEffect(() => {
        search();
    }, [])

    const renderJobs = () => {
        return (
            <>
                <h1>{ company.name }</h1>
                <p>{ company.description} </p>
                <JobList jobs={company.jobs} />
            </>
        );
    }

    const renderLoading = () => {
        return <p>Loading...</p>
    }

    return (
        <div className="CompaniesJobs">
            <div className="list-container">
                {company ? renderJobs() : renderLoading()}
            </div>
        </div>
    );
}

export default CompaniesJobs;