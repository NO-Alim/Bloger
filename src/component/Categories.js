import React from 'react'
import  './scss/categories.scss'

const Categories = () => {
    return (
        <div>
            <div className="categories secondary-section">
                <main>
                    <div className="category">
                        <div className="content">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2018/09/26/14/25/man-3704749_960_720.jpg" alt="" />
                            </div>
                            <article>
                                <h3 className="h3">Travel Category</h3>
                                <p>Teh concept of travel is shaped by things with meaning and love.</p>
                            </article>
                        </div>
                    </div>
                    <div className="category categoryTwo">
                        <div className="content">
                            <div className="img-container">
                                <img src="https://cdn.pixabay.com/photo/2017/03/21/15/08/child-2162410_960_720.jpg" alt="" />
                            </div>
                            <article>
                                <span>About Me</span>
                                <h3 className="h3">Hi to everyone My name is polly!</h3>
                                <p>Hello, my name is Polly! Himmelen is a daily updated blog about travel, inspirations, photographers, illustrators, food lovers and everyday moments from all over the world.</p>
                                <button className="btn">read more</button>
                            </article>
                        </div>
                    </div>
                    <div className="category">
                        <article>
                        <span>INSPIRATION</span>
                            <h3 className="h3">Inspiration Category</h3>
                            <p>Coming from two different cultures has been instrumental in how we’ve approached our design process.</p>
                            <button className="btn">Read More</button>
                        </article>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Categories
