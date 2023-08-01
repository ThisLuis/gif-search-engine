import { useState } from 'react';

export const GifSearchEngine = () => {

	const [categories, setCategories] = useState([ 'One punch', 'Attack On Titan', 'Hunter X Hunter' ]);
	console.log(categories)

	return (
		<>
			{/* titulo */}
			<h1>Gif Search Engine</h1>

			{/* Input */}

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