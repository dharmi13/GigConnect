import React from 'react'
import "./Footer.scss"
const Footer = () =>{
    return (
        <div className='footer'>
        <div className='container'>
            <div className='top'>
                <div className="item">
                    <h2>Categories</h2>
                    <span>Graphics & Design</span>
                    <span>Digital Marketing</span>
                    <span>Writing & Translation</span>
                    <span>Video & Animation</span>
                    <span>Music & Audio</span>
                    <span>Programming & Tech</span>
                    <span>Data</span>
                    <span>Business</span>
                    <span>Lifestyle</span>
                    <span>Photography</span>
                </div>
                <div className="item">
                <h2>About</h2>
                    <span>Press & News</span>
                    <span>Partnerships</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Intellectual Property Claims</span>
                    <span>Investor Relations</span>
                    <span>Contact Sales</span>
                </div>
                <div className="item">
                <h2>Support</h2>
                    <span>Help & Support</span>
                    <span>Trust & Safety</span>
                    <span>Becoming a Freelancer</span>
                    <span>Becoming a Client</span>
                </div>
                <div className="item">
                    <h2>What's new with GigConnect</h2>
                    <span>Customer Success Stories</span>
                    <span>Community hub</span>
                    <span>Forum</span>
                    <span>Events</span>
                    <span>Blog</span>
                    <span>Influencers</span>
                    <span>Affiliates</span>
                    <span>Podcast</span>
                    <span>Invite a Friend</span>
                    
                </div>
                <div className="item">
                    <h2>More From Gigs to Connect</h2>
                    <span>GigConnect Business</span>
                    <span>GigConnect Pro</span>
                    <span>GigConnect Logo Maker</span>
                    <span>GigConnect Guides</span>
                    <span>Get Inspired</span>
                    <span>GigConnect Select</span>
                    <span>Learn</span>
                </div>
            </div>

            <div className='bottom'>
                <div className='left'>
                    <h3>GigConnect</h3>
                    <span>© GigConnect International Ltd. 2024</span>
                </div>
                <div className='right'>
                        <div className="social">
                            <img src="/twitter.png" alt="" />
                            <img src="/facebook.png" alt="" />
                            <img src="/linkedin.png" alt="" />
                            <img src="/pinterest.png" alt="" />
                            <img src="/instagram.png" alt="" />
                        </div>
                <div className="link">
                    <img src="/language.png" alt="" />
                    <span>English</span>
                </div>
                <div className="link">
                    <img src="/coin.png" alt="" />
                    <span>USD</span>
                </div>
                <img src="/accessibility.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;