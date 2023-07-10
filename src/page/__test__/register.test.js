import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from '../register';
import store from "../../Store/store";

test('Should render login', () => {
    render(<Provider store={store}><BrowserRouter><RegisterPage /></BrowserRouter></Provider>)

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();

    const btnLoginElement = screen.getByRole('button', {
        name: /sign up/i
    })
    expect(btnLoginElement).toBeInTheDocument();

})