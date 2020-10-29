import React, { Component } from 'react'

export default class SearchSelections extends Component {
    render() {
        return (
            <div>
                {
                    this.props.criteria.map(criterion => {
                        if (criterion === 'Name') {
                            return <label key = {criterion}>
                                <input
                                        defaultChecked
                                        onChange = {this.props.handler}
                                        type = "radio"
                                        name = "search-criteria"
                                        value = {criterion}
                                /> {criterion}
                            </label>
                        }
                        return <label key = {criterion}>
                            <input
                                    onChange = {this.props.handler}
                                    type = "radio"
                                    name = "search-criteria"
                                    value = {criterion}
                            /> {criterion}
                        </label>
                    })
                }
            </div>
        )
    }
}
