import bg from '../../assets/css/bg-feature.gif';
import trafic from '../../assets/amenities/trafic.png';
import electric from '../../assets/amenities/electric.png';
import water from '../../assets/amenities/water.png';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';

const Page5: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);
    const intl = useIntl();

    const Amenities = (image: string, title: string, description: string[]) => (
        <div className="px-4 text-white montserrat">
            <img src={image} className="w-full bg-cover h-[250px] md:h-[317px] rounded-lg mb-2" alt="Amenities" loading="lazy" />
            <div className="font-semibold text-xl py-2">{title}</div>
            <ul className="text-sm list-disc">
                {
                    description.map((value: string, index: number) => (
                        <li key={index} className="ml-4">{value}</li>
                    ))
                }
            </ul>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div className="h-full flex flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex  h-full items-center">
                        <div className="container mx-auto px-10 md:px-0">
                            <div className="text-center text-lg md:text-[50px] montserrat text-white font-bold md:mb-8">
                                <FormattedMessage id='INTERNAL_AMENITIES' />
                            </div>
                            <div className="text-white text-center max-w-[720px] mx-auto mb-8 text-base md:text-lg">
                                <FormattedMessage id='AMENITIES_DES' />
                            </div>
                            <Swiper
                                autoplay
                                loop
                                modules={[Autoplay]}
                                ref={swiperRef}
                                slidesPerView={1}
                                onAutoplay={(event) => {
                                    setActiveIndex(event.realIndex);
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                    },
                                    1536: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    {Amenities(trafic, intl.formatMessage({id: 'Traffic'}), [intl.formatMessage({id: 'Traffic_des1'}), intl.formatMessage({id: 'Traffic_des2'})])}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {Amenities(electric, intl.formatMessage({id: 'WATER_ELEC'}), [intl.formatMessage({id: 'WATER_ELEC_DES1'}), intl.formatMessage({id: 'WATER_ELEC_DES2'})])}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {Amenities(water, intl.formatMessage({id: 'wastewater'}), [intl.formatMessage({id: 'wastewater_des1'}), intl.formatMessage({id: 'wastewater_des2'})])}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {Amenities('https://www.elcom.com.vn/storage/uploads/images/o8cvBIoy6PcyWJkPMGNFKFYQau4llZ1XI1dCXbeX.jpg', 
                                    intl.formatMessage({id: 'Internet'}), 
                                    [intl.formatMessage({id: 'Internet_des1'}), intl.formatMessage({id: 'Internet_des2'})])}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {Amenities('https://file1.dangcongsan.vn/data/0/images/2021/09/10/hungnm/t12.jpg', 
                                    intl.formatMessage({id: 'FIRE_PROTECTION'}), 
                                    [intl.formatMessage({id: 'FIRE_PROTECTION_DES1'}), intl.formatMessage({id: 'FIRE_PROTECTION_DES2'})])}
                                </SwiperSlide>
                            </Swiper>

                            <div className="flex justify-between md:w-2/3 mx-auto mt-8 gap-4">
                                <button className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <div className="flex items-center justify-center gap-2">
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (0 === activeIndex ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (1 === activeIndex ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (2 === activeIndex ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (3 === activeIndex ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (4 === activeIndex ? 'bg-orange-500' : '')}></button>
                                </div>
                                <button className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5