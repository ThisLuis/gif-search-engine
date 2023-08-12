import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
        // Los hooks necesitan parte del ciclo de vida de los componetnes de react, no los podemos evaluar de manera aislada
        // Para ello tenemos la funcion RenderHook

        // Funciona de la siguiente manera

        //1.- Creamos un callback donde mandamos llamar el Hook
        // useFetchGifs necesita la actegoria
        // renderHook devuelve varias coas (rerender, result, unmount)
        const { result } = renderHook(() => useFetchGifs('One punch man'));
        const { images, isLoading } = result.current;

        expect( images.length).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('debe de retornar un arreglo de imagenes e isLoading en false', async() => {
        // debemos dejar que el hook haga su trabajo, para eso utilizamos waitFor(es una promesa)
        const { result } = renderHook( () => useFetchGifs('Attack on titan'));

        // a waitFor le pasamos un callback, espera a que se obtengan las imagenes
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );

        // Ahora ya tenemos los resultados, ya hay imagenes y isLoading ahora es false
        const { images, isLoading } = result.current;

        expect( images.length).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();
    })
})