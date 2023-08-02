import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifSearchEngine = () => {

	const [categories, setCategories] = useState([ 'One punch', 'Attack On Titan', 'Hunter X Hunter' ]);
	
	const onAddCategorie = () => {
		const categorie = 'Valorant';
		setCategories([...categories, categorie]);
	}

	return (
		<>
			{/* titulo */}
			<h1>Gif Search Engine</h1>

			{/* Input */}
			<AddCategory setCategories={ setCategories }/>
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