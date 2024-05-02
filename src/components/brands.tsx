import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
    brands?: any[];
}

const Brands: React.FC<Props> = ({ brands }) => {

    const CarouselItem = (logo: string) => (
        <div className='shadow-lg'>
            <div className='h-24 2xl:h-40 flex justify-center items-center p-4 bg-white border-green-800 border-2 rounded-lg'>
                <img src={logo} alt='LOGO' className='transition duration-500 h-20 object-contain' />
            </div>
        </div>
    )

    return (
        <>
            {
                brands && (
                    <Swiper
                        slidesPerView={2}
                        autoplay={{
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            768: {
                                spaceBetween: 20,
                                slidesPerView: 2
                            },
                            1024: {
                                spaceBetween: 30,
                                slidesPerView: 2
                            },
                            1280: {
                                spaceBetween: 40,
                                slidesPerView: 5
                            },
                            1536: {
                                spaceBetween: 60,
                                slidesPerView: 4
                            },
                        }}
                        loop
                        spaceBetween={10}
                        modules={[Autoplay, Navigation]}
                    >
                        {
                            brands.map(brand => (
                                <SwiperSlide key={brand.id}>
                                    {CarouselItem(brand.logo)}
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                )
            }
        </>
    )
}

export default Brands;