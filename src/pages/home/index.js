import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import TabOptions from "../../components/tabOPtions";
import Delivery from "../../components/delivery";
import DianingOut from "../../components/dianingOut";
import NightLife from "../../components/nightLife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* For display correct screen */}
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DianingOut />;

    case "Nightlife":
      return <NightLife />;

    default:
      return <Delivery />;
  }
};

export default HomePage;
