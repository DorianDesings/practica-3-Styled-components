import { useState } from 'react';
import Button from '../button/Button';

const Counter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<h1>{counter}</h1>
			<Button text='+1' action={() => increment(counter, setCounter)} />
			<Button text='-1' action={() => decrement(counter, setCounter)} />
			<Button text='Reset' action={() => reset(setCounter)} />
		</>
	);
};

const increment = (counter, setCounter) => {
	setCounter(counter + 1);
};

const decrement = (counter, setCounter) => {
	setCounter(counter - 1);
};

const reset = setCounter => {
	setCounter(0);
};

export default Counter;
