import React, { useReducer } from "react";
import {Phase} from "./Phase";
import PhaseList from "../init/Process.json";

function Process(){
    const initProcess = PhaseList || [
        {
            image: "",
            imageAlt: "",
            title: "",
            description:"",
            link: "",
            linkText:""
        },
    ];

    function changeProcess(currentProcess, change){
        return {...currentProcess, change};
    }

    const [processData, setProcessData] = useReducer(changeProcess, initProcess);

    return (        
        <div className="process row row-cols-1">
            {processData.map((phase)=>{
                return(
                    <Phase key={phase.key} phase={phase}/>
                );
            })}
        </div>
    );
}

export {
    Process
};