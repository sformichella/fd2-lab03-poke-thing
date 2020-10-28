import React, { Component } from 'react';
import PokeFrame from './PokeFrame.js';

export default class PokeList extends Component {

    filteredPokemon = this.props.data.filter(pokemon => {
        return pokemon.pokemon === this.props.state.searchInput;
    })

    render() {

        return (
            <div className="pokelist">
                {
                    this.filteredPokemon.map(pokemon => {
                        return <PokeFrame
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
