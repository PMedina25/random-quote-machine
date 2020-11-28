import { useGlobalContext } from './context';
// import components
import Buttons from './components/Buttons';
import QuoteText from './components/QuoteText';
import QuoteAuthor from './components/QuoteAuthor';

function App() {
  const { color } = useGlobalContext();

  return (
    <main className="container-fluid text-center" style={{color: `${color}`, background: `${color}`}}>
      <div id="wrapper">
        <div id="quote-box">
          <QuoteText />
          <QuoteAuthor />
          <Buttons color={color} />
        </div>
        <footer>
          <span>by pablo</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
