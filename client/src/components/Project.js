import React from "react";

function Project(props){
    return (
        <section className="card project mb-3" id={props.project.key}>
            <div className={(props.project.key % 2 === 0 && "row flex-row-reverse g-0") || (props.project.key % 2 === 1 && "row g-0")}>
                <div className="col-md-4">
                    <img src={props.project.image} className="img-fluid rounded-start" alt={props.project.imageAlt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="project-title card-title">{props.project.title}</h5>
                        <p className="project-description card-text">{props.project.description}</p>
                        {
                            props.project.deployLink &&
                            <a href={props.project.deployLink} className="btn btn-primary">{props.project.deployLinkText}</a>
                        }
                        {
                            props.project.repoLink &&
                            <a href={props.project.repoLink} className="btn btn-secondary">{props.project.repoLinkText}</a>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Project
};