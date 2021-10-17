import React from 'react'
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaPinterestP} from 'react-icons/fa'
import { useHistory } from 'react-router'
import './scss/BestBlog.scss'

const BestBlog = () => {
    const location = useHistory();
    return (
        <div className="secondary-section BestBlogs">
            <div className="stories-header title-section">
                <div className="title-container">
                    <h2 className="title">Popular posts</h2>
                </div>
            </div>
            <div className="blog-container">
                <div className="blog">
                    <div className="img-container" onClick={() => location.push('/singleblog')}>
                        <img src="https://cdn.pixabay.com/photo/2020/12/29/23/08/horses-5871847_960_720.jpg" alt="" />
                    </div>
                    <div className="content">
                        <article>
                            <span className="type">Stories</span>
                            <h2 className="h2" onClick={() => location.push('/singleblog')}>Wine O'Clock: per aspera ad astra</h2>
                            <span className="date">SEPTEMBER 22, 2019</span>
                            <p>These people aren’t assigned to us, but chosen by us—and isn’t that as worthy of celebration as any confluence of fate and genetics? These carefully selected families continue to grow throughout our lives without a ticking sociological to worry about.</p>
                            <button className="btn" onClick={() => location.push('/singleblog')}>Continue Reading</button>
                            <div className="comment-sec">
                                <div className="comment">
                                    <span>5 comment</span>
                                </div>
                                <div className="social-link">
                                    <ul>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaGooglePlusG /></a></li>
                                        <li><a href="#"><FaPinterestP /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="blog">
                    <div className="img-container" onClick={() => location.push('/singleblog')}>
                        <img src="https://cdn.pixabay.com/photo/2020/12/15/14/35/girl-5833835_960_720.jpg" alt="" />
                    </div>
                    <div className="content">
                        <article>
                            <span className="type">Stories</span>
                            <h2 className="h2" onClick={() => location.push('/singleblog')}>Contemporary OutDoor Culture</h2>
                            <span className="date">SEPTEMBER 22, 2019</span>
                            <p>It’s true that in some environments, the practice of creative skills isn’t encouraged and may be actively discouraged. In some places, schools may present such environments.If parents can provide more opportunities for this, that would help.</p>
                            <button className="btn" onClick={() => location.push('/singleblog')}>Continue Reading</button>
                            <div className="comment-sec">
                                <div className="comment">
                                    <span>5 comment</span>
                                </div>
                                <div className="social-link">
                                    <ul>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaGooglePlusG /></a></li>
                                        <li><a href="#"><FaPinterestP /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BestBlog
