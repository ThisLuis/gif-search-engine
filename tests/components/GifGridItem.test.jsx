import { render } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Evaluando GifGridItem', () => {
	
	const title = 'One punch man';
	const url = 'www.google.com';

	test('evaluacion del snapshot', () => {
		const { container } = render(<GifGridItem title={title} url={ url } />)
		expect( container ).toMatchSnapshot();
	});

})