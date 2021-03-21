import * as React from "react";
import "./style/scss/ui.css";
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Header from "./component/Header";
import getRequest, {deleteRequest} from "./API/controllers/genericRequests";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            review: '',
            reviewList: [],
            newReview: '',
        };

        this.submitReview = this.submitReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    submitReview() {
        Axios.post('http://localhost:3001/api/insert', {
            movieName: this.state.movieName, movieReview: this.state.review
        }).then()
        this.setState({
            reviewList: [...this.state.reviewList, {movieName: this.state.movieName, movieReview: this.state.review}],
            movieName: ''
        });
    };


    deleteReview(movie)  {
        deleteRequest(movie).then((response) => {
            setTimeout(() => {
                this.getMovies();
            }, 1000);
        });
    }

    updateReview(movie) {
        Axios.put("http://localhost:3001/api/update", {
            movieName: movie,
            movieReview: this.state.newReview
        }).then();

        this.setState({
            newReview: ''
        }, () => {
            setTimeout(() => {
                this.getMovies();
            }, 1000);
        });
    }

    getMovies() {
        getRequest("movies").then((response) => {
            this.setState({
                reviewList: response.data
            });
        });
    }

    componentDidMount() {
        this.getMovies();
    }


    render() {
        //const [reviewList] = this.state;

        return(
            <Router>

                <div className={"appContainer"}>
                    <Header/>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>


                    </Switch>
                </div>


                <div className="App">
                    <h1>CRUD APPLICATION</h1>
                    <div className={"form"}>
                        <label>Movie Name</label>
                        <input type={"text"} name={"movieName"} onChange={(e) => {
                            this.setState({
                                movieName: e.target.value
                            })
                        }} />

                        <label>Review</label>
                        <input type={"text"} name={"review"}  onChange={(e) => {
                            this.setState({
                                review: e.target.value
                            })
                        }} />

                        <button onClick={this.submitReview.bind(this)} >Submit</button>
                    </div>

                    <div>========================</div>
                    <div>
                        <button onClick={this.getMovies.bind(this)} >Get Movies</button>
                        <ul className={'cardsList'}>
                            {this.state.reviewList.map((val, key) => {
                                return (
                                    <li key={key} className={'movieCardContainer'}>
                                        <div>Movie Name: {val.movieName}</div>
                                        <div>Review: {val.movieReview}</div>

                                        <button onClick={this.deleteReview.bind(this, val.movieName)}>Delete</button>
                                        <input type={'text'} onChange={(e) => {
                                                this.setState({
                                                    newReview: e.target.value
                                                })
                                            }}
                                        />
                                        <button onClick={this.updateReview.bind(this, val.movieName)}>Update</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
