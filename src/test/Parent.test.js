import {render, screen, fireEvent} from "@testing-library/react";
import ParentComponent from "../components/ParentComponent";

describe("<ParentComponent>", ()=>{
    test ("Actualiza el componente padre cuando el boton del componente hijo es cliqueado", ()=>{
        render(<ParentComponent/>);

        const inputElement = screen.getByRole('textbox');
        const submitButton = screen.getByRole('button', {name: /Submit/i });

        fireEvent.change(inputElement, {target: {value: "Hola prueba"}});
        fireEvent.click(submitButton);

        const updatedText = screen.getByText(/Text: Hola prueba/i);
        expect(updatedText).toBeInTheDocument();

    });
});