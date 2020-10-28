import React, { Component } from 'react'

export default class SearchInput extends Component {

    render() {
        return (
            <div>
                <input 
                    onChange = {this.props.handler}
                    placeholder = {'All Pokemon'}
                />
            </div>
        )
    }
}
