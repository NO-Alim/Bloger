import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF,FaInstagram,FaTwitter,FaRss} from 'react-icons/fa'
import './scss/Footer.scss'
import { useGlobalContext } from '../hook/context'

const Footer = () => {
    const [SubEmail, setSubEmail] = useState('');
    const {articles} = useGlobalContext();
    return (
        <div>
            <footer className="secondary-section">
                <div className="footer-container secondary-section">
                    <div className="top-footer">
                        <div className="footer-item">
                            <div className="footer-logo">
                                <Link to="/"><h3 className="h3">HIMMELEN</h3></Link>
                            </div>
                            <span className="copyright">&copy; 2019 himmelen all right reserved.</span>
                        </div>
                        <div className="footer-item">
                            <div className="link-container">
                                <ul>
                                    <li><Link to="#">Inspiration</Link></li>
                                    <li><Link to="#">Travel</Link></li>
                                    <li><Link to="#">Stories</Link></li>
                                    <li><Link to="#">Food</Link></li>
                                    <li><Link to="#">Lifestyle</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item">
                            <div className="link-container">
                                <ul>
                                    <li><Link to="#">about</Link></li>
                                    <li><Link to="#">contact</Link></li>
                                    <li><Link to="#">Terms of Service</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item">
                            <h5 className="h5">FOLLOW US</h5>
                            <div className="social-container">
                                <ul>
                                    <li><span><i><FaFacebookF /></i> facebook</span></li>
                                    <li><span><i><FaTwitter /></i> Twitter</span></li>
                                    <li><span><i><FaInstagram /></i> Instagram</span></li>
                                    <li><span><i><FaRss /></i> RSS</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-item">
                            <h5 className="h5">SUBSCRIBE</h5>
                            <form>
                                <input type="email" placeholder="E-mail" value={SubEmail} onChange={(e) => setSubEmail(e.target.value)}/>
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
