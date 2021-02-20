import * as React from "react";

class ContactComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
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

        /* HTML Rendering */
        return (
            // <Animate steps={steps}>
            <div className={"panelsContainerMargin"} key={"uniqueKeyPanelsContainer"}>
                Contact component
            </div>
            // </Animate>
        );
    }
}

/* REACT FUNCTIONS */


export default ContactComp;
