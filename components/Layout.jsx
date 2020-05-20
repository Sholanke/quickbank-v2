import React, { Component } from 'react';
import style from "./css/layout.module.css";

export default class layout extends Component {
	render() {
		return (
			<div className={style.grid}>
				{this.props.children}
			</div>
		)
	}
}
