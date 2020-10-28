import React, { Component } from 'react';
import PokeFrame from './PokeFrame.js';

export default class PokeList extends Component {

    render() {

        const filteredPokemon = this.props.data.filter(poke => {
            if (!this.props.textInput) return true;
    
            return poke.pokemon === this.props.textInput;
        })

        return (
            <div className="pokelist">
                {
                    filteredPokemon.map(pokemon => {
                        return <PokeFrame
                            key = {pokemon.pokemon}
                            name = {pokemon.pokemon}
                            type1 = {pokemon.type_1}
                            type2 = {pokemon.type_2}
                            attack = {pokemon.attack}
                            defense = {pokemon.defense}
                            source = {pokemon.url_image}
                        />
                    })
                }
            </div>
        )
    }
}
