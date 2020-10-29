import React, { Component } from 'react'

export default class SearchForm extends Component {
    render() {
        return (
            <form onSubmit = {this.props.handler}>
                <input placeholder = "All Pokemon"/>
                <button>Submit</button>
            </form>
        )
    }
}
