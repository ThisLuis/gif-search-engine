import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifSearchEngine = () => {

	const [categories, setCategories] = useState([ 'One punch', 'Attack On Titan', 'Hunter X Hunter' ]);
	
	const onAddCategorie = (newCategory) => {
		
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	}

	return (
		<>
			{/* titulo */}
			<h1>Gif Search Engine</h1>

			{/* Input */}
			<AddCategory
				onNewCategory={ (event) => onAddCategorie(event) }
				// setCategories={ setCategories }
			/>
			{/* Listado de Gif */}
				{/* Gif Item */}
				<ol>
					{
						categories.map( category => {
							return <li key={ category }>{ category }</li>
						})
					}
				</ol>
		</>
	);
}