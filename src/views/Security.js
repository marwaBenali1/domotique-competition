import React from "react";
import SwitchInput from "../views/Lighting";

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
        <div class="custom-control custom-switch ">
                    <input type="checkbox" class="custom-control-input " id="customSwitch1"/>
                    <label class="custom-control-label ml-3 " for="customSwitch1">Séjour</label>
        </div> 
         
        </div>
        
    );
}