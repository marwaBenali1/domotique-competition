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
                <p className="mb-0 text-white">Samedi 22 Mai 2021 </p>
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
        <div className="mr-3 text-white" style={{cursor: 'pointer' }} onClick={() => onClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
            </svg>
        </div>
    );
}