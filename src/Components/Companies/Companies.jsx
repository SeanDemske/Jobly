import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../Common/SearchBar/SearchBar";
import CompanyList from "../Companies/CompanyList/CompanyList";
import JoblyAPI from "../../JoblyAPI";
import useClientUserAuth from "../../Utils/useClientUserAuth";
import UserContext from "../../Context/UserContext";
import "./Companies.css";

const Companies = () => {
    const { currentUser } = useContext(UserContext);
    useClientUserAuth(currentUser);

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
                <SearchBar submit={submit} placeholder="Search for companies" />
                <CompanyList companies={companies} />
            </div>
        </div>
    );
}

export default Companies;