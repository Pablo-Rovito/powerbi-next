import Head from 'next/head';
import styles from './demo.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

export default function Demo() {
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
			<header className={styles.header}>
				<Link href='/'>
					<a>
						<FontAwesomeIcon
							icon={faHouseChimney}
							className={styles.icon}
						/>
					</a>
				</Link>
				<h1>Report</h1>
			</header>
			<main className={styles.main}>
				<div>
					<iframe
						title='powerbi_example'
						width='900'
						height='auto'
						src='https://app.powerbi.com/reportEmbed?reportId=df153a86-f4e1-4be1-8adc-ffcb0ff47046&autoAuth=true&ctid=ac9904df-e513-42b5-b982-934f4317ab45&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXBhYXMtMS1zY3VzLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9'
						frameBorder={0}
						allowFullScreen={false}></iframe>
				</div>
			</main>
			<footer className={styles.footer}>
				<span>
					<ul className={styles.contact}>
						<li>
							<a href='https://api.whatsapp.com/send?phone=5492255570472'>
								<Image
									priority
									src='/images/WP.svg'
									className={styles.icon}
									height={30}
									width={30}
									alt=''
								/>
							</a>
						</li>
						<li>
							<a href='http://www.linkedin.com/in/pablo-rovito-fullstack-dev'>
								<Image
									priority
									src='/images/LIn.svg'
									className={styles.icon}
									height={30}
									width={30}
									alt=''
								/>
							</a>
						</li>
						<li>
							<a href='https://github.com/Pablo-Rovito'>
								<Image
									priority
									src='/images/GitHub-Mark-64px.png'
									className={styles.icon}
									height={30}
									width={30}
									alt=''
								/>
							</a>
						</li>
						<li>
							<a href='mailto: pablo.rovito@outlook.com'>
								<Image
									priority
									src='/images/gmail.svg'
									className={styles.icon}
									height={30}
									width={30}
									alt=''
								/>
							</a>
						</li>
					</ul>
				</span>
				<span style={{ color: 'black', opacity: '50%' }}>
					Powered by{' '}
					<Image
						src='/vercel.svg'
						alt='Vercel Logo'
						width={72}
						height={16}
					/>
				</span>
			</footer>
		</div>
	);
}
