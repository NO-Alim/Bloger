import React, { useRef } from 'react'
import {NavLink, Link, useHistory} from 'react-router-dom'
import './scss/Navbar.scss'
import logo from '../img/logo.png'
import Headroom from 'react-headroom'
import {FaTimes,FaSearch} from 'react-icons/fa'
import { useEffect, useState } from 'react/cjs/react.development'
import {RiArrowDownSLine} from 'react-icons/ri'
import { useGlobalContext } from '../hook/context'

const Navbar = () => {
    const [searchInput, setSearchInput] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const {articles, loading} = useGlobalContext();
    const [blogs, setBlogs] = useState(null);
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const location = useHistory();

    const handleSearchInput = () => {
        setSearchInput(!searchInput);
    }

    const handleClick = (e) => {
        if (!menuBtnRef.current.contains(e.target) && !menuRef.current.contains(e.target)) {
            setMenuActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    })

    useEffect(() => {
        setBlogs(articles.slice(1,5));
    },[loading])
    
    return (
        <div>
            <Headroom style={{zIndex: '1000'}}>
            <nav style={{zIndex: '1000'}}>
                <div className={`nav-container ${searchInput ? 'activeInput' : null}`}>
                    
                    <div className="menu-container">
                        <div className={`menu ${menuActive ? 'active' : null}`} onClick={() => setMenuActive(!menuActive)} ref={menuBtnRef}>
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                            <span className="menu-bar"></span>
                        </div>
                    </div>
                    <div className="logo-container">
                        <div className="logo">
                            <NavLink to="/">
                                <img src={logo} alt="blog" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="link-container">
                        <ul className="links">
                            <li className="link">
                                <NavLink exact to="/">Home</NavLink>
                            </li>
                            <li className="link blog drop-down">
                                <NavLink to="/blog">Blog <span><RiArrowDownSLine /></span> </NavLink>
                                <div className="drop-down-content full-drop-down">
                                    {!loading && blogs && blogs.length > 1 ? <ul>
                                        {blogs.map((item,ind) =>{
                                            return(
                                                <li key={ind} onClick={() => location.push('/singleblog')}>
                                                    <div className="drop-down-blog">
                                                        <div className="img-container">
                                                            <img src={item.urlToImage} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="h5">{((item.title).replace(/^(.{20}[^\s]*).*/, "$1") + "")}...</h4>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora odit natus.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>: <h1>loading failed.</h1>}
                                    
                                </div>
                            </li>
                            <li className="link information drop-down">
                                <NavLink to="/information">Information <span><RiArrowDownSLine /></span></NavLink>
                                <div className="drop-down-content small-drop-down">
                                    <ul>
                                        <li onClick={() => location.push('/information')}>Travel</li>
                                        <li onClick={() => location.push('/information')}>LifeStyle</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="link">
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="search-bar">
                        <form>
                            <input type="text" placeholder="your search keyword" ref={inputRef => inputRef && inputRef.focus()}/>
                            <span onClick={() => handleSearchInput()}><FaTimes /></span>
                        </form>
                        <span className="search-btn" onClick={() => handleSearchInput()}><FaSearch /></span>
                    </div>
                </div>
            </nav>
            </Headroom>
            <div className={`navigation ${menuActive ? 'active' : null}`} ref={menuRef}>
                <span className="close-btn" onClick={() => setMenuActive(!menuActive)}><FaTimes /></span>
                <div className="navigation-logo">
                    <NavLink to="/">
                        <img src={logo} alt="blog" />
                    </NavLink>
                </div>
                <ul>
                    <li><NavLink exact to="/" onClick={() => setMenuActive(!menuActive)}>Home</NavLink></li>
                    <li><NavLink to="/blog" onClick={() => setMenuActive(!menuActive)}>Blog</NavLink></li>
                    <li><NavLink to="/information" onClick={() => setMenuActive(!menuActive)}>Information</NavLink></li>
                    <li><NavLink to="/contact" onClick={() => setMenuActive(!menuActive)}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
