import React from "react";

import SearchCats from "../components/searchCats";
import DiscoverSection from "../components/discoverSection";
import LowerContent from "../components/lowerContent";

const HomePage = () => {
  return (
    <div>
      <SearchCats />
      <DiscoverSection />
      <LowerContent />
    </div>
  );
};

export default HomePage;
