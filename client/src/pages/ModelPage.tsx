import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { retreiveHome } from "../api/home-routes.ts";
import { HomeData } from "../interfaces/HomeData";

const ModelPage: React.FC = () => {
    const { modelName } = useParams();

    const [home, setHome] = useState({} as HomeData);

    useEffect(() => {
        if (modelName) {
            fetchHome(modelName);
        }
    });

    const fetchHome = async (modelName:string | undefined) => {
        if(modelName !== undefined) {
            const data = await retreiveHome(modelName);
            if(data){
                console.log(data);
                setHome(data);
            }
        }
    };

return (
    <div className="position-relative">
        <div key={home.modelName} className="card mb-3 h-10" style={{ maxWidth: "75%", margin: "auto" }}>
        <div className="row g-0">
            <div className="col-md-2">
                <img src={home.imageUrl} className="img-fluid rounded-start" alt={home.modelName} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{home.modelName}</h5>
                        <p className="card-text">{home.synopsis}</p>
                        <p className="card-text"><strong>${home.price}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default ModelPage;