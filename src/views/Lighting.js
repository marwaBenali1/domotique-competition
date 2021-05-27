import React, { useReducer,useState } from "react";


export default function Lighting(props) {
    const arrIcons = [
        {
            name: "mode manuel",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-index-fill m-2" viewBox="0 0 16 16">
                         <path d="M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002z"/>
                </svg>)
        },
        {
            name: "Mode Automatique",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-wide-connected m-2" viewBox="0 0 16 16">
                    <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
                </svg>)
        },
        {
            name: "Mode Nuit",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill m-2" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                </svg>)
        }
    ];

    const arrSwitch = [
        {
            name: "Room 2", 
            left: "-300", top: "100" 
        },    
        {
            name: "Laundery",
            left: "-130", top: "65"
        },
        {
            name: "Bath",
            left: "-80", top: "75" 
        },
        {
            name:"Room 1",
            left:"-400", top:"220"  
        },
        {
            name: "Bath ", 
            left: "-340", top:"120"  
        },
        {
            name: "Hall", 
            left: "-170", top: "200"    
        },
        {
            name: "Living Room",
            left: "40", top: "180"
        },
        {
            name: "Kitchen",
            left:"40", top:"360"
        },
        {
            name: "Garage", 
            left: "320", top: "300"   
        }
    ]

    const arrTurn = [
        {
            name: "Room 2", 
            left: "-120", top: "100" 
        },  
        {
            name: "Bath 2", 
            left: "-20", top: "100" 
        },   
        {
            name: "Laundry", 
            left: "20", top: "100" 
        },   
        {
            name: "Bath1", 
            left: "-280", top: "190" 
        },  
        {
            name: "Room 1", 
            left: "-370", top: "290" 
        }, 
        {
            name: "hall", 
            left: "-190", top: "290" 
        },
        {
            name: "Living Room", 
            left: "-40", top: "290" 
        },
        {
            name: "kitchen", 
            left: "-70", top: "490" 
        }, {
            name: "Garage", 
            left: "150", top: "490" 
        },
        
    ]

    // initial state
    // all switch are false
    const initState = {};
    for(let item of arrSwitch) {
        initState[item.name] =  false;
    }

    // to manipulate state of switch
    const reducer = (state, action) => {

        return { ...state, [action.type]: action.payload } 
    }

    const [state, dispatch] = useReducer(reducer, initState);

const [isOn,setIsOn] = useState([])
    return(
        <React.Fragment>

        <div
            class="bg-image flex justify-content-center p-0 h-full text-center shadow-1-strong rounded mb-5 text-white"
            style={{ 
                backgroundImage: `url("https://i.ibb.co/Y3Q5xKY/plan.png")` ,
                backgroundRepeat: 'no-repeat',
                height:700, 
                backgroundAttachment: 'fixed', 
                backgroundSize: '100% 112%' , 
              }}
            >
            
            {/* button for modes */}
            <div className="row p-0 justify-content-center"> 
                {arrIcons.map((item, index) => <IconButton key={`${index}-lighting-button`} name={item.name} icon={item.icon}/>)}      
            </div>
            
            {/* switch for rooms */}
            {/*{arrSwitch.map((item, index) => {
                return(
                    <SwitchInput 
                        key={`${index}-switch-inputs`}
                        name={item.name}
                        left={item.left}
                        top={item.top}
                        isChecked={state[item.name]}
                        onCheckHandler={(e) => {dispatch({ type: item.name, payload: e.target.checked });}}
                     />
                );
            })}*/}
             {arrTurn.map((item, i) => {
                return(
                    
                     <Bulb top={item.top} left = {item.left} key={item.name} index={item.name} isOn={isOn} setIsOn={setIsOn}/>
                );
            })}
     
        <div>
       

      
       

        </div>
       
        </div>
        </React.Fragment>

    );
}

const  TurnOn = (props)=>{
    const left = props.left;
    const top = props.top;
    return(
        <div class="btn-toolbar justify-content-between " role="toolbar" aria-label="Toolbar with button groups" 
             style={{ position: "relative", top: `${top}px`, left: `${left}px` }}
            >
                <div class="btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-light">On</button>
                    <button type="button" class="btn btn-outline-light">Off</button>
                </div>
        </div>

    );
}

const Bulb =({index, isOn,setIsOn , top,left})=>{return (

<span 

style={{   position: "relative", top: `${top}px`, left: `${left}px` }}
onClick={()=>{
console.log(index)
   if (isOn.includes(index))
   {let new_ison = isOn.filter(e=>e!=index)
    setIsOn(new_ison)}
   
   else{

setIsOn([...isOn,index])
   }
    
   }}>

{isOn.includes(index)?<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" style={{fill: 'yellow'}} fill="currentColor" class="bi bi-lightbulb-fill " viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
</svg>: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-lightbulb danger" viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
            </svg>}
  </span>)}
   

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
                <input 
                    type="checkbox" 
                    class="custom-control-input"
                    checked={isChecked}  
                    onChange={(e) => onCheckHandler(e)} 
                    id={`switch-${name}`}
                    />
                <label class="custom-control-label ml-3 " for={`switch-${name}`}>{name}</label>
        </div> 
        </div>
    );
}


function IconButton(props) {
    const name = props.name;
    const icon = props.icon;

    return (
        <button type="button" class="btn btn-outline-light m-2">
            {name}
            {icon}
        </button>
    );
}
