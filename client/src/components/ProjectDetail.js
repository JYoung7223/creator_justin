import React, { useReducer } from "react";
import {useParams} from "react-router-dom";
import ProjectDetails from "../init/ProjectDetails.json";
import Projects from "../init/Projects.json";

function ProjectDetail(props){

    const params = useParams();
    const initDetails = ProjectDetails || [
    {
        key: "",
        project: "",
        image: "",
        imageAlt: "",
        title: "",
        description: [""],
        footerText: ""
    }];
    const initProject = Projects[params.id-1] || 
    {
        image: "",
        imageAlt: "",
        title: "",
        description:"",
        link: "",
        linkText:""
    };

    function changeDetails(currentDetails, change){
        return {...currentDetails, change};
    }

    const [detailsData, setDetailsData] = useReducer(changeDetails, initDetails);

    return (
        <div className="projectDetails row row-cols-1">
            <h2 className="project-title text-center text-company-primary">{initProject.title}</h2>
            <h3 className="project-description text-center text-company-secondary">With a Small Team, We Analyzed this Site and the Customer Experience. </h3>  
            <h3 className="project-description text-center text-company-secondary">Through the Following Process We Prepared an Improved Site UX/UI. </h3>
            {detailsData.map((detail)=>{
                if(detail.project === params.id){
                    return(
                        <section className="card border-none project mb-3" id={detail.key}>
                            <div className={(detail.key % 2 === 0 && "row flex-row-reverse") || (detail.key % 2 === 1 && "row")}>
                                <div className="col-md-6 py-3">
                                    <img src={detail.image} className="img-fluid rounded-start" alt={detail.imageAlt}/>
                                </div>
                                <div className="col-md-6 my-auto">
                                    <div className="card-body">
                                        <h5 className="detail-title text-center text-company-secondary card-title">{detail.title}</h5>
                                        {detail.description.map((line, index)=>{
                                            return(<p className="detail-description text-center card-text my-0" id={index}>{line}</p>);
                                        })}                                                                                
                                    </div>
                                    <div className="detail-footer text-center">
                                        <h6 className="detail-footer text-center">{detail.footerText}</h6>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                }
            })}
        </div>
    );
}

export {
    ProjectDetail
};