import * as React from "react";
import YoutubeBackground from "react-youtube-background";

class HomeComp extends React.Component {
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
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        /* HTML Rendering */
        return (
            // <Animate steps={steps}>
            <div className={"panelsContainerMargin"} key={"uniqueKeyPanelsContainer"}>
                <div className={'homeVideoContainer'}>
                    <div className={'flagContainer'}>
                        <img
                            className={'flag'}
                            src="/algeria_flag.jpeg"
                            alt={''}
                        />
                        <div className={'text'}>إِنَّ اللَّهَ لا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِم  [الرعد:11]ْ </div>
                    </div>

                    <div className={'videoTextContainer'}>
                        <div className={'imageContainer'}>
                            <div className={'textWhite'}>Every small step is important</div>
                            <div className={'textRed'}>معركة تحرير الوعي</div>
                            <img
                                src="/paint_brush_green.png"
                                alt={''}
                            />
                        </div>
                    </div>
                    <YoutubeBackground className={'backgroundVideo'} videoId={'BxnLpH2Pw1s'}   opts={opts} /* default -> null */ />
                </div>



                <div className={'horizontalPanel'}>
                    <div className={'horizontalPanelTextContainer'}>
                        <div className={'title'}>A Community of Creators</div>
                        <div className={'paragraph'}>
                            Algeria is our country, it needs us and we need it.

                        We are its futur, its future is ours.

                        Together we will build it, together we will be the force.
                        </div>
                    </div>
                </div>

            </div>
            // </Animate>
        );
    }
}

/* REACT FUNCTIONS */


export default HomeComp;
