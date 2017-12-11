import React, { Component } from 'react';
import fight from './Fight';

import Modal from 'react-responsive-modal'


export default class Contender1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            winner: ''
        };

        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this) 
        this.chooseWinner = this.chooseWinner.bind(this)       
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    chooseWinner() {
        var winner = fight(this.props.info1, this.props.info2, this.props.weapon1, this.props.weapon2);
        this.setState( { winner: winner } )
        setTimeout(this.onOpenModal(), 500);
    }

    render() {

        const { open } = this.state;

        return (
            <div className="contender">
                <div className="contendOver">
                    <div className="contendUnder">
                        <h1>Player 1</h1>
                        <h2 key={this.props.info2.name}>{this.props.info2.name}, {this.props.info2.countryName}</h2>
                        <h3>Equipped Weapon</h3>
                        <p id="para" key={this.props.weapon1.name}>{this.props.weapon1.name}</p>
                    </div>
                    <div className="contendUnder">
                        <h1>Player 2</h1>
                        <h2 key={this.props.info1.name}>{this.props.info1.name}, {this.props.info1.countryName}</h2>
                        <h3>Equipped Weapon</h3>
                        <p id="para" key={this.props.weapon2.name}>{this.props.weapon2.name}</p>
                    </div>
                </div>
                <button id="fightButton" onClick={this.chooseWinner}>FIGHT</button>

                <div>
                    <Modal open={open} onClose={this.onCloseModal} little>
                        <div className="modal">
                        <h1 id="modalhead">and the winner is...</h1>
                        <h2 id="modalwinner">{this.state.winner}</h2>
                        <div className="modalborder"></div>

                        </div>
                    </Modal>
                </div>
            </div>
        )
    }

}