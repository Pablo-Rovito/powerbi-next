import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Demo report</title>
				<meta
					name='description'
					content='Report made with microsoft oData and no powerBI knowledge whatsoever 🤣'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Report</h1>
				<div>
					<iframe
						title='powerbi_example'
						width='1140'
						height='541.25'
						src='https://app.powerbi.com/reportEmbed?reportId=df153a86-f4e1-4be1-8adc-ffcb0ff47046&autoAuth=true&ctid=ac9904df-e513-42b5-b982-934f4317ab45&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
						frameBorder={0}
						allowFullScreen={true}></iframe>
				</div>
			</main>
		</div>
	);
}
