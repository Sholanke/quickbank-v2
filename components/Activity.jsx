import React, { Component } from 'react';

export default class Activity extends Component {
	render() {
		return (
			<div className="activity">
				<div className="info">
					<span className="dp">OS</span>
					<li>
						<p className="type">Bank Transfer</p>
						<p>Tolu Faith ( GTBank )</p>
					</li>
				</div>

				<div className="details">
					<p className="cash">NGN8,600,000:00</p>
					<p className={this.props.sent ? `status co-red` : `status co-green`}>Sent</p>
				</div>

				
            
            </div>
		);
	}
}
