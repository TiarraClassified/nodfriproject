import React, { Component } from "react"
import axios from 'axios';

import Contender1 from "./Contender1"


export default class LocalServerGet extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstPlace: props.info1,
            allWeapons: [],
        }
        
        this.weaponList = this.weaponList.bind(this)
        this.addToContender = this.addToContender.bind(this)
    }

    componentDidMount() {
        this.weaponList()
    }

    weaponList() {
        axios.get(`/api/weapons`).then(res => {
          this.setState( { allWeapons: res.data } )
      })
    }

    addToContender(d) {
    }

    render() {
        var list = this.state.allWeapons.map(d => {
            return <div>
                        <button key={d.name} onClick={this.addToContender(d.name)}>{d.name}</button>
                    </div>
        })

        return (
            <div>
                <Contender1 
                info1 = {this.state.firstPlace}/>
                {list}
            </div>
        )
    }
}
