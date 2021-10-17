import React from 'react'
import BestBlog from '../component/BestBlog'
import Categories from '../component/Categories'
import Header from '../component/Header'
import HomeStories from '../component/HomeStories'
import './scss/Home.scss'

const Home = () => {
    return (
        <div>
            <Header />
            <Categories/>
            <HomeStories />
            <BestBlog />
        </div>
    )
}

export default Home
