
import cover from '../../assets/cover-min.jpg';
import icon360 from '../../assets/icons/360.svg';
import { FormattedMessage, Link } from 'umi';
import ContactButton from '../button';

const Cover: React.FC = () => {
    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-green-800"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className='h-body relative' style={{
                background: 'linear-gradient(118deg, #0B8935 29.32%, rgba(27, 151, 60, 0.61) 48.73%, rgba(255, 255, 255, 0.00) 73.8%)'
            }}>
                <div className='container mx-auto h-full'>
                    <div className='h-full md:py-0'>
                        <div className='px-10 md:px-0'>
                            <div className='pt-[134px]'>
                                <div className='montserrat text-2xl lg:text-[68px] font-extrabold text-white lg:leading-[94px] mb-4 md:mb-[40px] uppercase' style={{
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                                }}>
                                    <div>
                                        <FormattedMessage id='INDUSTRIAL_CLUSTERS' />
                                    </div>
                                    <div>
                                        <FormattedMessage id='NO_2' /> Đak Đoa
                                    </div>
                                </div>
                            </div>
                            <div className='text-white montserrat mb-6 md:mb-[40px] max-w-[537px]'>
                                <FormattedMessage id='COVER_SUBTITLE' />
                            </div>
                            <div className='flex md:gap-6 gap-2 font-semibold md:text-lg inter justify-center md:justify-start'>
                                <ContactButton />
                                <Link to='/vr360'>
                                    <button className='rounded-full text-green-700 bg-white py-1 md:py-2 px-2 md:px-8 flex gap-3 items-center'>
                                        <span>VR 360°</span>
                                        <img src={icon360} alt='icon' className='w-8 md:w-10' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-16 w-16 border-4 border-green-700 rounded-full absolute bottom-20 right-20 hidden md:flex items-center justify-center bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={33} height={33} viewBox="0 0 33 33" fill="none">
                        <g filter="url(#filter0_d_242_485)">
                            <path d="M0 7.38369C0 7.24249 0.0175175 7.11894 0.0350359 6.97774C0.227738 5.301 0.98103 3.7478 2.11973 2.5123C2.80294 1.77101 3.50368 0.870859 4.30952 0.288411C4.5723 0.0942614 4.88763 -0.0292896 5.20296 0.0060103C5.46574 0.0236602 5.72852 0.14721 5.93874 0.30606C7.51539 1.36506 8.86431 2.7241 10.0906 4.15375C11.1417 5.37159 12.7709 6.73064 11.6497 8.44269C11.1592 9.20163 10.3709 9.69583 9.65263 10.2077C7.93583 11.4079 6.88473 13.1905 8.2862 15.1144C10.7913 18.4855 13.7519 21.3977 17.1505 23.8511C18.4994 24.8218 19.8659 24.7159 21.0571 23.5157C21.7403 22.8274 22.4235 22.1214 23.1068 21.4154C23.4571 21.0447 23.7725 20.6035 24.1929 20.3211C25.2615 19.5798 26.2776 20.5682 26.9783 21.3271C27.8718 22.2979 28.8178 23.198 29.7462 24.1335C30.2017 24.5924 30.6747 25.0689 31.1127 25.5631C31.463 25.9514 31.9185 26.3397 31.9886 26.8869C32.0587 27.3634 31.7959 27.84 31.4806 28.193C31.0076 28.7048 30.4645 29.1637 29.9564 29.6403C29.3433 30.2051 28.6776 30.7169 27.9243 31.0876C20.3564 34.7058 11.4745 26.7457 6.86721 21.5036C6.60443 21.2212 6.35918 20.9212 6.11392 20.6211C5.64092 20.0564 5.18544 19.4739 4.74748 18.8738L4.71245 18.8209C3.25842 16.8441 2.03213 14.7084 1.10366 12.4316C0.472997 10.896 -0.0700732 9.09573 0.0175188 7.40134L0 7.38369Z" fill="#0B8936" />
                        </g>
                        <defs>
                            <filter id="filter0_d_242_485" x={0} y={0} width="32.6364" height="32.6364" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="0.636364" dy="0.636364" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_242_485" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_242_485" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Cover