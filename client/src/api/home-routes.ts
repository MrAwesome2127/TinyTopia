import { HomeData } from "../interfaces/HomeData";

const retreiveHomes = async (): Promise<HomeData[]> => {
    const response = await fetch("/api/homes");
    return await response.json();
}

export default retreiveHomes;