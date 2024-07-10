'use client'
import { Navbar } from '@/components/organisms/navbar';

export default function Home() {

  function handleLogout() {
    console.log('Logout');
  }
 
  return (
    <main>
      <Navbar isUserAuthenticated={true} onLogout={handleLogout}/>
    </main>
  );
}
