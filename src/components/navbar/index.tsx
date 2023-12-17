import { MenuData } from '@/data';
import logoWhite from '../../assets/logo/logo-green.svg';
import { Link } from 'umi';
import Languages from './languages';

const Navbar: React.FC = () => {

    return (
        <nav className="bg-white">
            <div className='container mx-auto py-3 px-2 md:px-0'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logoWhite} alt='LOGO' />
                    </div>
                    <div className='flex items-center'>
                        <div className='md:flex hidden text-slate-700 font-semibold gap-8 inter'>
                            {
                                MenuData.map(menu => (
                                    <div key={menu.key}>
                                        <Link to="#" className='nav-link'>
                                            {menu.label}
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='border-r h-8 mx-8'></div>
                        <Languages />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar