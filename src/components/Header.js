import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <div>
        <h2>Fares' Portfolio Created Using React Framework.</h2>
      </div>
      <div>
        <Navigation
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        ></Navigation>
      </div>
    </header>
  );
}

export default Header;
