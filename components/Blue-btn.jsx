import React, { Component } from 'react'

export default class BlueBtn extends Component {
    render() {
        return (
        <button className="blue-btn long">{this.props.children}</button>
        )
    }
}
