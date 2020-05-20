import Layout from '../components/Layout';
import SideBar from '../components/Side-bar';
import DashboardContent from '../components/Dashboard-content';
import styles from '../components/css/app.module.css';
import Head from 'next/head';

const board = () => {
	return (
		<div className={styles.app}>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Harmattan&display=swap" rel="stylesheet" />
			</Head>
			<Layout>
				<SideBar />
				<DashboardContent />
			</Layout>
			
			<style>
				{`
				button{
					cursor: pointer;
				}
				`}
			</style>
		</div>
	);
};

export default board;
