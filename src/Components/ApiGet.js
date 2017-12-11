import React, { Component } from 'react';

import axios from 'axios';
import LocalServerGet from './LocalServerGet'

export default class ApiGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstPlace: {},
            search: '',
            secondPlace: {},
            playerNum: props.playerNum
        }
        this.handleChange = this.handleChange.bind(this)
        this.getCity = this.getCity.bind(this)
    }


    handleChange(e) {
        this.setState({ search: e })
    }

    getCity() {
        axios.get(`http://api.geonames.org/searchJSON?q=${this.state.search}&username=tpeschke`).then(res => {
            if (this.props.playerNum <= 1) {
                this.setState({ firstPlace: res.data.geonames[0] })
            } else { this.setState({ secondPlace: res.data.geonames[0] }) }
        })
        setTimeout(this.props.changeButton(), 500);
    }

    render() {

        return (
            <div className="apiGet">
                <div className="choosePlayer">
                <h1 id="player">Choose Player {this.state.playerNum}</h1>
                <input placeholder="Enter City Here" onChange={e => this.handleChange(e.target.value)} />
                </div>
                <div>
                    <LocalServerGet
                        playerNum={this.props.playerNum}
                        info1={this.state.firstPlace}
                        info2={this.state.secondPlace}
                        getCity={this.getCity} />
                </div>
            </div>
        )
    }
}