const Input = ({ action }) => {
	return <input type='text' onChange={e => action(e.target.value)} />;
};

export default Input;
