import React from 'react'
import { useGlobalContext } from '../hook/context'

const BlogList = () => {
    const {articles, loading} = useGlobalContext();
    console.log(articles);
    return (
        <div>
            <h1>blog List</h1>

            <div className="blog-list">
                {loading ? <h4>Loading....</h4> : 
                <div>
                    <ul>
                        {articles.map((item,ind) => {
                            const {author,content, description, publishedAt, title, url, urlToImage,source} = item;
                            //const sourceTitle = source.map((item) => item.name)
                            return(
                                <li key={ind}>
                                    <div>
                                        {author}
                                    </div>
                                    <div>
                                        {source.name}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
        </div>
    )
}

export default BlogList
