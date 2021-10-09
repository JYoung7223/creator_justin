import React, { useReducer } from "react";

function Header(){
    const initHeader = {
        name: "Justin Young",
        logo: "./logo.jpg",
        logoAlt: "Logo",
        logoLink: "/"
    };

    function changeHeader(currentHeader, change){
        return {...currentHeader, change};
    }

    const [headerData, setHeaderData] = useReducer(changeHeader, initHeader);

    return (
        <header className="col-12 col-md-6 logo">
            <a className="navbar-brand" href={headerData.logoLink}>
                <img src={headerData.logo} alt={headerData.logoAlt}/>
                <span className="company-name text-company-primary text-wrap pl-3 align-start">{headerData.name}</span>
            </a>
        </header>
    );
}

export {
    Header
};