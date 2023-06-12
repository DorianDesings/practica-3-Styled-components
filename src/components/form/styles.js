import styled from 'styled-components';

const StyledInput = styled.input`
	&:invalid {
		color: red;
		border: 1px solid red;
	}
`;

export { StyledInput };
