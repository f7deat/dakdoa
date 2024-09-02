import ContactButton from '../button';
import { animated, useSpring } from '@react-spring/web';
import { AliyunOutlined } from '@ant-design/icons';
import { Link, useIntl } from 'umi';

const Cover: React.FC = () => {

    const intl = useIntl();
    return (
        <div className="bg-no-repeat bg-cover bg-right w-full md:h-[500px] 2xl:h-[600px] h-[300px]"
            style={{
                backgroundImage: `url('https://shinecgialai.com.vn/imgs/bg-cover-2.png')`
            }}>
            <div className='h-full relative'>
                <div className='container mx-auto md:px-10 2xl:px-0 h-full'>
                    <div className='h-full md:py-0'>
                        <div className='md:px-10 px-4 md:px-0'>
                            <div className='2xl:pt-[134px] md:pt-20 pt-10'>
                                <div className='xl:text-5xl 2xl:text-[68px] font-extrabold text-3xl text-white 2xl:leading-[90px] mb-4 md:mb-6 2xl:mb-[20px] uppercase' style={{
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
                            <div className='text-white mb-4 md:mb-[40px] max-w-[545px] z-10 relative'>
                                {intl.formatMessage({ id: 'COVER_SUBTITLE' })}
                            </div>
                            <div className='hidden md:flex flex-col md:flex-row md:gap-6 gap-2 font-semibold md:text-lg inter justify-center md:justify-start'>
                                <ContactButton />
                                <div className='vr'>
                                    <div className='btn'>
                                        <Link to='/vr360' className='z-10 w-full rounded-full text-red-600 bg-white md:py-3 px-2 md:px-8 flex gap-3 items-center justify-center relative'>
                                            <div className="loader">
                                                <span><AliyunOutlined className='text-xl' /> VR 360</span>
                                                <div className="tile"></div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover