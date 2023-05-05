import React, {Component} from 'react';
import Stars from './Stars.js'
import Reviews from './Reviews.js'
let stars = 0;
let reviewList = [];

export default class Movies extends Component{
    constructor(props) {
        super(props)
        this.movieArray = props.movies
      }

    render() {
        return(
           <>
            {this.movieArray.map((movie, index) => (
              <span key = {index}>
                <h5>{movie.title}</h5>
                <p>{movie.category}</p>
                <p>{movie.rating}</p>
                <Stars stars={stars}/>
                <h5>Reviews</h5>
                <Reviews reviewList={reviewList}/>
              </span>
            ))}
           </>
        )
    }
}