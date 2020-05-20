import React, { Component } from 'react';
import Action from './Action-btn';
import SInput from '../components/Stroked-input';
import BlueBtn from '../components/Blue-btn';

export default class QuickActions extends Component {
	render() {
		return (
			<div className="db-section quick-actions">
				<div className="header">
					<h1 className="heading">Quick Actions</h1>
				</div>
				<div className="cards">
					<Action title="Send Money" svg="https://quickbank.surge.sh/static/media/Money.518ff758.svg">
						<form
							onSubmit={(ev) => {
								ev.preventDefault();
							}}
						>
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<BlueBtn>Send Funds</BlueBtn>
						</form>
					</Action>

					<Action title="Buy Airtime" svg="https://quickbank.surge.sh/static/media/iPhone.5393a876.svg">
						<form
							onSubmit={(ev) => {
								ev.preventDefault();
							}}
						>
							<SInput placeholder="Enter Recepient" type="text" title="Name" />
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<BlueBtn>Send Funds</BlueBtn>
						</form>
					</Action>

					<Action title="Pay Bills" svg="https://quickbank.surge.sh/static/media/TV2.43ce2dcc.svg">
						<form
							onSubmit={(ev) => {
								ev.preventDefault();
							}}
						>
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<SInput placeholder="Enter name here" type="text" title="Name" />
							<BlueBtn>Send Funds</BlueBtn>
						</form>
					</Action>
					
				</div>
				<style>{`
                .cards{
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 39px;
				}
				@media (max-width: 900px){
					.cards {
						grid-template-columns: 1fr 1fr;
						grid-gap: 24px;
					}
				}
                .cards .card{
                    background: #fff;
					border-radius: 10px;
					padding: 20px;
                }
                `}</style>
			</div>
		);
	}
}
