import logoWhite from '../../assets/logo/logo-green.svg';
import { Link } from 'umi';
import Languages from './languages';
import NavbarItem from './navbar-items';

const Navbar: React.FC = () => {

    return (
        <nav className="bg-white">
            <div className='container mx-auto py-3 px-2 md:px-0'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to={`/`}><img src={logoWhite} alt='LOGO' /></Link>
                    </div>
                    <div className='flex items-center'>
                        <NavbarItem />
                        <div className='border-r h-8 mx-8'></div>
                        <Languages />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar