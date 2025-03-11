import { useEffect, useState } from 'react';
import './hero.css';

import { data } from './data.js'

const Hero = () => {


    const [count, setCount] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCount(prevCount => (prevCount + 1) % data.length);

        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="container__hero">
                <div className="container__title">
                    <h1>Creando sabores memorables, una receta a la vez.</h1>
                    <button className='button__hero'>Cocinemos Juntos</button>
                </div>

                <div className="container__img">
                    <img
                        key={data[count].id}
                        src={data[count].imgUrl}
                        alt={`Imagen ${count + 1}`}
                    />
                </div>
            </div>
        </>
    )
}
export default Hero