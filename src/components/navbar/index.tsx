import { MenuData } from '@/data';
import logoWhite from '../../assets/logo/logo-green.svg';
import viFlag from '../../assets/flags/vi.svg';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white">
            <div className='container mx-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src={logoWhite} alt='LOGO' />
                    </div>
                    <div className='flex items-center'>
                        <div className='flex text-slate-700 font-semibold gap-8 inter'>
                            {
                                MenuData.map(menu => (
                                    <div key={menu.key}>{menu.label}</div>
                                ))
                            }
                        </div>
                        <div className='border-r h-8 mx-8'></div>
                        <button className='border rounded-full px-4 py-2 flex items-center gap-2 text-slate-700 font-semibold'>
                            <img src={viFlag} alt='VI' />
                            <span>Tiếng Việt</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar