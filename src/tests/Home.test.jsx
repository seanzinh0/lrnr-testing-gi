import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Home from '../pages/Home.jsx';

describe('Home Component', () => {
    it('should render the logo', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Check for the logo image
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', '/img/lrnr-logo.png');
    });

    it('should render the correct tagline', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Check for the tagline
        const tagline = screen.getByText(/Your guided path to programming enlightenment/i);
        expect(tagline).toBeInTheDocument();
    });

    it('should render the "BEGIN JOURNEY" button', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Check for the button
        const button = screen.getByText(/BEGIN JOURNEY/i);
        expect(button).toBeInTheDocument();
    });

    it('should render the HomeCard component', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Check for the HomeCard component by verifying its content
        const homeCardHeading = screen.getByText(/Personalized Quizzes/i);
        expect(homeCardHeading).toBeInTheDocument();
    });
});