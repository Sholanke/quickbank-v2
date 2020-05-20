import React, { Component } from 'react';
import styles from './css/Sidebar.module.css';

export default class Sidebar extends Component {
	render() {
		return (
			<div className={styles.sidebar}>
				<div className="top">
					<p className={styles.logo}>Quick Bank</p>
					<div className="links">
						<a href="#" className={`${styles.link} ${styles.active}`}>
							<img src="https://quickbank.surge.sh/static/media/Home.32b946de.svg" alt="" srcset=""/>
							Home
						</a>
						<a href="#" className={`${styles.link}`}>
							<img src="https://quickbank.surge.sh/static/media/Transaction.f25de452.svg" alt="" srcset=""/>
							Transactions
						</a>
					</div>
				</div>

				<a href="#" className={`${styles.link}`}>
					<img src="https://quickbank.surge.sh/static/media/Payments.0c7a8670.svg" alt="" srcset=""/>
					Settings
				</a>
			</div>
		);
	}
}
