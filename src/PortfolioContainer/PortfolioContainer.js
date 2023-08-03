import React from "react";
import { TOTAL_SCREENS } from "../utilities/commonUtils";
import "./PortfolioContainer.css";

export default function PortfolioContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };
  return (
    <div className="portfolio-container">
      {mapAllScreens()}
      <div className="footer">All Rights Reserved &copy; Yutong 2023</div>
    </div>
  );
}
