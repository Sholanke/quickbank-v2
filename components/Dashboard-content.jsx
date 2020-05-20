import React, { Component } from 'react';
import Balance from '../components/Balance';
import Greeting from '../components/Greeting';
import QuickActions from '../components/Quick-actions';
import Activities from './Activities';

export default class DashboardContent extends Component {
	render() {
		return (
			<div>
				<div className="content">
					<Greeting />
					<Balance />
					<QuickActions />
					<Activities />
				</div>
				<style>{`
                
                .content {
                    padding: 54px 0;
                    overflow: auto;
                    height: 100vh;
                    box-sizing: border-box;
                }
                .greeting h1{
                    font-weight: 900;
                    font-size: 25px;
                    line-height: 1;
                    color: #121a39;
                    display: flex;
                    align-items: center;
                }
                .greeting p{
                    padding: 12px 0 0 0; 
                }
                `}</style>
			</div>
		);
	}
}
