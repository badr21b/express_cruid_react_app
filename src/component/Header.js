import * as React from "react";
import {Link} from "react-router-dom";
import { FaBriefcaseMedical, FaClinicMedical, FaFacebookF, FaInstagram,  FaWhatsapp} from 'react-icons/fa';


class HeaderComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navBarItemList: [
                {fieldName: "home", icon: <FaClinicMedical className={"icon"} />, text: <Link to="/home">Home</Link> },
                {fieldName: "home", icon: <FaBriefcaseMedical className={"icon"} />, text: <Link to="/contact">Contact</Link> },
            ]
        };

    }

    /* CUSTOM METHODS */


    /* REACT METHODS*/
    componentWillMount() {
        window.scrollTo(0, 0);
    }


    /* RENDERING */
    render() {
        /* Parameters */
        let {navBarItemList} = this.state;
        /* HTML Rendering */
        return (
            // <Animate steps={steps}>
            <nav className={"headerContainer"}>
                <div className={"socialMediaContainer"}>
                    <div className={"socialMediaIconsHolder"}>
                        <FaFacebookF className={"icon"}/>
                        <FaInstagram className={"icon"}/>
                        <FaWhatsapp className={"icon"}/>
                    </div>
                    <div className={"languagesHolder"}>
                        <div>Languages</div>
                    </div>
                </div>
                <div className={"contactContainer"}>
                    Contacts
                </div>
                <div className={"navBarContainer"}>
                    { navBarItemList.map((item) => {
                        return (
                            <div key={item.fieldName} className={"navBarItem"}> {item.icon} {item.text} </div>
                        );
                    })}


                </div>

            </nav>
            // </Animate>
        );
    }
}

/* REACT FUNCTIONS */


export default HeaderComp;
