import React from "react";

function Phase(props) {
    return (
        <section className="card phase mb-3" id={props.phase.key}>
            <div className={(props.phase.key % 2 === 0 && "row flex-row-reverse g-0") || (props.phase.key % 2 === 1 && "row g-0")}>
                <div className="col-md-4">
                    <img src={props.phase.image} className="img-fluid rounded-start" alt={props.phase.imageAlt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="phase-title card-title">{props.phase.title}</h5>
                        <p className="phase-description card-text">{props.phase.description}</p>
                        {
                            props.phase.deployLink &&
                            <a href={props.phase.deployLink} className="btn btn-primary">{props.phase.deployLinkText}</a>
                        }
                        {
                            props.phase.repoLink &&
                            <a href={props.phase.repoLink} className="btn btn-secondary">{props.phase.repoLinkText}</a>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export {
    Phase
};