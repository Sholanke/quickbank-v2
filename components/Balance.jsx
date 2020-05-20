import Toggle from '../components/Toggle-btn';

const balance = () => {
	return (
		<div className="db-section card">
			<div className="header">
				<p className="title">AVAILABLE BALANCE</p>
				<div className="toggle-rapper">Show amount <Toggle /></div>
			</div>

			<div className="amount">
				<div className="currency">NGN</div>
				<div className="big-text">91,890,820</div>
				<div className="small-text">.80</div>
			</div>

			<style>
            {`


            @media (max-width: 900px){
                .header .toggle-rapper {
                    font-size: 90%;
                }
            }


            .toggle-rapper{
                display: flex;
                align-items: center;
                line-height: 1;
            }
            .toggle-rapper .toggle-btn{
                margin-left: 10px;
            }
            .header .title
            {
                color: #737373;
                font-size: 80%;
                letter-spacing: 0;
                font-weight: 900;
            }
            .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .amount{
                display: flex;
                margin: 25px 0 12px 0;
                line-height: 1;
            }
            .amount .currency{
                margin-right: 5px;
                align-self: flex-end;
            }
            .amount .big-text{
                font-size: 35px;
                font-weight: 900;
                color: #121a39;
                letter-spacing: -.4px;
                line-height: 1;
                margin: 0 2px;
            }
            .amount .small-text{
                align-self: flex-end;
            }
            `}
			</style>
		</div>
	);
};

export default balance;
