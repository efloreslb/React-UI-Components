import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <i className="far fa-comment" onClick={() => {
                    document.querySelector('.fa-comment').style.color ="blue";
                }}></i>
                <i className="fas fa-retweet" onClick={() => {
                    document.querySelector('.fa-retweet').style.color = "limegreen";
                    document.querySelector('#retweetCounter').textContent = "7";
                }}></i><div id="retweetCounter">6</div>
                <i className="far fa-heart" onClick={() => {
                    document.querySelector('.fa-heart').style.color = "red";
                    document.querySelector('#likedCounter').textContent = "5";
                }}></i><div id="likedCounter">4</div>
                <i className="far fa-envelope"></i>
            </div>
        </div>
    )
}

export default Footer;