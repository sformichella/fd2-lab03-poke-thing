import React, { Component } from 'react';
import PokeFrame from './PokeFrame.js';

export default class PokeList extends Component {

    render() {

        const filteredPokemon = this.props.data.filter(poke => {
            if (!this.props.textInput) return true;

            const convertCriterion= {
                'Name': 'pokemon',
                'Type One': 'type_1',
                'Type Two': 'type_2'
            }

            const criterion = convertCriterion[this.props.parameter]
    
            return poke[criterion] === this.props.textInput;
        }).sort((a, b) => {
            if (this.props.sortOrder === 'ascending') {
                return a[this.props.sortType] > b[this.props.sortType]
            } else {
                return b[this.props.sortType] > a[this.props.sortType]
            }
        })


        return (
            <div className="pokelist-container">
                <select onChange = {this.props.typeHandler}>
                    <option value="">None</option>
                    <option value="type_1">Type One</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                    <option value="health">Health</option>
                </select>
                <select onChange = {this.props.sortHandler}>
                    <option value="ascending">Asceding</option>
                    <option value="descending">Descending</option>
                </select>
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
            </div>
        )
    }
}
