import React, { useReducer } from "react";
import {Project} from "./Project";
import ProjectList from "../init/Projects.json";

function Projects(){
    const initProjects = ProjectList || [
        {
            image: "",
            imageAlt: "",
            title: "",
            description:"",
            link: "",
            linkText:""
        },
    ];

    function changeProjects(currentProjects, change){
        return {...currentProjects, change};
    }

    const [projectsData, setProjectsData] = useReducer(changeProjects, initProjects);

    return (        
        <div className="projects row row-cols-1 row-cols-sm-2 row-cols-lg-3">
            {projectsData.map((project)=>{
                return(
                    <Project key={project.key} project={project}/>
                );
            })}
        </div>
    );
}

export {
    Projects
};