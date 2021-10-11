import React from "react";

function ProjectDetail(props){
    return (
        <section className="card project-detail mb-3">Project Detail for Project {props.id}
            {/* <div className={(props.project.key % 2 === 0 && "row flex-row-reverse g-0") || (props.project.key % 2 === 1 && "row g-0")}>
                <div className="col-md-4">
                    <img src={props.project.image} className="img-fluid rounded-start" alt={props.project.imageAlt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="project-title text-center card-title">{props.project.title}</h5>
                        <p className="project-description text-center card-text">{props.project.description}</p>
                        <div className="project-links text-center">
                        {
                            props.project.primaryButtonLink &&
                            <a href={props.project.primaryButtonLink} className="btn btn-primary m-4">{props.project.primaryButtonText}</a>
                        }
                        {
                            props.project.secondaryButtonLink &&
                            <a href={props.project.secondaryButtonLink} className="btn btn-secondary m-4">{props.project.secondaryButtonText}</a>
                        }
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
}

export {
    ProjectDetail
};