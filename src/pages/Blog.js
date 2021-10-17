import React from 'react'
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaPinterestP} from 'react-icons/fa'
import './scss/Blog.scss'
import {useGlobalContext} from '../hook/context'
import {FaRegEye} from 'react-icons/fa'

const Blog = () => {
    const {articles, loading} = useGlobalContext();

    //for looking better i use this img array instead of original img which i fetch from api.
    const customImage = [
        'https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/08/13/09/25/man-6542646_960_720.jpg',
        'https://cdn.pixabay.com/photo/2015/09/02/12/29/pedestrians-918471_960_720.jpg',

        'https://cdn.pixabay.com/photo/2016/11/14/04/25/umbrella-1822586_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/10/06/09/38/nature-6685262_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/09/18/02/00/lighthouse-6634029_960_720.jpg',

        'https://cdn.pixabay.com/photo/2015/07/28/21/02/woman-865021_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/10/09/09/08/mushrooms-6693545_960_720.jpg',
        'https://cdn.pixabay.com/photo/2021/09/09/21/32/lake-6611635_960_720.jpg',

        'https://cdn.pixabay.com/photo/2021/09/24/19/42/barn-6653410_960_720.jpg'
    ]

    if (loading) {
        return(
            <div className="blog-container secondary-section">
                <h2 className="h2">loading....</h2>
            </div>
        )
    }
    return (
        <div>
            <div className="blog-container secondary-section">
                <div className="random-category">
                    <div className="img-container">
                        <img src="https://cdn.pixabay.com/photo/2021/10/08/17/33/castle-6691932_960_720.jpg" alt="" />
                    </div>
                    <article>
                        <span className="type">Travel</span>
                        <h3 className="h3">10 words about my best vacation.</h3>
                        <span className="date">SEPTEMBER 22, 2020</span>
                        <p>Nowadays, a family is simply a network of people who care for each other. It can contain hundreds or two. You can be born into one or build your own. Membership can be gained through genetics, friendship, geographic proximity, work or a shared appreciation.</p>
                        <button className="btn">CONTINUE READING</button>

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
                <div className="blog-category">
                    <div className="item">
                        <div className="title-container">
                            <h2 className="title">Life Style</h2>
                        </div>
                        <div className="contents">
                            {!loading && articles && articles.length > 1 ? <ul>
                                {articles.slice(1,4).map((item,ind) => {
                                    return(
                                        <li key={ind}>
                                            <article>
                                                <div className="img-container">
                                                    {/* <img src={item.urlToImage ? item.urlToImage: 'https://cdn.pixabay.com/photo/2020/11/24/11/24/sika-deer-5772242_960_720.jpg'} alt="" /> */}
                                                    <img src={customImage[ind]} alt="nature" />
                                                    <button className="view-btn"><FaRegEye /></button>
                                                </div>
                                                <div className="article-content">
                                                    <div className="author">
                                                        <div className="name">
                                                            <span>{item.author}</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="h4">{((item.title).replace(/^(.{20}[^\s]*).*/, "$1") + "")}...</h4>
                                                    <p>{((item.description).replace(/^(.{50}[^\s]*).*/, "$1") + "")}</p>
                                                </div>
                                            </article>
                                        </li>
                                    )
                                })}
                            </ul> : <h3 className="h3">Loading failed</h3>}
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-container">
                            <h2 className="title">Travel</h2>
                        </div>
                        <div className="contents">
                            {!loading && articles && articles.length > 1 ? <ul>
                                {articles.slice(4,7).map((item,ind) => {
                                    return(
                                        <li key={ind}>
                                            <article>
                                                <div className="img-container">
                                                {/* <img src={item.urlToImage ? item.urlToImage: 'https://cdn.pixabay.com/photo/2020/11/24/11/24/sika-deer-5772242_960_720.jpg'} alt="" /> */}
                                                    <img src={customImage[ind + 3]} alt="nature" />
                                                    <button className="view-btn"><FaRegEye /></button>
                                                </div>
                                                <div className="article-content">
                                                    <div className="author">
                                                        <div className="name">
                                                            <span>{item.author}</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="h4">{((item.title).replace(/^(.{20}[^\s]*).*/, "$1") + "")}...</h4>
                                                    <p>{((item.description).replace(/^(.{50}[^\s]*).*/, "$1") + "")}</p>
                                                </div>
                                            </article>
                                        </li>
                                    )
                                })}
                            </ul> : <h3 className="h3">Loading failed</h3>}
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-container">
                            <h2 className="title">Inspiration</h2>
                        </div>
                        <div className="contents">
                            {!loading && articles && articles.length > 1 ? <ul>
                                {articles.slice(8,11).map((item,ind) => {
                                    return(
                                        <li key={ind}>
                                            <article>
                                                <div className="img-container">
                                                    {/* <img src={item.urlToImage ? item.urlToImage: 'https://cdn.pixabay.com/photo/2020/11/24/11/24/sika-deer-5772242_960_720.jpg'} alt="" /> */}
                                                    <img src={customImage[ind + 6]} alt="nature" />
                                                    <button className="view-btn"><FaRegEye /></button>
                                                </div>
                                                <div className="article-content">
                                                    <div className="author">
                                                        <div className="name">
                                                            <span>{item.author}</span>
                                                        </div>
                                                    </div>
                                                    <h4 className="h4">{((item.title).replace(/^(.{20}[^\s]*).*/, "$1") + "")}...</h4>
                                                    <p>{((item.description).replace(/^(.{50}[^\s]*).*/, "$1") + "")}</p>
                                                </div>
                                            </article>
                                        </li>
                                    )
                                })}
                            </ul> : <h3 className="h3">Loading failed</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
