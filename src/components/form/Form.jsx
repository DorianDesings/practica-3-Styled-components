import { CARD_DATA } from '../../constants/card-data';
import { StyledInput } from './styles';

const Form = ({ cardData, setCardData, setIsValidForm }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<div>
				<label htmlFor='name'>CardHolder Name</label>
				<StyledInput
					type='text'
					id='name'
					name='name'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				{!cardData.name && cardData.name !== CARD_DATA.name && (
					<span>{"Can't be blank"}</span>
				)}
			</div>
			<div>
				<label htmlFor='number'>Card Number</label>
				<StyledInput
					type='text'
					id='number'
					name='cardNumber'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
			</div>
			<div>
				<label>Exp. Date (MM/YY)</label>
				<input
					type='text'
					placeholder='MM'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				<input
					type='text'
					placeholder='YY'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
				<label htmlFor='cvc'>CVC</label>
				<input
					type='text'
					placeholder='e.g. 123'
					onChange={e => handleChange(e.target, cardData, setCardData)}
				/>
			</div>
			<input type='submit' value='Confirm' />
		</form>
	);
};

const handleChange = (input, cardData, setCardData) => {
	setCardData({ ...cardData, [input.name]: input.value });
};

export default Form;
