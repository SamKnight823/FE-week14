import React, { Component } from 'react'
	
export default class Stars extends Component {
constructor(props){
	super(props)
		
	// Set initial state
	this.state = {greeting :
		'How Many Stars Would You Give?'}
		
	// Binding this keyword
	this.updateState = this.updateState.bind(this)
    this.updateState2 = this.updateState2.bind(this)
    this.updateState3 = this.updateState3.bind(this)
    this.updateState4 = this.updateState4.bind(this)
    this.updateState5 = this.updateState5.bind(this)
}
	
updateState(){
	// Changing state
	this.setState({greeting :
				'You Gave 1 Star'})
}
updateState2(){
	// Changing state
	this.setState({greeting :
				'You Gave 2 Stars'})
}
updateState3(){
	// Changing state
	this.setState({greeting :
				'You Gave 3 Stars'})
}
updateState4(){
	// Changing state
	this.setState({greeting :
				'You Gave 4 Stars'})
}
updateState5(){
	// Changing state
	this.setState({greeting :
				'You Gave 5 Stars'})
}
	
render(){
	return (
	<div>
	<p>{this.state.greeting}</p>
	<span><button onClick={this.updateState}>
		1 Star
		</button>
    </span>
	<span><button onClick={this.updateState2}>
		2 Stars
		</button>
    </span>
    <span><button onClick={this.updateState3}>
		3 Stars
		</button>
    </span>
    <span><button onClick={this.updateState4}>
		4 Stars
		</button>
    </span>
    <span><button onClick={this.updateState5}>
		5 Stars
		</button>
    </span>
	</div>
	)
}
}

