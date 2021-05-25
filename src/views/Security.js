import React from "react";


export default function Security(props) {

    return(
        <div
        class="bg-image flex justify-content-center p-0 h-full text-center shadow-1-strong rounded mb-5 text-white"
       
        style={{ 
            backgroundImage: `url("https://i.ibb.co/Y3Q5xKY/plan.png")` ,
            backgroundRepeat: 'no-repeat',
            height:700, 
            backgroundAttachment: 'fixed', 
            backgroundSize: '100% 110%' , 
         
          }}
        > 
       
        <SwitchInput name="Front door" left="-130" top="480"/>
        <SwitchInput name="Garage" left="320" top= "520"/>
       
        </div>
        
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