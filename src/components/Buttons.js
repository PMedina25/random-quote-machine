import React from 'react';
import { useGlobalContext } from '../context';
import { FaTwitterSquare, FaTumblrSquare } from 'react-icons/fa';

const Buttons = ({color}) => {
    const {hoverColor, isMouseOver, setIsMouseOver, newQuote} = useGlobalContext();

    return (
        <div id="buttons">
            <a href="https://www.twitter.com" id="twitter-quote" target="_blank">
                <FaTwitterSquare className="network-logo" style={isMouseOver[0] ? {color: `${hoverColor}`} : {color: `${color}`}} 
                    onMouseOver={() => setIsMouseOver([true, false, false])} 
                    onMouseLeave={() => setIsMouseOver([false, false, false])} 
                />
            </a>
            <a href="https://www.tumblr.com" id="tumblr-quote" target="_blank">
                <FaTumblrSquare className="network-logo" id="tumblr-logo"
                    style={isMouseOver[1] ? {color: `${hoverColor}`} : {color: `${color}`}} 
                    onMouseOver={() => setIsMouseOver([false, true, false])} 
                    onMouseLeave={() => setIsMouseOver([false, false, false])} 
                />
            </a>
            <button type="button" 
                    className="btn" 
                    id="new-quote" 
                    style={isMouseOver[2] ? {background: `${hoverColor}`} : {background: `${color}`}} 
                    onMouseOver={() => setIsMouseOver([false, false, true])} 
                    onMouseLeave={() => setIsMouseOver([false, false, false])}
                    onClick={newQuote}>
                    New quote
            </button>
      </div>
    );
}

export default Buttons;