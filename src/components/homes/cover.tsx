import cover from '../../assets/cover2.png';
import ContactButton from '../button';
import { animated, useSpring } from '@react-spring/web';
import { AliyunOutlined } from '@ant-design/icons';
import { Link, useIntl } from 'umi';

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
                background: 'linear-gradient(118deg, #0a8835 29.32%, rgba(27, 151, 60, 0.61) 48.73%, rgba(255, 255, 255, 0.00) 73.8%)'
            }}>
                <div className='container mx-auto md:px-10 2xl:px-0 h-full'>
                    <div className='h-full md:py-0'>
                        <div className='px-10 md:px-0'>
                            <div className='pt-[134px]'>
                                <div className='montserrat text-5xl lg:text-[68px] font-extrabold text-white lg:leading-[94px] mb-4 md:mb-[40px] uppercase' style={{
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
                            <div className='text-white montserrat mb-6 md:mb-[40px] max-w-[545px]'>
                                <animated.div style={styles}>
                                    {intl.formatMessage({ id: 'COVER_SUBTITLE' })}
                                </animated.div>
                            </div>
                            <animated.div style={styles2}>
                                <div className='flex flex-col md:flex-row md:gap-6 gap-2 font-semibold md:text-lg inter justify-center md:justify-start'>
                                    <ContactButton />
                                    <div className='vr'>
                                        <div className='btn'>
                                            <Link to='/vr360' className='z-10 w-full rounded-full text-red-600 bg-white py-3 px-2 md:px-8 flex gap-3 items-center justify-center relative'>
                                                <div className="loader">
                                                    <span><AliyunOutlined className='text-xl' /> VR 360</span>
                                                    <div className="tile"></div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
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