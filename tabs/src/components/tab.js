import React, { useState } from 'react';
import './Tab.css';

const Tab = () => {
  const content = ["Tab 1 content", "Tab 2 content", "Tab 3 content"];
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab">
      <div
        id="btn-tab-1"
        className={activeTab === 0 ? "active" : ""}
        onClick={() => handleClick(0)}
      >
        Tab 1
      </div>
      <div
        id="btn-tab-2"
        className={activeTab === 1 ? "active" : ""}
        onClick={() => handleClick(1)}
      >
        Tab 2
      </div>
      <div
        id="btn-tab-3"
        className={activeTab === 2 ? "active" : ""}
        onClick={() => handleClick(2)}
      >
        Tab 3
      </div>
      <div id="result">{content[activeTab]}</div>
    </div>
  );
};

export default Tab;
