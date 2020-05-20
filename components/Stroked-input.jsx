import React, { Component } from 'react';

export default class StrokedInput extends Component {
	render() {
		return (
			<div className="stroked-input-rapper">
				<p className="title">{this.props.title}</p>
				<input type={this.props.type} className="stroked-input" placeholder={this.props.placeholder} />
				<style>{`
				.stroked-input-rapper {
					margin-bottom: 16px;
				}
				`}</style>
			</div>
		);
	}
}
