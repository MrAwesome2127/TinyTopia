import React from "react";

import type { HomeData } from "../interfaces/HomeData";
import { Link } from "react-router-dom";

interface ModelsListProps {
    homes: HomeData[];
}


const ModelsList: React.FC<ModelsListProps> = ({ homes }) => {
    return (
        <div className="position-relative" >
            <h1 style={{marginLeft:'12.5%'}}>Models</h1>
            {homes && homes.map((home: HomeData) => (
                <div key={home.modelName} className="card mb-3" style={{ maxWidth: "75%", margin: "auto" }}>
                    <div className="row g-0">
                        <div className="col-md-2">
                            <img src={home.imageUrl} className="img-fluid rounded-start" alt={home.modelName} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body h-20">
                                <h5 className="card-title">{home.modelName}</h5>
                                <p className="card-text">{home.synopsis}</p>
                                <p className="card-text"><big className="text-body-secondary">{home.price}</big></p>
                                <a className="btn btn-primary" style={{ color: 'white' }}><Link to={`/model/${home.modelName}`} style={{ color: 'white' }}>View Details</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ModelsList;
