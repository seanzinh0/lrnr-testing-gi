import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';

describe('Home Component', () => {
    // test to see if logo renders
    it('should render the logo', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/img/lrnr-logo.png');
    });

    // test to make sure the message is rendered properly
    it('should render the correct message', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const message = screen.getByText(/Your guided path to programming enlightenment/i);
        expect(message).toBeInTheDocument();
    });

    // test to see if the button that says "BEGIN JOURNEY" renders
    it('should render the "BEGIN JOURNEY" button', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const button = screen.getByText(/BEGIN JOURNEY/i);
        expect(button).toBeInTheDocument();
    });

    // test to see if home card heading is rendered
    it('should render the home card heading that says "Personalized Quizzes', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const homeCardHeading = screen.getByText(/Personalized Quizzes/i);
        expect(homeCardHeading).toBeInTheDocument();
    });
});