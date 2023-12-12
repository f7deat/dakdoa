
import { MenuData } from '@/data';
import cover from '../../assets/cover-min.jpg';
import logoWhite from '../../assets/logo/logo-white.svg';
import icon360 from '../../assets/icons/360.svg';
import viFlag from '../../assets/flags/vi.svg';

const Cover: React.FC = () => {
    return (
        <div>
            <div className="h-screen bg-cover bg-no-repeat bg-fixed bg-right bg-green-800"
                style={{
                    backgroundImage: `url(${cover})`
                }}>
                <div className='h-screen' style={{
                    background: 'linear-gradient(118deg, #0B8935 29.32%, rgba(27, 151, 60, 0.61) 48.73%, rgba(255, 255, 255, 0.00) 73.8%)'
                }}>
                    <div className='container mx-auto h-full'>
                        <div className='flex justify-between p-8 items-center'>
                            <div>
                                <img src={logoWhite} alt='LOGO' />
                            </div>
                            <div className='flex items-center'>
                                <div className='flex text-white font-semibold gap-8 inter'>
                                    {
                                        MenuData.map(menu => (
                                            <div key={menu.key}>{menu.label}</div>
                                        ))
                                    }
                                </div>
                                <div className='border-r h-8 mx-8'></div>
                                <button className='border rounded-full px-4 py-2 flex items-center gap-2 text-white font-semibold'>
                                    <img src={viFlag} alt='VI' />
                                    <span>Tiếng Việt</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='h-full'>
                            <div className='montserrat text-[68px] font-extrabold text-white mt-[134px] leading-[74px] mb-[40px] uppercase' style={{
                                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            }}>
                                <div>Khu công nghiệp</div>
                                <div>SHINEC GIA LAI</div>
                            </div>
                            <div className='text-white montserrat mb-[40px]' style={{
                                maxWidth: 537
                            }}>
                                Thương hiệu KCN Nam Cầu Kiền gắn liền với hình ảnh khu công nghiệp sinh thái, thân thiện với môi trường, chuỗi kinh tế tuần hoàn gắn liền với bảo vệ môi trường.
                            </div>
                            <div className='flex gap-6 font-semibold text-lg inter'>
                                <button className='rounded-full text-white py-2 px-8 bg-gradient-to-b from-orange-500 to-orange-400'>Liên hệ với chúng tôi</button>
                                <button className='rounded-full text-green-700 bg-white py-2 px-8 flex gap-3 items-center'>
                                    <span>VR 360°</span>
                                    <img src={icon360} alt='icon' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover