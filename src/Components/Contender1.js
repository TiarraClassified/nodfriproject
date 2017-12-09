import React, { Component} from 'react';


export default class Contender1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="contender1">
                <h1>Contender 1</h1>
                {/* <h1 key={this.props.info1.name}>{this.props.info1.name}, {this.state.info1.countryName}</h1> */}
            </div>
        )
    }

}