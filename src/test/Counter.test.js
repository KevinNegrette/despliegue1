import {render, screen, fireEvent} from "@testing-library/react";
import Counter from "../components/Counter";

describe("<Counter/>", ()=>{
    test('Nombre del caso de prueba aqui', () => { 
        
        render(<Counter/>);
        const countElement = screen.getByText(/Count: /i);
        const buttonElement = screen.getByText(/Increment/i);
    
        expect(countElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();

     });

     test("incremento del contador cuando se hacer click en el boton", ()=> {
        render(<Counter/>);
        const buttonElement = screen.getByText(/Increment/i);

        fireEvent.click(buttonElement);
        const countElement = screen.getByText(/Count: 1/i);

        expect(countElement).toBeInTheDocument();
     });
});