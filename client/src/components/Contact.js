import React from "react";

function Contact(){    
    return (
        <div className="card mb-3">
        <div className="row border-top no-gutters">
            <p className="col-12 text-center text-company-primary">Contact Info:</p>
            <p className="col-4 text-right text-company-primary">Email:
                <a href="mailto:jyoung7223@yahoo.com?subject=USS-Connect"><i className="fa fa-envelope-o">jyoung7223@yahoo.com</i></a>
            </p>
            <p className="col-4 text-center text-company-primary">Telephone:
                <a href="tel:801-541-9922"><i className="fa fa-phone"> 801-541-9922</i></a>
            </p>
            <p className="col-4 text-left text-company-primary">Text:
                <a href="sms:801-541-9922&body=USS-Connect"><i className="fa fa-comment"> 801-541-9922 </i></a>
            </p>            
        </div>
        <section className="row">
            <div className="col-4 col-sm-2 my-2">
                <a href="https://github.com/JYoung7223">
                    <img className="connect-img" src="./assets/images/GitHub.jpg" alt="GitHub"/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://github.com/JYoung7223"><i className="fa fa-github" aria-hidden="true">GitHub</i></a>
                    </p>
                </div>
            </div>
            <div className="col-4 col-sm-2 my-2">
                <a href="https://www.linkedin.com/in/justin-young-b7469826/">
                    <img className="connect-img" src="./assets/images/linkedin.png" alt="Linked-In"/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://www.linkedin.com/in/justin-young-b7469826/"><i className="fa fa-linkedin" aria-hidden="true"> Linked-In</i></a>
                    </p>
                </div>
            </div>
            <div className="col-4 col-sm-2 my-2">
                <a href="https://www.instagram.com/justin.o.young/">
                    <img className="connect-img" src="./assets/images/instagram.jpg" alt="Instagram"/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://www.instagram.com/justin.o.young/"><i className="fa fa-instagram" aria-hidden="true"> Instagram</i></a>
                    </p>
                </div>
            </div>
            <div className="col-4 col-sm-2 my-2">
                <a href="https://www.youtube.com/channel/UCCmbphfbGJQeonVIDKQaL4A?view_as=subscriber">
                    <img className="connect-img" src="./assets/images/youtube.PNG" alt="YouTube"/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://www.youtube.com/channel/UCCmbphfbGJQeonVIDKQaL4A?view_as=subscriber"><i className="fa fa-youtube" aria-hidden="true"> Youtube</i></a>
                    </p>
                </div>
            </div>
            <div className="col-4 col-sm-2 my-2">
                <a href="https://www.facebook.com/justin.young.56232">
                    <img className="connect-img" src="./assets/images/facebook.png" alt="Facebook"/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://www.facebook.com/justin.young.56232"><i className="fa fa-facebook" aria-hidden="true"> Facebook</i></a>
                    </p>
                </div>
            </div>
            <div className="col-4 col-sm-2 my-2">
                <a href="https://www.twitter.com/justin7223">
                    <img className="connect-img" src="./assets/images/twitter.png" alt="Twitter"/>
                </a>
                <div className="card-body">
                    <p className="card-text">
                        <a href="https://www.twitter.com/justin7223"><i className="fa fa-twitter" aria-hidden="true">Twitter</i></a>
                    </p>
                </div>
            </div>
        </section>
        </div>
    );
}

export {
    Contact
};