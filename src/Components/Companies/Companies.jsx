import React from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import CompanyDetail from "./CompanyList/CompanyDetail/CompanyDetail";
import "./Companies.css";

const Companies = () => {
    return (
        <div className="Companies">
            <div className="list-container">
                <SearchBar />
                <CompanyDetail />
                <CompanyDetail />
                <CompanyDetail />
            </div>
        </div>
    );
}

export default Companies;