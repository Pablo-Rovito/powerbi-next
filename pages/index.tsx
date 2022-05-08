import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Next PowerBI demo integration</title>
				<meta
					name='description'
					content='Integration of Next PowerBI with some mockup data'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</h1>

				{/* 	<div>
					<PowerBIEmbed
						embedConfig={{
							type: 'report', // Supported types: report, dashboard, tile, visual and qna
							id: '<Report Id>',
							embedUrl:
								'https://app.powerbi.com/reportEmbed?reportId=5b218778-e7a5-4d73-8187-f10824047715&groupId=f089354e-8366-4e18-aea3-4cb4a3a50b48',
							accessToken: '<Access Token>',
							tokenType: models.TokenType.Embed,
							settings: {
								panes: {
									filters: {
										expanded: false,
										visible: false,
									},
								},
								background: models.BackgroundType.Transparent,
							},
						}}
						eventHandlers={
							new Map([
								[
									'loaded',
									function () {
										console.log('Report loaded');
									},
								],
								[
									'rendered',
									function () {
										console.log('Report rendered');
									},
								],
								[
									'error',
									function (event) {
										console.log(event.detail);
									},
								],
							])
						}
						cssClassName={'report-style-class'}
						getEmbeddedComponent={(embeddedReport) => {
							window.report = embeddedReport;
						}}
					/>
				</div> */}
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}
