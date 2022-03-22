import React, { useEffect, useRef } from "react";
import { prefix } from "../../utils/prefix";
import { throttle, easeIn } from "../../utils/utils";
import classes from './ParallaxRainbow.module.scss';

const ParallaxRainbow = () => {
    const rainbowEl = useRef<HTMLDivElement|null>(null);
    const slidingBearEl = useRef<HTMLImageElement|null>(null);
    const hangingBearEl = useRef<HTMLImageElement|null>(null);
    const sunEl = useRef<HTMLImageElement|null>(null);
    const castleEl = useRef<HTMLImageElement|null>(null);
    const rainbowRect = useRef<DOMRect>();
    const slidingBearRect = useRef<DOMRect>();
    const hangingBearRect = useRef<DOMRect>();
    const sunRect = useRef<DOMRect>();
    const castleRect = useRef<DOMRect>();

    useEffect(() => {
        window.addEventListener('resize', throttledResizeHandler);
        window.addEventListener('scroll', throttledScrollHandler);
        throttledResizeHandler();
        
        return () => {
            window.removeEventListener('resize', throttledResizeHandler);
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);

    const throttledResizeHandler = throttle(() => { resizeHandler() }, 100);
    const resizeHandler = () => {
        rainbowRect.current = rainbowEl.current!.getBoundingClientRect();
        slidingBearRect.current = slidingBearEl.current!.getBoundingClientRect();
        hangingBearRect.current = hangingBearEl.current!.getBoundingClientRect();
        sunRect.current = sunEl.current!.getBoundingClientRect();
        castleRect.current = castleEl.current!.getBoundingClientRect();
        throttledScrollHandler();
    }

    const throttledScrollHandler = throttle(() => { scrollHandler() }, 10);

    const scrollHandler = () => {
        if (!rainbowRect.current) return;
        const percent = window.scrollY / (rainbowRect.current!.bottom - (rainbowRect.current!.height / 2)); // number between 0 to 1 depending on scroll position to determine parallax completion percentage.
        if (percent >= 2) return;
        slidingBearHandler(percent);
        hangingBearHandler(percent);
        sunHandler(percent);
        castleHandler();
    };

    const slidingBearHandler = (percent: number) => {
        const rainbowBearEq = (x: number) => (3 * Math.pow(x, 2)) - (2 * x) + 0.5; // x is from 0 to .4
        const x = (1 - percent) * 0.3;
        const y = rainbowBearEq(x);
        const top = y * rainbowRect.current!.height;
        const left = x * rainbowRect.current!.width;
        const opacity = easeIn(1 - Math.max(percent - .5, 0) * 2);
        slidingBearEl.current!.style.top = `${top - slidingBearRect.current!.height}px`;
        slidingBearEl.current!.style.left = `${left - slidingBearRect.current!.width}px`;
        slidingBearEl.current!.style.opacity = `${opacity}`;
    };

    const hangingBearHandler = (percent: number) => {
        const top = -(percent + 1) * hangingBearRect.current!.height;
        hangingBearEl.current!.style.top = `${top}px`;
        hangingBearEl.current!.style.left = `${rainbowRect.current!.width * .7}px`;
        hangingBearEl.current!.style.opacity = "1";
    };

    const sunHandler = (percent: number) => {
        const rotate = 5 * Math.sin(percent * 5 * Math.PI);
        sunEl.current!.style.transform = `rotate(${rotate}deg)`;
        sunEl.current!.style.top = `${-sunRect.current!.height}px`
        sunEl.current!.style.left = `${rainbowRect.current!.width - sunRect.current!.width}px`;
        sunEl.current!.style.opacity = "1";
    };

    const castleHandler = () => {
        castleEl.current!.style.left = `${(rainbowRect.current!.width / 2) - (castleRect.current!.width / 2)}px`;
        castleEl.current!.style.top = `${-(castleRect.current!.height / 2)}px`;
        castleEl.current!.style.opacity = "1";
    };

    return (
        <div className={classes["parallax-rainbow"]} ref={rainbowEl}>
            <img src={`${prefix}/images/rainbow-background.png`} className={classes["parallax-rainbow__background"]} />
            <img src={`${prefix}/images/sliding-bear.png`} className={classes["parallax-rainbow__sliding-bear"]} ref={slidingBearEl} />
            <img src={`${prefix}/images/hanging-bear.png`} className={classes["parallax-rainbow__hanging-bear"]} ref={hangingBearEl} />
            <img src={`${prefix}/images/sun.png`} className={classes["parallax-rainbow__sun"]} ref={sunEl} />
            <img src={`${prefix}/images/castle.png`} className={classes["parallax-rainbow__castle"]} ref={castleEl} />
        </div>
    )
};

export default ParallaxRainbow;