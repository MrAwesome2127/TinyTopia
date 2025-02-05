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
        <div>
            <div key={home.modelName}>
                <h1>{home.modelName}</h1>
                <p>{home.synopsis}</p>
                <p>{home.price}</p>
                <p>{home.features}</p>
                <img src={home.imageUrl} alt={home.modelName} />
            </div>
        </div>
    );
}

export default ModelPage;