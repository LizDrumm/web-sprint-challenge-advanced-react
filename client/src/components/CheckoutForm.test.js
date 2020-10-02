import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
//arange
render (<CheckoutForm/>);
//act
const header = screen.getByText(/Checkout Form/i);
//assert
expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
//act
    render (<CheckoutForm/>)
//arrange
    //query each input
    const firstNameInput= screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

//assert
    fireEvent.change(firstNameInput,{target:{name:'firstName',  value:'Liz'}})
    fireEvent.change(lastNameInput,{target:{name:'lastName', value:'Drumm'}});
    fireEvent.change(addressInput,{target:{name:'address',  value:'448 Julia St'}})
    fireEvent.change(cityInput,{target:{name:'city',  value:'New Orleans'}})
    fireEvent.change(stateInput,{target:{name:'state',  value:'Louisiana'}})
    fireEvent.change(zipInput,{target:{name:'zip',  value:'70130'}})

    const submitButton = screen.getByTestId (/submit/i)
    fireEvent.click(submitButton)

    const successMesage = screen.getByTestId(/successMessage/i)

});
