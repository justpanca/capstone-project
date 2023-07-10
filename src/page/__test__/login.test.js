import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LoginPage from "../login";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../../Store/store";

test('Should render login', () => {
    render(<Provider store={store}><BrowserRouter><LoginPage /></BrowserRouter></Provider>)

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();

    const btnLoginElement = screen.getByRole('button', {
        name: /sign in/i
    })
    expect(btnLoginElement).toBeInTheDocument();

})

test('input', () => {
    render(<Provider store={store}><BrowserRouter><LoginPage /></BrowserRouter></Provider>)
    const inputEmail = screen.getByTestId('email-input')
    fireEvent.change(inputEmail, { target: { value: 'irsyad@gmail.com' } })
    expect(inputEmail.value).toBe('irsyad@gmail.com')
})