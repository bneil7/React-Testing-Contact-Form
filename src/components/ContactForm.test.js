import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm'

test('Contact form adds new message to data', async() =>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageTextArea = screen.getByLabelText(/message/i);

    fireEvent.change(firstNameInput, {target: {value: "Wade"}});
    fireEvent.change(lastNameInput, {target: {value: "Boggs"}});
    fireEvent.change(emailInput, {target: {value: "lady@gaga.biz"}});
    fireEvent.change(messageTextArea, {target: {value: "Wade Boggs is still alive."}});

    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);
    
    const result = await screen.findByTestId("result");
    expect(result).toBeInTheDocument();

    console.log(result);
})