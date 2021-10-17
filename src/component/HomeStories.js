import React from 'react'
import './scss/HomeStories.scss'
import {FaRegEye} from 'react-icons/fa'
import {useGlobalContext} from '../hook/context'
import { useHistory } from 'react-router'

const HomeStories = () => {
    const category = ['travel', 'story', 'inspiration', 'lifestyle'];
    const list = category.sort(() => Math.random() - Math.random()).slice(0, 2);
    const {loading} = useGlobalContext();
    const location = useHistory();
    
    const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    if (loading) {
        return(
            <div className="secondary-section">
                <h4 className="h4">Loading....</h4>
            </div>
        )
    }

    return (
        <div>
            <div className="homeStories secondary-section">
                <div className="stories-header title-section">
                    <div className="title-container">
                        <h2 className="title">Stories From The Road</h2>
                    </div>
                </div>
                <div className="stories-container">
                    <div className="story">
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2014/09/21/17/56/mountaineering-455338_960_720.jpg" alt="" />
                            <span className="date">March 30, 2020</span>
                            <div className="types">
                                <ul>
                                    {category.sort(() => Math.random() - Math.random()).slice(0, getRndInteger(1,2)).map((item,ind) => {
                                        return(
                                            <li key={ind}><a href="#">{item}</a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <button className="view-btn" onClick={() => location.push('/singleblog')}>
                                <FaRegEye />
                            </button>
                        </div>
                        <div className="content">
                            <h4 className="h4" onClick={() => location.push('/singleblog')}>Top 10 remote destinations to see in your lifetime.</h4>
                        </div>
                    </div>
                    <div className="story">
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781_960_720.jpg" alt="" />
                            <span className="date">March 30, 2020</span>
                            <div className="types">
                                <ul>
                                    {category.sort(() => Math.random() - Math.random()).slice(0, getRndInteger(1,2)).map((item,ind) => {
                                        return(
                                            <li key={ind}><a href="#">{item}</a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <button className="view-btn" onClick={() => location.push('/singleblog')}>
                                <FaRegEye />
                            </button>
                        </div>
                        <div className="content">
                            <h4 className="h4" onClick={() => location.push('/singleblog')}>10 Tips on How to Save for travel.</h4>
                        </div>
                    </div>
                    <div className="story">
                        <div className="img-container">
                            <img src="https://cdn.pixabay.com/photo/2021/08/02/19/22/temple-of-hercules-6517635_960_720.jpg" alt="" />
                            <span className="date">March 30, 2020</span>
                            <div className="types">
                                <ul>
                                    {category.sort(() => Math.random() - Math.random()).slice(0, getRndInteger(1,2)).map((item,ind) => {
                                        return(
                                            <li key={ind}><a href="#">{item}</a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <button className="view-btn" onClick={() => location.push('/singleblog')}>
                                <FaRegEye />
                            </button>
                        </div>
                        <div className="content">
                            <h4 className="h4" onClick={() => location.push('/singleblog')}>Best road trip around the world.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStories
