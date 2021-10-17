import React from 'react'
import {FaFacebookF,FaTwitter,FaGooglePlusG,FaPinterestP, FaFacebook} from 'react-icons/fa'
import './scss/SingleBlog.scss'

const SingleBlog = () => {
    return (
        <div>
            <div className="single-blog">
                <div className="blog-header">
                    <div className="img-container">
                        <img src="https://cdn.pixabay.com/photo/2021/07/20/13/45/lake-6480788_960_720.jpg" alt="travel story" />
                        <div className="blog-header-content">
                            <span className="types">Story</span>
                            <h3 className="h3">Wine O’Clock: Per Aspera Ad Astra</h3>
                            <span className="date">SEPTEMBER 22, 2019</span>
                        </div>
                    </div>
                </div>
                <div className="content section">
                    <main>
                        <div className="main-img-container">
                            <img src="https://cdn.pixabay.com/photo/2021/07/17/20/02/road-6473967_960_720.jpg" alt="travel" />
                        </div>
                        <p className="mr">These people aren’t assigned to us, but chosen by us—and isn’t that as worthy of celebration as any confluence of fate and genetics? These carefully selected families continue to grow throughout our lives without a ticking sociological to worry about.</p>
                        <h3 className="h3 mr">Physical and visual balance</h3>
                        <p className="mr">Balance is easy to understand in the physical world, because we experience it all the time. When something is unbalanced, it tends to fall over. You’ve probably been on a seesaw or a teeter-totter at some time in your life — you on one side and a friend on the other. Assuming you were both about the same size, you were able to easily balance on the seesaw. The following image appears to be in balance, with two equally sized people equally distant from the fulcrum on which the seesaw balances.</p>
                        <div className="quot mr">
                            <h2 className="h2">Happiness is not a matter of intensity but of balance, order, rhythm and harmony.</h2>
                            <h3 className="h3">Thomas merton</h3>
                        </div>
                        <p className="mr">Assuming you were both about the same size, you were able to easily balance on the seesaw. The following image appears to be in balance, with two equally sized people equally distant from the fulcrum on which the seesaw balances. The individual parts contribute to their sum but don’t try to become the sum.</p>
                        <p className="mr">An unbalanced composition can lead to tension. When a design is unbalanced, the individual elements dominate the whole and the composition becomes less than the sum of its parts. In some projects, unbalanced might be right for the message you’re trying to communicate, but generally you want balanced compositions.</p>
                        <div className="img-collection mr">
                            <div className="img">
                                <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/dog-190056_960_720.jpg" alt="travel blog" />
                            </div>
                            <div className="img">
                                <img src="https://cdn.pixabay.com/photo/2016/02/19/10/18/mountaineer-1209168_960_720.jpg" alt="" />
                            </div>
                        </div>
                        <p className="mr">The person on the left makes the If one of the people was much bigger, though, the balance would be thrown off.seesaw rotate counterclockwise, and the person on the right makes it rotate clockwise by an equal amount. The force of each person acts in a different direction, and their sum is zero.</p>
                        <ul className="tags mr">
                            <li>beach</li>
                            <li>color</li>
                            <li>happy</li>
                            <li>inspire</li>
                            <li>travel</li>
                        </ul>
                        <div className="comment-sec mr">
                            <div className="writer">
                                <span>By abdul alim</span>
                            </div>
                            <div className="comment">
                                <span>5 comment</span>
                            </div>
                            <div className="social-container">
                                <ul>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaGooglePlusG /></a></li>
                                    <li><a href="#"><FaPinterestP /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="author mr">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2012/11/28/11/10/shakespeare-67698_960_720.jpg" alt="author" />
                            </div>
                            <div className="author-about">
                                <span>ABOUT ME</span>
                                <h3 className="h3">Hi To everyone. My name is polly!</h3>
                                <p>Hello, my name is Polly! If you are bloggers, travelers, photographers, illustrators, food lovers or simply you have something important to tell - you are in most beautiful place, in my world!</p>
                                <div className="social-container">
                                    <ul>
                                        <li><a href="#"><FaFacebookF /></a></li>
                                        <li><a href="#"><FaTwitter /></a></li>
                                        <li><a href="#"><FaGooglePlusG /></a></li>
                                        <li><a href="#"><FaPinterestP /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>
                    <aside>
                        <div className="post">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2016/11/29/13/54/adult-1870011_960_720.jpg" alt="" />
                                <div className="content">
                                    <span>HIMMELEN</span>
                                    <h3 className="h3">Every day i'm trying to be a supermen.</h3>
                                    <p>And what the story do you want to tell us?</p>
                                    <button className="btn">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="recent-post">
                            <h3 className="h3">Recent Posts</h3>
                            <div className="flex-container">
                                <div className="posts">
                                    <div className="img-container">
                                        <img src="https://cdn.pixabay.com/photo/2015/01/10/10/47/street-595082_960_720.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <strong>EVERYDAY CREATIVE IMPULSE</strong>
                                        <span>September 11, 2001</span>
                                    </div>
                                </div>
                                <div className="posts">
                                    <div className="img-container">
                                        <img src="https://cdn.pixabay.com/photo/2015/01/10/10/47/street-595082_960_720.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <strong>EVERYDAY CREATIVE IMPULSE</strong>
                                        <span>September 11, 2001</span>
                                    </div>
                                </div>
                                <div className="posts">
                                    <div className="img-container">
                                        <img src="https://cdn.pixabay.com/photo/2015/01/10/10/47/street-595082_960_720.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <strong>EVERYDAY CREATIVE IMPULSE</strong>
                                        <span>September 11, 2001</span>
                                    </div>
                                </div>
                                <div className="posts">
                                    <div className="img-container">
                                        <img src="https://cdn.pixabay.com/photo/2015/01/10/10/47/street-595082_960_720.jpg" alt="" />
                                    </div>
                                    <div className="content">
                                        <strong>EVERYDAY CREATIVE IMPULSE</strong>
                                        <span>September 11, 2001</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="subscribe">
                            <h3 className="h3">Follow Us</h3>
                            <div className="social-container">
                                <ul>
                                    <li><a href="#"><FaFacebook /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaPinterestP /></a></li>
                                    <li><a href="#"><FaGooglePlusG /></a></li>
                                    <li><a href="#"><FaFacebook /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="instagram">
                            <h3 className="h3">Instagram</h3>
                            <div className="content">
                                <p>Unable to show instagram photos.</p>
                            </div>
                        </div>
                        <div className="categories">
                            <h3 className="h3">Categories</h3>
                            <div className="content">
                                <ul>
                                    <li>Inspiration(2)</li>
                                    <li>Stories(5)</li>
                                    <li>Travel(9)</li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
