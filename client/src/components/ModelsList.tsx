import React from "react";

import type { HomeData } from "../interfaces/HomeData";

interface ModelsListProps {
    homes: HomeData[];
}


const ModelsList: React.FC<ModelsListProps> = ({ homes }) => {
    return (
        <div>
            <h1>Models</h1>
            {homes && homes.map((home: HomeData) => (
                <div key={home.modelName} className="card mb-3" style={{ maxWidth: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={home.imageUrl} className="img-fluid rounded-start" alt={home.modelName} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{home.modelName}</h5>
                                <p className="card-text">{home.synopsis}</p>
                                <p className="card-text"><big className="text-body-secondary">{home.price}</big></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ModelsList;
