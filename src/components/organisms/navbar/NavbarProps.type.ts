/**
 * Navbar Props
 * 
 * @property {React.ReactNode} children - The children of the component
 * @property {boolean} isUserAuthenticated - Whether the user is authenticated
 * @property {() => void} onLogout - Function to be called when the user logs out
 * 
 */
interface NavbarProps {
    children?: React.ReactNode
    isUserAuthenticated: boolean
    onLogout: () => void
}

export default NavbarProps