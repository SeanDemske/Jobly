import React from "react";
import { useHistory } from "react-router-dom";
import "./CompanyDetail.css";

const CompanyDetail = ({ company }) => {
    const history = useHistory();
    const handleClick = (e) => {
        history.push(`/companies/${company.handle}`);
    }

    return (
        <div className="CompanyDetail" onClick={handleClick}>
            <div className="card-top">
                <p className="w-600">{ company.name }</p>
                {company.logoUrl ? <img src={`http://joelburton-jobly.surge.sh/${company.logoUrl}`} alt={`${company.name} logo`}/> : ""}
                
            </div>
            <div className="card-bottom">
                <p>{ company.description }</p>
            </div>
        </div>
    );
}

export default CompanyDetail;