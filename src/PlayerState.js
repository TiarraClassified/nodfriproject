import React, { Component } from "react"

import ApiGet from "./Components/ApiGet";

export default class PlayerState extends Component {
    constructor() {
        super()


        this.state = {
            button: 'Choose First Contender',
            playerNum: 1
        }

        this.changeButton = this.changeButton.bind(this)

    }

    changeButton() {
        if (this.state.button === "Choose First Contender") {
            this.setState({ button: "Choose Second Contender" })
            this.setState({ playerNum: 2 })
        } else {
            this.setState({ button: "Choose First Contender" })
            this.setState({ playerNum: 1 })
        }
    }

    render() {

        return (
           <div className="playerState">
                <ApiGet 
                playerNum = {this.state.playerNum}
                changeButton = {this.changeButton}/>
            </div>            
        )
    }


}