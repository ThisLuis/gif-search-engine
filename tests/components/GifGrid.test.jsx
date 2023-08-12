import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
// 1.- Importamos nuestro hook(funcion)
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// 2.-Colocamos el path del hook
// Esto hace un mock completo de este path
// Cuando hacemos un mock, jest espera que ya este hecha la implementacion de useFetchGifs
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'One punch';

    test('debe de mostrar el loading inicialmente', () => {
        
        // ESTO ES CUANDO NO TENEMOS IMAGENES, EL ISLOADING ESTA EN TRUE Y LAS IMAGENES ES UN ARRAY VACIO

        // 3.-debemos decirle al test suite como va a funcionar useFetchGifs
        useFetchGifs.mockReturnValue(
            // 4.-el objeto que devolvemos es lo que vamos a simular que es lo que esta regresando esa funcion
            {
                images: [],
                isLoading: true
            }
        )

        render( <GifGrid category={ category } />);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
    });

    test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        // ESTO ES CUANDO YA TENEMOS IMAGENES

        // 4.- Creamos la data ficticia
        const gifs = [
            {
                id: 'ABC',
                title: 'saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'goku',
                url: 'http://localhost/goku.jpg'
            },
            {
                id: 'def',
                title: 'eren',
                url: 'http://localhost/eren.jpg'
            }
        ]

        useFetchGifs.mockReturnValue(
            {
                // 5.- le pasamops la data a nuestro mock, suponemos que es lo que nos esta regresando el useFetchGifs
                images: gifs,
                isLoading: false
            }
        )
        render( <GifGrid category={ category } />);
        
        // 6.- Ya podemos hacer las acerciones
        expect( screen.getAllByRole('img').length).toBe(3);


    })

    
})

// Mock de cualquier hook