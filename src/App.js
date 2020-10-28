import React, {Component} from 'react';
import './App.css';
import pokeData from './pokemonArray.js';
import Header from './Header.js';
import SearchSelections from './SearchSelections.js';
import SearchInput from './SearchInput.js';
import SearchButton from './SearchButton.js';
import PokeList from './PokeList.js';


export default class App extends Component {

  state = {
    currentTextInput: '',
    currentSearchParam: '',
    passedTextInput: '',
    passedSearchParamter: '',
  }

  handleParameterChange = e => {
    const parameter = e.target.value;

    this.setState({
      currentSearchParam: parameter
    })
  }

  handleInputChange = e => {
    const text = e.target.value;

    this.setState({
      currentTextInput: text
    })
  }

  handleSearchSubmit = () => {
    const newTextInput = this.state.currentTextInput;
    const newSearchParam = this.state.currentSearchParam;
    
    this.setState({
      passedTextInput: newTextInput,
      passedSearchParam: newSearchParam
    })
  }

  searchCriteria = [
    'Name',
    'Type One',
    'Type Two'
  ]

  render() {
    return (
      <>
        <Header />
        <div className="main">
          <div>
            <p>Search Criteria</p>
            <SearchSelections 
              criteria = {this.searchCriteria}
              handler = {this.handleParameterChange}
            />
            <SearchInput 
              handler = {this.handleInputChange}
            />
            <SearchButton 
              handler = {this.handleSearchSubmit}
            />
          </div>
          <PokeList 
            data = {pokeData}
            textInput = {this.state.passedTextInput}
            parameter = {this.state.passedSearchParam}
          />
        </div>
      </>
    )
  }
}
