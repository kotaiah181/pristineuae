import "../CSS/tabs.css";
import { useState } from "react";

const Overview = () => {
  const [active, setActive] = useState("Overview");

  const tabs = [
    { name: "Overview", icon: "🏠" },
    { name: "Network VAPT", icon: "🔍" },
    { name: "Firewall Security", icon: "🔥" },
    { name: "Wireless Security", icon: "📡" },
    { name: "Zero Trust", icon: "🔐" },
    { name: "Network Monitoring", icon: "📊" },
    { name: "Segmentation & Architecture", icon: "🧱" },
    { name: "FAQ", icon: "❓" },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-scroll">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`tab ${active === tab.name ? "active" : ""}`}
            onClick={() => setActive(tab.name)}
          >
            <span className="icon">{tab.icon}</span>
            {tab.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;