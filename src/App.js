import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { windowSelectors } from "./redux/WindowSlicer";

import { Header, SwitchTabs } from "./components/UIsComponents";

// views
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Security from "./views/Security";
import Lighting from "./views/Lighting";


export default function App() {
  const actualTab = useSelector(windowSelectors.activeTab);
  // tab names given on order
  const tabNames = ["Home", "Dashboard", "Security", "Lighting"];

  return(
    <React.Fragment>
      <Header />

      <SwitchTabs actualTab={actualTab} tabsNames={tabNames}>
        <Home />
        <Dashboard />
        <Security />
        <Lighting />
      </SwitchTabs>

    </React.Fragment>
  );
}
