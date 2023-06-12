import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => (props.active ? 'red' : 'green')};
	padding: ${props => props.padding};
`;

export { StyledButton };
