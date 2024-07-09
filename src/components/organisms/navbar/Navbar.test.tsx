import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from './Navbar';

describe('Navbar', () => {
    it('should render correctly', () => {
        render(<Navbar isUserAuthenticated={false} />);
        expect(screen.getByText('Navbar component')).toBeInTheDocument();
    });

    describe('when "isUserAuthenticated" is false', () => {
        beforeEach(() => {
            render(<Navbar isUserAuthenticated={false} />);
        })

        it('should render "Sign in" option', () => {
            expect(screen.getByText(/sign in/i)).toBeInTheDocument();
        });

        it('should render "Sign up" option', () => {
            expect(screen.getByText(/sign up/i)).toBeInTheDocument();
        });
    });

    describe('when "isUserAuthenticated" is true', () => {
        beforeEach(() => {
            render(<Navbar isUserAuthenticated={true} />);
        })

        it('should render "Log out" option', () => {
            expect(screen.getByText(/log out/i)).toBeInTheDocument();
        });
    })
})