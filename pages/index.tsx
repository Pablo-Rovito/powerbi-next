import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { MouseEvent } from 'react';

export default function Home() {
	const [logIn, setLogIn] = useState<boolean>(false);
	const [userName, setUserName] = useState<String>('Log In...');
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		!logIn ? setUserName('Hi user!') : setUserName('Log In...');
	}, [logIn]);

	function handleLogin(
		e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
	) {
		e.preventDefault();
		setLogIn(() => true);
	}

	function handleClick(
		e: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
	) {
		e.preventDefault();
		setLogIn(() => false);
		setCount((prev) => prev + 1);
	}

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
			<header className={styles.header}>
				<span className={styles.topLeft}>Company</span>
				<span className={styles.topCenter}>
					<Link href='/report/demo'>
						<a>Show report</a>
					</Link>
				</span>
				<span
					onClick={!logIn ? (e) => handleLogin(e) : null}
					className={styles.topRight}>
					{!count ? 'Log in...' : userName}
					<FontAwesomeIcon
						className={styles.icon}
						icon={faCircleUser}
					/>
				</span>
			</header>
			<main className={styles.main}>
				<h1 className={styles.title}>
					PowerBI-NextJS-Typescript integration
				</h1>
				<br />
				<p>
					I did this page with the purpose of getting familiar with
					NextJS and Typescript.
				</p>
				<br />
				<p>
					It seemed like a good opportunity for giving a potential use
					as a page for showing PowerBI reports as an in-house,
					user-friendly dashboard.
				</p>

				<div
					className={
						logIn ? styles.logInActive : styles.logInInactive
					}>
					<p>
						If PowerBI were embedded, this pop-up would display a
						Microsoft Authentication Service. For now, just click Ok
						and let&apos;s pretend you are nicely and securely
						logged in
					</p>
					<button onClick={(e) => handleClick(e)}>Ok</button>
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
