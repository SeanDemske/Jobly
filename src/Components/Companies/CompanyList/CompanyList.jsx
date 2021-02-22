import React from "react";
import CompanyDetail from "./CompanyDetail/CompanyDetail"

const CompanyList = ({ companies }) => {
    const renderCompanies = () => {
        return (
            companies.map(company => <CompanyDetail company={company} key={company.handle} />)
        );
    }

    const renderNotFound = () => {
        return (
            <p>No results found.</p>
        );
    }

    return (
        companies.length > 0 ? renderCompanies() : renderNotFound()
    );
}

export default CompanyList;