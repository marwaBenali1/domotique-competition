import React from "react";


export default function Security(props) {

    return(
        // <div
        // class="bg-image flex justify-content-center p-0 h-full text-center shadow-1-strong rounded mb-5 text-white"
       
        // style={{ 
        //     backgroundImage: `url("https://i.ibb.co/Y3Q5xKY/plan.png")` ,
        //     backgroundRepeat: 'no-repeat',
        //     height:700, 
        //     backgroundAttachment: 'fixed', 
        //     backgroundSize: '100% 110%' , 
         
        //   }}
        // > 
        // <LabelInput name ="Room 2" left ="-250" top="160"/>
        // <LabelInput name="Laundry" left="-138" top="120"/>
        // <LabelInput name="Bath2" left="-60" top="80"/>
        // <LabelInput name="Bath1" left="-330" top="140"/>
        // <LabelInput name="Room 1" left="-380" top="200"/>
        // <LabelInput name="Séjour" left="60" top="200"/>
        // <LabelInput name="Hall" left="-150" top="150"/>
        // <LabelInput name="Cuisine" left="60" top="300"/>
        // <LabelInput name="Garage" left="350" top="250"/>

        // <SwitchInput name="Front door" left="400" top="-200"/>
        // <SwitchInput name="Garage" left="389" top= "-190"/>
       
        // </div>
        <div  class="row">
        <div
         class=" col-6 bg-image flex justify-content-center p-0 h-full text-center shadow-1-strong rounded mb-5 text-white"
       
            style={{ 
            backgroundImage: `url("/Users/mac/Desktop/domotique/electron-react-serialPort/assets/test5.png")` ,
            backgroundRepeat: 'no-repeat',
            height:500, 
            position :"relative",
            top:"60px",
            left:"80px",
            
         
          }}
        > </div>
        <div class="col-6">

        <div class="card" style={{ height:300, width:300, position:"relative",top:"200px",right:"-70px",opacity: 0.4}}>
            <div class="card-body">
                <h5 class="card-title">Manual control</h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                </svg>
                <SwitchInput name="Front door" top="10" />
                <SwitchInput name="Garage" top="10"/>
                <SwitchInput name="Front door" top="10" />
                <SwitchInput name="Garage" top="10"/>


            </div>
            </div>

        </div>
        </div>
    );
}
function LabelInput(props){
    const name = props.name;
    const left = props.left;
    const top =props.top;

    return(
        <p style={{ position: "relative", top: `${top}px`, left: `${left}px` }}>
            {name}
        </p>
    );
}
function SwitchInput(props) {
    const name = props.name;
    const left = props.left;
    const top = props.top;

    const isChecked = props.isChecked;
    const onCheckHandler = props.onCheckHandler;

    return(
        <div 
            class="custom-control custom-switch" 
            style={{ position: "relative", top: `${top}px`, left: `${left}px` }}
            >
            <div class="custom-control custom-switch ">
                    <input type="checkbox" class="custom-control-input "     onChange={(e) => onCheckHandler(e)} id="customSwitch1"/>
                    <label class="custom-control-label ml-3 " for="customSwitch1">{name}</label>
        </div> 
        </div>
    );
}
