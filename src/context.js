import React, { useState, useContext, useEffect } from 'react';

const URL = 'https://quotes15.p.rapidapi.com/quotes/random/';
const RAPIDAPI_KEY = '7f30fa6e18mshcb66f825f898646p15944djsnc52a5460e3c8';
const RAPIDAPI_HOST = 'quotes15.p.rapidapi.com';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [color, setColor] = useState('');
    const [hoverColor, setHoverColor] = useState('');
    const [isMouseOver, setIsMouseOver] = useState([false, false, false]);

    // Function used to obtain a random number for the color
    const rand = (min, max) => { 
        return min + Math.random() * (max - min); 
    }

    // Function which obtains the random color of the page
    const randomColor = () => { 
        let h = Math.round(rand(1, 360));
        let s = Math.round(rand(0, 100));
        let l = Math.round(rand(0, 100));
        return [h, s, l];
    }

    // Get de data from the quotes API
    const fetchData = async() => {
        const response = await fetch(URL, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-key": RAPIDAPI_KEY,
		        "x-rapidapi-host": RAPIDAPI_HOST
	        }
        });
        const randomQuote = await response.json();
        const randColor = randomColor();
        setQuote(randomQuote.content);
        setAuthor(randomQuote.originator.name);
        setColor('hsl(' + randColor[0] + ', ' + randColor[1] + '%, ' + randColor[2] + '%)');
        setHoverColor('hsl(' + (randColor[0] - 20) + ', ' + (randColor[1] + 20) + '%, ' + (randColor[2] - 20) + '%)');
        setIsMouseOver([false, false, false]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Function that is run when the user clicked to the new quote button
    const newQuote = () => {
        fetchData();
    }

    return (
        <AppContext.Provider value={{
            quote,
            author,
            color,
            hoverColor,
            isMouseOver,
            setIsMouseOver,
            newQuote,
        }}>
            {children}
        </AppContext.Provider>
    );
}

// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}
  
export { AppContext, AppProvider }
