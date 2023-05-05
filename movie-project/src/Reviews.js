import React, { Component } from 'react'

export default class Reviews extends Component{
    constructor(props){
        super(props)
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reviewList = props.reviewList;
    }

    handleSubmit(event) {
        event.preventDefault();
        let review = { value: this.element.value }
        this.reviewList.push(review)
        this.setState(this.reviewList)
      }    

    render() {
        return(
           <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                <input type="text" ref={el => this.element = el} />
                </label>
                <input type="submit" value="Submit" />
            </form>      
            {this.reviewList.map((review, index) => (
              <div key = {index}>
                <p>{review.value}</p>
              </div>
            ))}
           </div>
        )
    }


}