import cover from '../../assets/cover-min.jpg';
import fid from '../../assets/fdi.png';
import london from '../../assets/london-office.png';
import infra from '../../assets/tree-opa.svg';
import { Carousel } from "antd";
import cases from '../../assets/icons/case.svg';
import tree from '../../assets/icons/tree.svg';
import { FormattedMessage, useIntl } from "umi";
import { Swiper, SwiperSlide } from 'swiper/react';

const Page7: React.FC = () => {

    const intl = useIntl();

    const Item = (title: string, description: string[], image: string, icon: string) => (
        <div className="text-white h-full px-4 bg-[#1C9C47] rounded-xl">
            <div className="flex flex-col gap-4 justify-between h-full p-4 md:p-10">
                <div className="mb-4">
                    <img src={icon} alt="ICON" className="w-8 h-8 md:w-14 md:h-14" />
                </div>
                <div className="flex-1">
                    <div className="text-lg md:text-[30px] font-medium mb-2">{title}</div>
                </div>
                <div className='md:flex gap-6'>
                    <div className='md:w-1/2'>
                        <img src={image} loading="lazy" alt="IMG" className="w-full" />
                    </div>
                    <div className='md:w-1/2'>
                        <ul className="mb-4 text-xs md:text-base list-disc">
                            {
                                description.map((value, index) => (
                                    <li key={index} className='py-1'>{value}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-full flex flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex h-full items-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="container mx-auto px-10 md:px-0">
                            <div className="text-center text-lg md:text-5xl uppercase text-white font-bold mb-4 md:mb-10">
                                <FormattedMessage id='THINKING_DIFFERENT' />
                            </div>
                            <Swiper autoplay loop
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    }
                                }}
                                slidesPerView={1}
                                autoHeight
                                spaceBetween={60}
                                >
                                <SwiperSlide>
                                    {Item(intl.formatMessage({ id: 'SUPPORT_IN' }), [
                                        intl.formatMessage({ id: 'SUPPORT_IN1' }),
                                        intl.formatMessage({ id: 'SUPPORT_IN2' }),
                                        intl.formatMessage({ id: 'SUPPORT_IN3' })
                                    ], fid, cases)}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {Item(intl.formatMessage({ id: 'SUPPORT_OUT' }), [
                                        intl.formatMessage({ id: 'SUPPORT_OUT1' }),
                                        intl.formatMessage({ id: 'SUPPORT_OUT2' }),
                                        intl.formatMessage({ id: 'SUPPORT_OUT3' })
                                    ], london, tree)}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page7