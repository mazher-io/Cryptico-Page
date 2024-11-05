import './Navbar.css'
import logo from '../../assets/logo.svg'
import { useEffect } from 'react';





const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementsByClassName('Navbar')[0];
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div className='Navbar'>
        <div className='nav-left'>
            <img className='logo'src={logo} alt="" />
        </div>
        <div className='nav-right'>
            <button className='login'>Login</button>
            <button className='sign-up'>Sign up</button>
        </div>
      
    </div>
  )
}

export default Navbar
