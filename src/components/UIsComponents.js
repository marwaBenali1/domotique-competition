import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTab, windowSelectors } from "../redux/WindowSlicer";


export function Header(props) {
    const dispatch = useDispatch();
    const actualTab = useSelector(windowSelectors.activeTab);


    return(
        <div className="d-flex align-items-center row px-5 pb-2 border">
            <div className="col-8">
                <div className="d-flex align-items-center row">
                    {/* show return button if tab is not Home */}
                    {(actualTab !== "Home") && <LeftArrowButton onClick={() => dispatch(changeTab("Home"))} />}
                    <h1 className="mb-0 text-white" > 
                        Moby D.I.C SmartHouse {(actualTab === 'Home') ? null : `| ${actualTab}`}
                    </h1>
                </div>
            </div>
            
            <div className="col-2 ml-auto">
                <DateD />
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


export function DateDisplay(props) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(new Date());
        }, 1000);
    })

    return(
        <div className="col mb-0 align-items-center text-white">
            <div className="p-0">
                <h2 className="">{currentDate.toTimeString().slice(0, 8)}</h2>
            </div>
            <div className="p-0">
                <small>{currentDate.toDateString()}</small>
            </div>
        </div>
    );
}


export function DateD(props) {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(new Date());
        }, 1000);
    })

    return(
        <div className="row d-flex align-items-center">
            <div className="col-1 text-white mr-2">
                <CalanderIcon />
            </div>
            <div className="col mb-0 align-items-center text-white">
                <div className="p-0">
                    <h2 className="">{currentDate.toTimeString().slice(0, 8)}</h2>
                </div>
                <div className="p-0">
                    <small>{currentDate.toDateString()}</small>
                </div>
            </div>
        </div>
    );
}


function CalanderIcon(props) {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 16 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
</svg>
    );
}
