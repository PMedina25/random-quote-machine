import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useGlobalContext } from '../context';


const QuoteText = () => {
    const { quote } = useGlobalContext();

    return (
        <div id="quote-text">
            <FaQuoteLeft id="quote-icon" className="img-responsive" />
            <span id="text">{quote}</span>
        </div>
    );
}

export default QuoteText;