import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Lottiecomponent = () => {

    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../coding-lotte.json')
        });

        return () => {
            lottie.destroy();
        };
    }, [])

    return (
        <div className="container w-full" ref={container}>
        </div>
    );
};

export default Lottiecomponent;