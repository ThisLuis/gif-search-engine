import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSearchEngine = () => {

	const [categories, setCategories] = useState([ 'One punch']);
	
	const onAddCategorie = (newCategory) => {
		
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	}

	return (
		<>

			<h1>Gif Search Engine</h1>

			
			<AddCategory
				onNewCategory={ (event) => onAddCategorie(event) }
			/>
				
				{
					categories.map( (category) => (
						<GifGrid
							key={ category }	
							category={ category }
						/>
					))
				}
		</>
	);
}