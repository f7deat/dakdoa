import bg from '../../assets/css/bg-feature.gif';
import fid from '../../assets/fdi.png';
import london from '../../assets/london-office.png';
import infra from '../../assets/tree-opa.svg';
import cases from '../../assets/icons/case.svg';
import tree from '../../assets/icons/tree.svg';
import { FormattedMessage, useIntl } from "umi";
import { Swiper, SwiperSlide } from 'swiper/react';
import Header1 from '../header1';
import { animated, useSpring } from '@react-spring/web';
import { Tooltip } from 'antd';

const Different: React.FC<HomeSectionItemProps> = (props) => {

    const { active } = props;
    const intl = useIntl();

    const styles = useSpring({
        y: props.active ? 0 : 400,
        opacity: props.active ? 1 : 0
    })

    const Item = (title: string, description: string[], image: string, icon: string) => (
        <div className="text-white 2xl:h-[500px] px-4 bg-green-700 rounded-xl">
            <div className="flex flex-col gap-4 justify-between h-full p-2 md:p-10">
                <div className="mb-4">
                    <img src={icon} alt="ICON" className="w-8 h-8 md:w-14 md:h-14" />
                </div>
                <div className="flex-1">
                    <div className="text-lg md:text-xl 2xl:text-4xl font-medium mb-2">{title}</div>
                </div>
                <div className='border-b border-green-200 border-dashed'></div>
                <div className='md:flex gap-6'>
                    <div className='md:w-1/2'>
                        <img src={image} loading="lazy" alt="IMG" className="w-full hover:scale-150 transition-all duration-500" />
                    </div>
                    <div className='md:w-1/2'>
                        <ul className="mb-4 text-xs md:text-sm 2xl:text-base list-disc">
                            {
                                description.map((value, index) => (
                                    <li key={index} className='py-1'>
                                        <Tooltip title={value}>
                                            <div className='line-clamp-3'>{value}</div>
                                        </Tooltip>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-gray-100 relative">
            <div className="h-full flex flex-col justify-between w-screen" >
                <div className="relative h-full">
                    <div className="flex h-full items-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="container mx-auto px-10 md:px-0">
                            <Header1 active={active} primary>
                                <FormattedMessage id='THINKING_DIFFERENT' />
                            </Header1>
                            <div className="text-gray-600 text-center mx-auto mb-8 text-base md:text-lg">
                                <FormattedMessage id='AMENITIES_DES' />
                            </div>
                            <animated.div style={styles}>
                                <Swiper autoplay loop
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 60
                                        }
                                    }}
                                    slidesPerView={1}
                                    autoHeight
                                    spaceBetween={30}
                                >
                                    <SwiperSlide className='md:flex-1'>
                                        {Item(intl.formatMessage({ id: 'SUPPORT_IN' }), [
                                            intl.formatMessage({ id: 'SUPPORT_IN1' }),
                                            intl.formatMessage({ id: 'SUPPORT_IN2' }),
                                            intl.formatMessage({ id: 'SUPPORT_IN3' })
                                        ], fid, cases)}
                                    </SwiperSlide>
                                    <SwiperSlide className='md:flex-1'>
                                        {Item(intl.formatMessage({ id: 'SUPPORT_OUT' }), [
                                            intl.formatMessage({ id: 'SUPPORT_OUT1' }),
                                            intl.formatMessage({ id: 'SUPPORT_OUT2' }),
                                            intl.formatMessage({ id: 'SUPPORT_OUT3' })
                                        ], london, tree)}
                                    </SwiperSlide>
                                </Swiper>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Different