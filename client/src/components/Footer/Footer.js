import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook,  } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="#"><FaFacebook /></a>
                        <a href="#">< AiFillTwitterCircle /></a>
                        <a href="#">< AiFillInstagram /></a>
                        <a href="#">< AiFillLinkedin /></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='copyright'>&copy; IGDTUW, 2022</div>
        </div>
   </footer>
    )
}

