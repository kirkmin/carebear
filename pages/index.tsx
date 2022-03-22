import Head from 'next/head';
import ParallaxRainbow from '../components/ParallaxRainbow/ParallaxRainbow';
import OtherStuff from '../components/OtherStuff/OtherStuff';
import { prefix } from '../utils/prefix';
import classes from '../styles/Home.module.scss'

const Home = () => {
    return (
        <div className={classes["home"]}>
            <img className={classes["background"]} src={`${prefix}/images/background.png`} />
            <Head>
                <title>Care Bear</title>
                <meta name="description" content="Care Bear" />
                <link rel="icon" href="/images/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <header>
                <img src={`${prefix}/images/header-logo.png`} className={classes["logo"]} />
                <nav className={classes["nav"]}>
                    <div className={classes["nav__center-links"]}>
                        <a>Shop All</a>
                        <a>New Arrivals</a>
                        <a>Best Sellers</a>
                        <a>Collabs</a>
                        <a>Collections</a>
                        <a>Sale</a>
                        <a>Rewards</a>
                    </div>
                    <div className={classes["nav__right-links"]}>
                        <a><svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><path d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.41 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.75 2.7 9.51 6 11.41v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"></path></svg></a>
                        <a><svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><path d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"></path></svg></a>
                        <a><svg aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 64 64"><g fill="none"><path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path><path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path></g></svg></a>
                    </div>
                </nav>
            </header>
            <main>
                <ParallaxRainbow />
                <OtherStuff />
            </main>
        </div>
    )
}

export default Home
