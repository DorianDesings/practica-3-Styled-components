import { useState } from 'react';
import Cards from '../cards/Cards';
import Form from '../form/Form';
import Thanks from '../thanks/Thanks';

const MainContainer = () => {
	const [cardData, setCardData] = useState({
		name: 'JANE APPLESEED',
		cardNumber: '0000 0000 0000 0000',
		month: '00',
		year: '00',
		cvc: '000'
	});

	const [isValidForm, setIsValidForm] = useState(false);

	return (
		<div>
			<Cards cardData={cardData} />
			{!isValidForm ? (
				<Form
					cardData={cardData}
					setCardData={setCardData}
					setIsValidForm={setIsValidForm}
				/>
			) : (
				<Thanks />
			)}
		</div>
	);
};

export default MainContainer;
