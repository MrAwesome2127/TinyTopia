import React from "react";
import retreiveHomes from "../api/home-routes.ts";
import type { HomeData } from "../interfaces/HomeData";
import ModelsList from "../components/ModelsList";

const ModelsPage: React.FC = () => {
  const [homes, setHomes] = React.useState<HomeData[]>([]);

  React.useEffect(() => {
    const fetchHomes = async () => {
      const homes = await retreiveHomes();
      setHomes(homes);
    };

    fetchHomes();
  }, []);

  return (
    <div>
      <ModelsList homes={homes} />
    </div>
  );
};

export default ModelsPage;