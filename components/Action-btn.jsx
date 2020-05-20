import React, { Component } from 'react';
import Icon from '../components/Icon';

export default class actionBtn extends Component {
	formRapper = React.createRef();

	showForm = () => {
		// this.formRapper.current.style.display = 'block';
		this.formRapper.current.classList.add('show');
	};
	hideForm = () => {
		// this.formRapper.current.style.display = 'none';
		this.formRapper.current.classList.remove('show');
	};

	render() {
		return (
			<div>
				<div className="card action-btn" onClick={this.showForm}>
					<Icon svg={this.props.svg} /> <p className="title">{this.props.title}</p>
				</div>
				<div className="action-form-container" ref={this.formRapper}>
					<button className="big-btn bg" onClick={this.hideForm} />
					<div className="form">
						<button className="cls-btn" onClick={this.hideForm}>
							<img src="https://quickbank.surge.sh/static/media/Close.377ba40f.svg" alt="" />
						</button>
						<div className="heading-rapper">
							<Icon svg={this.props.svg} />
							<p className="heading">{this.props.title}</p>
						</div>
						{this.props.children}
						<button className="centered co-blue">Cancel Transaction</button>
					</div>
				</div>
				<style>
					{`
                    .big-btn{
                        height: 100%;
                        width: 100%;
                        position: fixed;
                        top: 0;
                        left: 0;
                        background: #0000002b;
                        cursor: unset;
                    }
                    .heading-rapper {
                        display: flex;
                        align-items: center;
                        margin-bottom: 30px;
                    }
                    .action-form-container .heading{
                    }
                    .cls-btn{
                        height: 40px;
                        width: 40px;
                        background: #f8fafb;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100vh;
                        margin: 20px 0 50px 0;
                        margin-left: auto;
                    }
                    .action-form-container {
                        position: fixed;
                        z-index: 10;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        box-sizing: border-box;

                        opacity: 0;
                        pointer-events: none; 
                    }
                    .action-form-container.show{
                        opacity: 1;
                        pointer-events: unset; 
                    }
                    .action-form-container.show .form{
                        animation-name: slideIn;
                        animation-duration: .3s;
                    }
                    .action-form-container .form{
                        max-width: 400px;
                        background: #fff;
                        height: 100%;
                        overflow: auto;
                        margin: 0 0 0 auto;
                        padding: 20px 30px;
                        position: relative;
                        z-index: 1;
                    }
                    .card.action-btn{
                        cursor: pointer;
                        text-align: center;
                        display: flex;
                        align-items: center; 
                    }
                    .card.action-btn p{
                        width: calc(100% - 50px);
                        line-height: 1;
                        text-align: left;
                    }
                    .card.action-btn .title{
                        font-size: 110%;
                        color: #121a39;
                        opacity: .8;
                    }
                    @media (max-width: 900px){
                        .card.action-btn .title{
                            font-size: 100%;
                        }
                    }
                    
                    `}
				</style>
			</div>
		);
	}
}
