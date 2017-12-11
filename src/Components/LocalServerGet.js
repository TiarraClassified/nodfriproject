import React, { Component } from "react"
import axios from 'axios';

import Contender1 from "./Contender1"


export default class LocalServerGet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allWeapons: [],
            name: '',
            attack: 0,
            weapon1: {},
            weapon2: {}
        }

        this.weaponList = this.weaponList.bind(this)
        this.handleAttack = this.handleAttack.bind(this)
        this.handleName = this.handleName.bind(this)
        this.addToWeapons = this.addToWeapons.bind(this)
        this.deleteWeapon = this.deleteWeapon.bind(this)
        this.updateWeapon = this.updateWeapon.bind(this)
        this.addWeaponToFighter = this.addWeaponToFighter.bind(this)
    }

    componentDidMount() {
        this.weaponList()
    }

    weaponList() {
        axios.get(`/api/weapons`).then(res => {
            this.setState({ allWeapons: res.data })
        })
    }

    addToWeapons() {
        const { name } = this.state;
        const { attack } = this.state;
        axios.post('/api/weapons', { name, attack }).then(res => {
            this.setState({ allWeapons: res.data })
        })
    }

    deleteWeapon(id) {
        axios.delete(`/api/weapons/${id}`).then(res => {
            this.setState({ allWeapons: res.data });
        });
    }

    updateWeapon(id) {
        axios.put(`/api/weapons/`, id).then(res => {
            this.setState({ allWeapons: res.data }, _ => alert(`${id.name} has been updated`))
        })
    }

    handleName(e) {
        this.setState({ name: e })
    }

    handleAttack(e) {
        this.setState({ attack: e })
    }

    addWeaponToFighter(d) {
        if (this.props.playerNum === 1) {
            this.setState({ weapon1: d })
        } else {
            this.setState({ weapon2: d })
        }
    }

    render() {



        var list = this.state.allWeapons.map(d => {
            return <div key={d.name}>
                <button onClick={() => this.addWeaponToFighter(d)}>{d.name}</button>
                <button onClick={() => this.deleteWeapon(d)}>-</button>
            </div>
        })

        return (
            <div className="localServer">

                <div className="border">
                </div>

                <div>
                    <div className="serverDiv" id="list">
                    <h4>Weapon Selection</h4>
                        {list}
                    </div>

                    <div className="border">
                    </div>
                    <div className="serverDiv">
                
                        <input placeholder="Weapon Name" onChange={e => this.handleName(e.target.value)} />
                        <input placeholder="Weapon Modifier" onChange={e => this.handleAttack(e.target.value)} />
                    </div>
                    <div className="serverDiv">
                        <button id="weaponButton" onClick={_ => this.addToWeapons()}>Add New</button>
                        <button id="weaponButton" onClick={_ => this.updateWeapon({ name: this.state.name, attack: this.state.attack })}>Updated Weapon</button>
                    </div>
                    <div className="border">
                    </div>
                    <div className="serverDiv">
                        <button id="chooseButton" onClick={() => this.props.getCity()}>Choose Player {this.props.playerNum}</button>
                    </div>
                </div>
                <div className="border">
                </div>
                <div>
                    <Contender1
                        info1={this.props.info1}
                        info2={this.props.info2}
                        weapon1={this.state.weapon1}
                        weapon2={this.state.weapon2} />
                </div>
            </div>
        )
    }
}
