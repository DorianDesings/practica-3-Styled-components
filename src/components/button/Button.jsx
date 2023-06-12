import { StyledButton } from './styles';

const Button = ({ text }) => {
	return (
		<StyledButton
			color='blue'
			active={false}
			padding='2rem'
			onClick={() => console.log('CLICK')}
		>
			{text}
		</StyledButton>
	);
};

export default Button;
