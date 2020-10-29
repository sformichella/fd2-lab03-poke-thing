import React, { Component } from 'react'

export default class PokeFrame extends Component {
    render() {
        return (
            <div className="pokeframe">
                <p>
                    {this.props.name}
                </p>
                <section>
                    <img src={this.props.source} alt=""></img>
                    <span>Type One: {this.props.type1}</span>
                    <span>Type Two: {this.props.type2}</span>
                    <span>Attack: {this.props.attack}</span>
                    <span>Defense: {this.props.defense}</span>
                </section>
            </div>
        )
    }
}
