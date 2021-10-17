import React from 'react'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'

import './scss/Header.scss'

const Header = () => {
    const img1 = 'https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_960_720.jpg'
    const img2 = 'https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg'
    const img3 = 'https://cdn.pixabay.com/photo/2021/01/05/06/40/boat-5889919_960_720.png'
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    }

    return (
        <div className="header">
            <Slider {...settings}>
                <div className="slick-div bg-sec" >
                    <div className="slick-content">
                        <div className="img-container">
                            <Fade left>
                            <img src={img1} alt="" />
                            </Fade>
                        </div>
                        <div className="content">
                            <article>
                                <Fade right>
                                <h1 className="heading">
                                    Don't Put Your Life
                                </h1>
                                </Fade>
                                <Fade right>
                                <Fade right>
                                <h1 className="h1">Enjoy Your life.</h1>
                                </Fade>
                                </Fade>
                                <Fade right>
                                <Fade right>
                                <Fade right>
                                <button className="btn">
                                    Read more
                                </button>
                                </Fade>
                                </Fade>
                                </Fade>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        
                        <div className="img-container">
                            <Fade left>
                            <img src={img2} alt="" />
                            </Fade>
                        </div>
                        <div className="content">
                            <article>
                                <Fade right>
                                <h1 className="heading">
                                    Find Your Own Way
                                </h1>
                                </Fade>
                                <Fade right>
                                <Fade right>
                                <h1 className="h1">on a waiting list.</h1>
                                </Fade>
                                </Fade>
                                <Fade right>
                                <Fade right>
                                <Fade right>
                                <button className="btn">
                                    Read more
                                </button>
                                </Fade>
                                </Fade>
                                </Fade>
                            </article>
                        </div>
                    </div>
                </div>
                <div className="slick-div bg-sec">
                    <div className="slick-content">
                        
                        <div className="img-container">
                            <Fade left>
                            <img src={img3} alt="" />
                            </Fade>
                        </div>
                        <div className="content">
                            <article>
                                <Fade right>
                                <h1 className="heading">
                                    Dream Big Live Big
                                </h1>
                                </Fade>
                                <Fade right>
                                <Fade right>
                                <h1 className="h1">To happiness.</h1>
                                </Fade>
                                </Fade>
                                <Fade right>
                                <Fade right>
                                <Fade right>
                                <button className="btn">
                                    Read more
                                </button>
                                </Fade>
                                </Fade>
                                </Fade>
                            </article>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Header
