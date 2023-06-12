import { CARD_DATA } from '../../constants/card-data';

const Cards = ({ cardData }) => {
	const { name, cardNumber, month, year, cvc } = cardData;
	return (
		<>
			<div>
				<img src='/images/bg-card-front.png' alt='' />
				<p>{cardNumber || CARD_DATA.cardNumber}</p>
				<p>{name || CARD_DATA.name}</p>
				<p>
					{month || CARD_DATA.month}/{year || CARD_DATA.year}
				</p>
			</div>
			<div>
				<img src='/images/bg-card-back.png' alt='' />
				<p>{cvc}</p>
			</div>
		</>
	);
};

export default Cards;
