import React, { useReducer } from "react";

function Header(){
    const initHeader = {
        name: "United Software Solutions",
        logo: "./logo.png",
        logoAlt: "Logo",
        logoLink: "/"
    };

    function changeHeader(currentHeader, change){
        return {...currentHeader, change};
    }

    const [headerData, setHeaderData] = useReducer(changeHeader, initHeader);

    return (
        <header className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 logo">
                    <a href={headerData.logoLink}>
                        <img src={headerData.logo} alt={headerData.logoAlt}/>
                        <span className="company-name text-wrap align-middle">{headerData.name}</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export {
    Header
};