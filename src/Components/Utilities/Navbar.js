import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 className='brand'>PC-PASS</h2>
      <ul className='navList'>
        <li className='navItem'><Link to='/' className='link'>Home</Link></li>
        <li className='navItem'><Link to='/help' className='link'>Help</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;