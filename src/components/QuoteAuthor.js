import React from 'react';
import { useGlobalContext } from '../context';

const QuoteAuthor = () => {
    const { author } = useGlobalContext();

    return (
        <div id="quote-author">
            <p id="author">- {author}</p>
        </div>
    );
}

export default QuoteAuthor;