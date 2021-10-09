import React, { useReducer } from "react";
import NavBarItems from "../init/NavBar.json";
import { Header } from "./Header";

function NavBar(){
    const initNavBar = NavBarItems || [
        {
            text: "",
            link: "",
            order: 0,
            submenu:[
                {
                    text: "",
                    link: "",
                    order: 0
                }
            ]
        }
    ];

    function changeNavBar(currentNavBar, change){                
        return {...currentNavBar, change};
    }

    const [navBarData, setNavBarData] = useReducer(changeNavBar, initNavBar);

    return (
        <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <Header/>
                <div className="col-12 col-md-6">
                    <ul className="nav nav-tabs">
                    {
                        navBarData.map((item) => {
                            return (
                                <li key={item.order} className="nav-item dropdown mx-3">
                                    <a className="nav-link dropdown-toggle" href={item.link} id={item.text} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.text}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby={item.text}>
                                        {
                                            item.submenu.map((subitem)=>{
                                                return (
                                                    <li key={subitem.order}><a className="dropdown-item" href={subitem.link}>{subitem.text}</a></li>
                                                );
                                            })
                                        }
                                    </ul>
                                </li>
                            );
                        })
                    }                
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export {
    NavBar
};