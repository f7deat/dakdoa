import infra from '../../assets/tree-opa.svg';
import cover from '../../assets/cover-min.jpg';
import factory from '../../assets/icons/factory.svg';
import infrastructure from '../../assets/icons/infrastructure.svg';
import land from '../../assets/icons/land.svg';
import logistics from '../../assets/icons/logistic.svg';
import office from '../../assets/icons/office.svg';
import warehouse from '../../assets/icons/warehouse.svg';
import { FormattedMessage } from 'umi';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';

const ServiceItem = (icon: string, name: string) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <div>
                <img src={icon} alt="IMG" className="h-10 w-10 md:h-16 md:w-16" />
            </div>
            <div className="text-sm md:text-2xl text-center montserrat font-semibold text-white">{name}</div>
        </div>
    )
}

const SlideItem = (
    <div key={1} className='px-10 md:px-0'>
        <div className="flex flex-wrap mb-4">
            <div className="w-1/3 md:w-1/2 border-r border-b">
                {ServiceItem(land, 'Đất công nghiệp cho thuê')}
            </div>
            <div className="w-1/3 md:w-1/2 border-b">
                {ServiceItem(factory, 'Nhà xưởng/Nhà kho cho thuê')}
            </div>
            <div className="w-1/3 md:w-1/2 border-r border-b">
                {ServiceItem(office, 'Cho thuê văn phòng')}
            </div>
            <div className="w-1/3 md:w-1/2 border-b">
                {ServiceItem(warehouse, 'Cho thuê đất thương mại')}
            </div>
            <div className="w-1/3 md:w-1/2 border-r">
                {ServiceItem(logistics, 'Dịch vụ Logistics')}
            </div>
            <div className="w-1/3 md:w-1/2">
                {ServiceItem(infrastructure, 'Dịch vụ cơ sở hạ tầng')}
            </div>
        </div>
    </div>
)

const Page3: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-body flex flex-col justify-between">
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="h-body items-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className='container mx-auto flex h-full justify-center flex-col md:gap-20 gap-4'>
                            <div className='md:flex items-center mb-4 md:gap-20 gap-4'>
                                <div className='md:w-1/2'>
                                    <Swiper autoplay
                                        ref={swiperRef}
                                        modules={[Autoplay]}
                                        onAutoplay={(event) => {
                                            setActiveIndex(event.realIndex);
                                        }}
                                        loop
                                    >
                                        <SwiperSlide>
                                            {SlideItem}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {SlideItem}
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="md:w-1/2 montserrat text-white">
                                    <div className="text-lg md:text-[50px] font-bold md:mb-8 mb-2">
                                        <FormattedMessage id='PRODUCT' />
                                    </div>
                                    <div className="md:text-xl font-semibold mb-4">
                                        Quỹ đất công nghiệp cho thuê: 48,16 ha
                                    </div>
                                    <div className="mb-6 text-sm md:text-base hidden md:block">
                                        Với mục tiêu xây dựng CCN sinh thái, tuần hoàn và tái tạo, DakDoa 2 ưu tiên thu hút các ngành nghề về sản xuất, chế biến nông sản và gỗ, cùng với đó là lĩnh vực logistics giúp hình thành các liên kết cộng sinh, giúp tối ưu hoá lợi nhuận và giảm thiểu chi phí.
                                    </div>
                                    <div className="md:text-xl font-semibold mb-4">
                                        Quỹ đất Hậu cần dịch vụ cho thuê: 4,58 ha
                                    </div>
                                    <div className="mb-4 text-sm md:text-base hidden md:block">
                                        Thu hút các dự án như Trung tâm thương mại, ngân hàng, khu trưng bày triển lãm, siêu thị, cửa hàng dịch vụ bán lẻ; nhà hàng, bãi đỗ xe và các công trình thương mại dịch vụ… Khu trưng bày và triển lãm các sản phẩm của các Nhà đầu tư trong cụm công nghiệp, trung tâm phân phối các sản phẩm, trung tâm bảo trì bảo hành, triển lãm các giải pháp công nghệ…
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between mx-auto md:w-1/2">
                                <button
                                    onClick={() => {
                                        swiperRef.current?.swiper.slidePrev()
                                    }}
                                    className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <div className="flex items-center justify-center gap-2">
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (activeIndex === 0 ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (activeIndex === 1 ? 'bg-orange-500' : '')}></button>
                                </div>
                                <button
                                    onClick={() => {
                                        swiperRef.current?.swiper.slideNext()
                                    }} className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
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

export default Page3