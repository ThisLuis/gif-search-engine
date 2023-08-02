import { useState } from 'react';

export const AddCategory = ({ setCategories} ) => {

	const [ inputValue, setInputValue ] = useState('');

	const onInputChange = ( event ) => {
		setInputValue(event.target.value)
	}

	const onSubmit = ( event ) => {
		event.preventDefault();
		// inputValue es el valor que tenemos que mandar para agregar la categoria
		console.log( inputValue );
		if( inputValue.trim().length <= 1) return;
		setCategories( (categories) => [inputValue, ...categories]);
		setInputValue('');
	}

  return(
    <>
			<form onSubmit={ (event) => onSubmit(event) }>
				<input
					type="text"
					placeholder="Buscar gifs"
					value={ inputValue }
					onChange={ (event) => onInputChange(event) }
				/>
			</form>
    </>
  )
}
