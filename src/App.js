import React, { useState } from 'react';
import "./style/scss/ui.css";
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Header from "./component/Header";


function App() {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');

  const [reviewList, setReviewList] = useState([]);

  const submitReview = () => {
      Axios.post('http://localhost:3001/api/insert', {
        movieName: movieName, movieReview: review
      }).then(() => {
        alert("successful insert");
      })
  }
  const getMovies = () => {
      Axios.get('http://localhost:3001/movies').then((response) => {
          setReviewList(response.data);
      })
  }

  return (
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
                      setMovieName(e.target.value);
                    }} />

                    <label>Review</label>
                    <input type={"text"} name={"review"}  onChange={(e) => {
                      setReview(e.target.value);
                    }} />

                    <button onClick={submitReview} >Submit</button>
                </div>

                <div>========================</div>
                <div>
                    <button onClick={getMovies} >Get Movies</button>
                    <ul>
                        {reviewList.map((val, key) => {
                            return (
                                <li key={key}>
                                    <div>Movie Name: {val.movieName}</div>
                                    <div>Review: {val.movieReview}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
      </Router>
  );
}

export default App;
