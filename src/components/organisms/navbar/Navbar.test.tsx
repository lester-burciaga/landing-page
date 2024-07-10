import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from './Navbar';

// Mock useRouter:
jest.mock("next/navigation", () => {
    const router = {
      push: jest.fn(),
      query: {},
    }
    return {
      useRouter: jest.fn().mockReturnValue(router),
    }
});

const onLogoutMock = jest.fn();

describe('<Navbar />', () => {
    it('should render correctly', () => {
        render(
            <Navbar 
                isUserAuthenticated={false} 
                onLogout={onLogoutMock} 
            />
        );
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    describe('when "isUserAuthenticated" is false', () => {
        beforeEach(() => {
            render(
                <Navbar 
                    isUserAuthenticated={false} 
                    onLogout={onLogoutMock} 
                />
            );
        })

        it('should render "Sign in" option',  () => {
            expect(screen.getByRole('button', { name: "Sign In" })).toBeInTheDocument();
        });

        it('should render "Sign up" option', () => {
            expect(screen.getByRole('button', { name: "Sign Up" })).toBeInTheDocument();
        });
    });

    describe('when "isUserAuthenticated" is true', () => {
        beforeEach(() => {
            render(
                <Navbar 
                    isUserAuthenticated={true} 
                    onLogout={onLogoutMock} 
                />);
        })

        it('should render "Log out" option', () => {
            expect(screen.getByRole('button', { name: "Log Out" })).toBeInTheDocument();
        });
    })
})