/**
 * Navbar Props
 * 
 * @property {React.ReactNode} children - The children of the component
 * @property {boolean} isUserAuthenticated - Whether the user is authenticated
 * @property {() => void} onLogout - Function to be called when the user logs out
 * @property {() => void} onSignin - Function to be called when the user signs in
 * @property {() => void} onSignup - Function to be called when the user signs up
 * 
 */
interface NavbarProps {
    children: React.ReactNode
    isUserAuthenticated: boolean
    onLogout: () => void
    onLogin: () => void
    onSignup: () => void
}

export default NavbarProps