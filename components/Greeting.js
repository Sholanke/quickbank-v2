export default () => {
	return (
		<div>
			<div className="greeting">
				<h1>Hello, Christian Nwamba <img src="https://quickbank.surge.sh/static/media/hand.71a0394c.svg"/> </h1>
				<p>Welcome to Quick Bank Dashboard</p>
			</div>
			<style>{`
            
            .content {
                padding: 54px 0;
            }
            .greeting h1{
                font-weight: 900;
                font-size: 25px;
                line-height: 1;
                color: #121a39;
                display: flex;
                align-items: center;
            }
            .greeting h1 img{
                margin: -5px 0 0 10px;
                display: block;
            }
            .greeting p{
                padding: 12px 0 0 0; 
            }
            `}</style>
		</div>
	);
};
