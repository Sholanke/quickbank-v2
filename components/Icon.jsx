import React, { Component } from 'react'

export default class Icon extends Component {
    render() {
        return (
            <div>
                <span className="icon-rapper">
                    <img src={this.props.svg} alt=""/>
                </span>

                <style>{`
                .icon-rapper {
                    height: 45px;
                    width: 45px;
                    border-radius: 10px;
                    background: #f8fafb;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                }
                
                
                `}</style>
                
            </div>
        )
    }
}
