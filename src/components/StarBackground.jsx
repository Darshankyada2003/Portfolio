import React, { useEffect, useState } from 'react'

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration


const StarBackground = () => {

    const [star, setStar] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStar();
        generateMeteors();

        const handleResize = () => {
            generateStar();
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const generateStar = () => {
        const numberOfStar = Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );

        const newStar = [];

        for (let i = 0; i < numberOfStar; i++) {
            newStar.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            })
        }
        setStar(newStar);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4;

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 4 + 5,
            })
        }
        setMeteors(newMeteors);
    }

    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {star.map((star) => (
                <div key={star.id} className='star animate-pulse-subtle'
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: star.x + '%',
                        top: star.y + '%',
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's',
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id} className='meteor animate-meteor'
                    style={{
                        animation: 'meteor 8s linear infinite',
                        width: meteor.size * 40 + 'px',
                        height: meteor.size * 2 + 'px',
                        left: meteor.x + '%',
                        top: meteor.y + '%',
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + 's',
                    }}
                />
            ))}
        </div>
    )
}

export default StarBackground
