import React, { Component } from 'react';
import Activity from "../components/Activity"

export default class activities extends Component {
	render() {
		return (
			<div className="db-section">
				<div className="header">
					<div className="heading">Recent Activities</div>
				</div>
				<div className="activities-card">
                    <Activity sent/>
                    <Activity/>
                    <Activity sent/>
                    <Activity/>
                    <Activity sent/>
                    <Activity/>
                    <Activity sent/>
                </div>
                <style>{`
                .activities-card {
					background: #fff;
					padding: 24px;
					border-radius: 10px;
				}
				@media (max-width: 900px){ 
					.activities-card {
						padding: 20px;
					}
				}
				



                .activity{
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .activity .details{
                    text-align: right;
                }
            
                .activity .details .status.co-red{
                    color: red;
                }
                .activity .details .status.co-green{
                    color: #07b93e;
                }
                .activity:last-of-type{
                    margin-bottom: 0px;
                }
                .info{
                    display: flex;
                    align-items: center;
                }
                .info li p.type{
                    color: #121a39;
                    text-transform: capitalize;
                }
                .info li p:not(.type){
                    font-size: 16px;
                    margin-top: 7px;
                    color: #737373;
                }
                .info li {
                    line-height: 0;
                    margin: 0 26px;
                }
                .info li p{
                    line-height: 1;
                }
                .dp {
                    height: 42px;
                    width: 42px;
                    background: #e6f1f7;
                    color: #111b39;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
				}
				@media (max-width: 900px){
					.activity .details *{
                        font-size: 80%;
                    }
                    .info li {
                        margin: 0 0 0 10px;
                    }
				}
			
                `}</style>
			</div>
		);
	}
}
