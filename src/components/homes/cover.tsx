
import cover from '../../assets/cover2.png';
import icon360 from '../../assets/icons/360.svg';
import { Link, useIntl } from 'umi';
import ContactButton from '../button';
import { animated, useSpring } from '@react-spring/web';

const Cover: React.FC<HomeSectionItemProps> = (props) => {

    const { active } = props;
    const styles = useSpring({
        y: active ? 0 : 300,
        opacity: active ? 1 : 0
    })
    const styles2 = useSpring({
        y: active ? 0 : 100,
        opacity: active ? 1 : 0,
        delay: 300
    })

    const intl = useIntl();
    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 w-full"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className='h-full relative' style={{
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
                                        {intl.formatMessage({ id: 'INDUSTRIAL_CLUSTERS' })}
                                    </div>
                                    <div>
                                        {intl.formatMessage({ id: 'NO_2' }) + ' Đak Đoa'}
                                    </div>
                                </div>
                            </div>
                            <div className='text-white montserrat mb-6 md:mb-[40px] max-w-[537px]'>
                                <animated.div style={styles}>
                                    {intl.formatMessage({ id: 'COVER_SUBTITLE' })}
                                </animated.div>
                            </div>
                            <animated.div style={styles2}>
                                <div className='flex md:gap-6 gap-2 font-semibold md:text-lg inter justify-center md:justify-start'>
                                    <ContactButton />
                                    <Link to='/vr360'>
                                        <button className='rounded-full text-green-700 bg-white py-1 md:py-2 px-2 md:px-8 flex gap-3 items-center'>
                                            <span>VR 360°</span>
                                            <img src={icon360} alt='icon' className='w-8 md:w-10' />
                                        </button>
                                    </Link>
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover