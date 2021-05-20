import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTab, windowSelectors } from "../redux/WindowSlicer";


export function Header(props) {
    const dispatch = useDispatch();
    const actualTab = useSelector(windowSelectors.activeTab);


    return(
        <div className="d-flex align-items-center row px-5 pb-2 border">
            <div className="col-6">
                <div className="d-flex align-items-center row">
                    {/* show return button if tab is not Home */}
                    {(actualTab !== "Home") ? <LeftArrowButton onClick={() => dispatch(changeTab("Home"))} /> : null}
                    <h1 className="mb-0 text-white" > Moby D.I.C SmartHouse </h1>
                </div>
            </div>
            
            <div className="col-2 ml-auto">
                <p className="mb-0 text-white">Friday 14 May 2021</p>
            </div>
        </div>
    );
}


export function Tab(props) {
    const { tabName, tabIcon, onClickHandler }= props;

    return(
        <div 
            className="col-3" 
            style={{ opacity: 0.4, cursor: "pointer" }}
            onClick={() => onClickHandler()}
            >
          <div className="card" >
            <div className="p-1 align-self-center">
              {tabIcon}
            </div>
            <div className="card-body border-light">
               <p className="card-text text-center">{tabName}</p>
            </div>
          </div>
        </div>
    );
}

export function SwitchTabs(props) {
    const tabsNames = props.tabsNames;
    const actualTab = props.actualTab;

    // index of tab to display
    const index = tabsNames.indexOf(actualTab);

    return(
        <React.Fragment>
            {props.children[index]}
        </React.Fragment>
    );
}


export function LeftArrowButton(props) {
    const { onClick } = props;

    return(
        <div className="mr-3 text-white" style={{ cursor: 'pointer' }} onClick={() => onClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
            </svg>
        </div>
    );
}