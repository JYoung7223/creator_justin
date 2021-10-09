import React from "react";

function Project(props){
    return (
        <div className="col mb-4">
            <section className="card">
                <img src={props.project.image} className="card-img-top" alt={props.project.imageAlt}/>
                <summary className="card-body">
                    <h5 className="project-title card-title">{props.project.title}</h5>
                    <p className="project-description card-text"> {props.project.description}</p>
                    {props.project.deployLink &&
                        <a href={props.project.deployLink} className="btn btn-primary">{props.project.deployLinkText}</a>
                    }
                    <a href={props.project.repoLink} className="btn btn-secondar">{props.project.repoLinkText}</a>
                </summary>
            </section>
        </div>
    );
}

export {
    Project
};