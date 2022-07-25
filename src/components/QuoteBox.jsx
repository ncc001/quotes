import React from 'react';

const QuoteBox = ({ randomQuote, randomColors, getRandomAll }) => {
	const stylesColor = {
		color: randomColors,
	};

	const styleBg = {
		backgroundColor: randomColors,
	};
	return (
		<div className='quote__conteiner' style={stylesColor}>
			<h2 className='quote__text'>
				<i className='bx bxs-quote-alt-left quotete'></i>
				{` ${randomQuote.quote}`}
			</h2>
			<p className='quote__author'>{`${randomQuote.author}`}</p>
			<button onClick={getRandomAll} className='quote__btn' style={styleBg}>
				&#62;
			</button>
		</div>
	);
};

export default QuoteBox;
