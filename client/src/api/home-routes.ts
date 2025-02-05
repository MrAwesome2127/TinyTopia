import { HomeData } from "../interfaces/HomeData";


const retreiveHomes = async (): Promise<HomeData[] | undefined> => {
    try{console.log('Fetching homes');
    const response = await fetch("/api/homes/models",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
    } catch (error) {
        console.error('Error fetching homes', error);
    }
}



const retreiveHome = async (modelName: string): Promise<HomeData | undefined> => {
    try{ console.log('Fetching home');
    const response = await fetch(`/api/homes/model/${modelName}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
    }
    catch (error) {
        console.error('Error fetching home', error);
    }
}

export default retreiveHomes as { (): Promise<HomeData[]>; (modelName: string): Promise<HomeData> }
export { retreiveHome };