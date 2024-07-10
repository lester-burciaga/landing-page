'use client'
import Navbar from '@/components/organisms/navbar/Navbar';


export default function ProfilePage() {
    return (
        <div>
            <Navbar isUserAuthenticated={true} onLogout={() => {}}/>
            <h1>Profile</h1>
        </div>
    );
}
