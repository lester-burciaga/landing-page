import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

// Mock onLogout function:
const onLogoutMock = jest.fn();

// Function to get the "Log out" button:
const getLogOutButton = () => {
    return screen.getByRole('button', { name: /log out/i });
}

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
            expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
        });

        it('should render "Sign up" option', () => {
            expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
        });
    });

    describe('when "isUserAuthenticated" is true', () => {
        beforeEach(() => {
            render(
                <Navbar 
                    isUserAuthenticated={true} 
                    onLogout={onLogoutMock} 
                />
            );
        })

        describe( 'with "Log out" option', () => {

            it('should render "Log out" option', () => {
                const logOutButton = getLogOutButton();

                expect(logOutButton).toBeInTheDocument();
            });

            describe('when "Log out" option is clicked', () => {
              
                it('should call "onLogout" function', () => {
                    const logOutButton = getLogOutButton();

                    fireEvent.click(logOutButton);
                    expect(onLogoutMock).toHaveBeenCalled();
                });
            });
        });
    })
})
