import bg from '../../assets/css/bg-feature.gif';
import infra from '../../assets/tree-opa.svg';
import { useRef, useState } from 'react';
import { FormattedMessage, Link } from 'umi';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Header1 from '../header1';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

type SectionProps = {
    products: API.Catalog[];
    active: boolean;
}

const Page4: React.FC<SectionProps> = (props) => {

    const { products, active } = props;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);

    const ProductItem = (product: API.Catalog) => (
        <div className="relative card-image-overlay">
            <div className="item">
                <a href="#" className='text-white'>
                    <img src={product.thumbnail} alt="IMG" className="object-cover" loading="lazy" />
                    <div className="linear-gradient"></div>
                    <div className="item__overlay">
                        <Link to={`/product/${product.id}`}>
                            <div className="md:text-xl p-4 text-lg font-bold text-white">{product.name}</div>
                        <div className="border-b w-16 border-2 mx-4 mb-2"></div>
                        </Link>
                        <div className='text-white px-4 line-clamp-3'>{product.description}</div>
                    </div>
                </a>
            </div>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div className="flex h-full flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="h-full flex items-center justify-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="container mx-auto px-10 md:px-0">
                            <Header1 active={active}>
                                <FormattedMessage id='PRODUCT' />
                            </Header1>
                            <div className="text-white montserrat text-center max-w-[1000px] mx-auto mb-8 text-sm md:text-base">
                                <FormattedMessage id='PRODUCT_DES' />
                            </div>
                            <Swiper
                                ref={swiperRef}
                                slidesPerView={1}
                                loop
                                autoplay={{
                                    pauseOnMouseEnter: true,

                                }}
                                modules={[Autoplay]}
                                spaceBetween={30}
                                onAutoplay={(event) => {
                                    setActiveIndex(event.realIndex);
                                }}

                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                    },
                                    1536: {
                                        slidesPerView: 5,
                                    },
                                }}
                            >
                                {products.map(product => (
                                    <SwiperSlide key={product.id}>
                                        {ProductItem(product)}
                                    </SwiperSlide>
                                ))}

                            </Swiper>

                            <div className="flex justify-between mx-auto mt-8">
                                <button
                                    onClick={() => {
                                        swiperRef.current?.swiper.slidePrev()
                                    }}
                                    className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                    <ArrowLeftOutlined />
                                </button>
                                <div className="flex items-center justify-center gap-2">
                                    {
                                        products.map((_, index) => (
                                            <button className={`h-5 w-5 rounded-full border-2 border-white ` + (index === activeIndex ? 'bg-orange-500' : '')}></button>
                                        ))
                                    }
                                </div>
                                <button
                                    onClick={() => {
                                        swiperRef.current?.swiper.slideNext()
                                    }}
                                    className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                    <ArrowRightOutlined />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4