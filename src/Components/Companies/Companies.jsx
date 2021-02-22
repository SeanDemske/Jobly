import React, { useState, useEffect } from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import CompanyList from "../Companies/CompanyList/CompanyList";
import JoblyAPI from "../../JoblyAPI";
import "./Companies.css";

const Companies = () => {
    const [searchValue, setSearchValue] = useState("");
    const [companies, setCompanies] = useState([])

    const submit = (val) => {
        setSearchValue(searchVal => val);
    }

    const search = async() => {
        const data = await JoblyAPI.getCompanies(searchValue);
        setCompanies(data);
    }

    useEffect(() => {
        search();
    }, [searchValue])

    return (
        <div className="Companies">
            <div className="list-container">
                <SearchBar submit={submit} />
                <CompanyList companies={companies} />
            </div>
        </div>
    );
}

export default Companies;