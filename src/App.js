import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';


export default class App extends Component {

  state = {
    searchInput: '',
    searchParamter: '',
  }

  handleParameterChange = e => {
    const parameter = e.target.value;
    this.setState({
      searchParamter: parameter
    })
  }

  handleInputChange = e => {
    const text = e.target.value;
    this.setState({
      searchInput: text
    })
  }

  render() {
    return (
      <>
        <Header />
      </>
    )
  }
}
