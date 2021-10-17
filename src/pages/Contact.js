import React, { useState,useRef, useEffect } from 'react'
import './scss/Contact.scss'

const Contact = () => {
    const [userState, setUserState] = useState({
        userName: '',
        email: '',
        subject: '',
        message: ''
    });
    const warningRef = useRef(null);

    const handleChange = (e) => {
        setUserState({
            ...userState,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userState.userName || !userState.email) {
            warningRef.current.style.display = 'block'
        } else {
            warningRef.current.style.display = 'none'
        }
    }

    useEffect(() => {
        if (userState.userName && userState.email) {
            warningRef.current.style.display = 'none'
        }
    },[userState.userName, userState.email])

    return (
        <div>
            <div className="contact secondary-section">
                <div className="contact-header">
                    <div className="img-container">
                        <img src="https://cdn.pixabay.com/photo/2020/11/20/07/45/lake-5760752_960_720.jpg" alt="" />
                        <h3 className="h3">Contact Me</h3>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="about-contact">
                        <div className="type">
                            <span>ABOUT HIMMELEN</span>
                        </div>
                        <main>
                            <p className="para">Coming from two different cultures has been instrumental in how we’ve approached our design process. We strive to bring a sense of diversity to our designs. We have a deep respect for the Scandinavian masters of the past, as their work utilized craftsmanship and quality materials to create functional and honest designs. We also admire the Italian masters for their intellectual approach to design. From this cross-cultural substrate, we create furniture that respectfully reflects both traditions while also featuring unique embedded stories, symbols and associations, often expressed in a minimalist aesthetic.</p>
                            <p className="para">Portrait, travel and wedding photographer. based in London, UK.available to travel worldwide.</p>
                            <p className="equipment">EQUIPMENT: Canon 5D Mark III / Canon 5D Mark II</p>
                            <p className="equipment">50mm 1.2L / 35mm 1.4L / 100mm 2.8L / 24-70mm 2.8L / TS 45mm 2.8 / 70-200mm 2.8L / 135mm 2.0L / TS 24mm 3.5L</p>
                            <p className="email-tag">for general / work / booking inquiries please contact me</p>
                            <p className="email">at example@gmail.com</p>
                        </main>
                    </div>
                    <div className="contact-form">
                        <div className="type">
                            <span>ABOUT HIMMELEN</span>
                        </div>
                        <form>
                            <div className="input-item">
                                <label htmlFor="name">Your Name(required)</label>
                                <input type="text" value={userState.userName} name="userName" onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="email">Your Email(required)</label>
                                <input type="email"  value={userState.email} name="email" onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" value={userState.subject} name="subject" onChange={(e) => handleChange(e)}/>
                            </div>
                            <div className="input-item">
                                <label htmlFor="message">Your message</label>
                                <textarea  value={userState.message} name="message" onChange={(e) => handleChange(e)}></textarea>
                            </div>
                            <div className="input-item warning" ref={warningRef}>
                                <span>Please fill Required input field.</span>
                            </div>
                            <div className="input-item">
                                <button type="submit" onClick={handleSubmit}>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
