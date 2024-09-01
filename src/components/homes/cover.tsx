import ContactButton from '../button';
import { animated, useSpring } from '@react-spring/web';
import { AliyunOutlined } from '@ant-design/icons';
import { Link, useIntl } from 'umi';

const Cover: React.FC = () => {

    const intl = useIntl();
    return (
        <div className="bg-no-repeat bg-cover bg-right bg-green-800 w-full h-[600px]"
            style={{
                backgroundImage: `url('https://shinecgialai.com.vn/imgs/bg-cover-2.png')`
            }}>
            <div className='h-full relative'>
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
                                {intl.formatMessage({ id: 'COVER_SUBTITLE' })}
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover