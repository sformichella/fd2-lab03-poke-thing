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
	  currentSearchParam: 'Name',
	
    passedTextInput: '',
	  passedSearchParamter: '',
	
    sortOrder: 'ascending',
    sortType: ''
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

  sortOrderHandler = e => {
	  const order = e.target.value;
	  
	  this.setState({
		  sortOrder: order
	  })
  }

  sortTypeHandler = e => {
    const type = e.target.value;

    this.setState({
      sortType: type
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
			<div className="search-criteria">
				<p>Search Criteria</p>

				<SearchSelections 
					criteria = {this.searchCriteria}
					handler = {this.handleParameterChange}
					selected = {this.state.currentSearchParam}
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
        sortOrder = {this.state.sortOrder}
        sortType = {this.state.sortType}
        sortHandler = {this.sortOrderHandler}
        typeHandler = {this.sortTypeHandler}
			/>
		</div>
		</>
    )
  }
}
