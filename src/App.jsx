import { useState } from 'react';

import './App.css';
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json';
import colors from './utils/colors';

function App() {
	const getRandom = (arr) => {
		const indexRandom = Math.floor(Math.random() * arr.length);
		return arr[indexRandom];
	};

	let quotesRandom = getRandom(quotes);
	let colorsRandom = getRandom(colors);

	const [randomQuote, setRandomQuote] = useState(quotesRandom);
	const [randomColors, setRandomColors] = useState(colorsRandom);
	const stylesBg = {
		backgroundColor: randomColors,
	};
	const getRandomAll = () => {
		quotesRandom = getRandom(quotes);
		colorsRandom = getRandom(colors);
		setRandomQuote(quotesRandom);
		setRandomColors(colorsRandom);
	};
	return (
		<div className='App' style={stylesBg}>
			<QuoteBox
				randomQuote={randomQuote}
				randomColors={randomColors}
				getRandomAll={getRandomAll}
			/>
		</div>
	);
}

export default App;

