import React from 'react'
import "./common.css"
import ProductList from './ProductList'
import { Typewriter, useTypewriter } from "react-simple-typewriter";


const Home = () => {
    const { text } = useTypewriter({
        words: [" The Trends", " Clothes", " Jewelry", " Electronics"],
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 70,
        delaySpeed: 1000,
    });

    return (
        <div className="home">
            <div className='home_header'>
                <div className="home_text">
                    <h1>
                        New Season Arrivals
                    </h1>
                    <h3>
                        Check Out All <span className="animated_text">
                            {text}
                            <span className="cursor">|</span>
                        </span>
                    </h3>
                </div>
                <div className='home_img'>
                    <img src="https://cdn.dribbble.com/users/12601/screenshots/3554804/gif.gif" alt="funny GIF" />
                </div>
            </div>

            <div>
                <ProductList />
            </div>
            <div>
                Footer.......
            </div>

        </div>
    )
}

export default Home;