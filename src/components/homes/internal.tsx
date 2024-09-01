import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'umi';
import Header1 from '../header1';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { apiCatalogList } from '@/services/catalog';

const Internal: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);
    const intl = useIntl();
    const [dataSource, setDataSource] = useState<API.Catalog[]>([]);

    useEffect(() => {
        let parentId = '9eef307d-751e-44c7-3d31-08dc176ae07c';
        if (intl.locale === 'en-US') {
            parentId = '36c28881-24bb-40b2-3d37-08dc176ae07c';
        }
        if (intl.locale === 'zh-CN') {
            parentId = '3428200a-edfd-4d16-0387-08dc376f0897';
        }
        if (intl.locale === 'ko-KR') {
            parentId = 'c45c0761-8553-46e3-f2e2-08dc376fd91d';
        }
        if (intl.locale === 'ja-JP') {
            parentId = '7a420f08-13bc-4db4-5019-08dc377012fa';
        }
        apiCatalogList({
            parentId: parentId
        }).then(response => {
            setDataSource(response.data.data);
        })
    }, []);

    const Amenities = (image: string, title: string, description: string[]) => (
        <div className="md:px-4 text-white">
            <figure className="snip1577">
                <img src={image} className="w-full bg-cover h-[200px] 2xl:h-[250px]" alt="Amenities" loading="lazy" />
                <figcaption>
                    <h3>CCN SỐ 2 Đak Đoa</h3>
                    <h4>Shinec Gia Lai</h4>
                </figcaption>
                <a href="#"></a>
            </figure>
            <div className="font-bold text-xl py-2 " style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}>{title}</div>
            <ul className="text-sm list-disc" style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}>
                {
                    description.map((value: string, index: number) => (
                        <li key={index} className="ml-4">{value}</li>
                    ))
                }
            </ul>
        </div>
    )

    return (
        <div className="bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(https://shinecgialai.com.vn/imgs/bg-cover-2.png)`
            }}>
            <div className="h-full flex flex-col justify-between w-full" >
                <div className="relative h-full">
                    <div className="flex h-full items-center md:py-20 py-8">
                        <div className="container mx-auto px-10 md:px-0">
                            <Header1 active>
                                Hạ tầng kỹ thuật đồng bộ và hiện đại
                            </Header1>
                            <div className="text-white text-center mx-auto mb-8 text-base md:text-lg">
                                <FormattedMessage id='AMENITIES_DES' />
                            </div>
                            <Swiper
                                autoplay={{
                                    pauseOnMouseEnter: true
                                }}
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
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {
                                    dataSource.map(item => (
                                        <SwiperSlide>
                                            {Amenities(item.thumbnail, item.name, item.description.split(','))}
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            <div className="flex justify-between md:w-2/3 mx-auto mt-8 gap-4">
                                <button
                                    onClick={() => {
                                        swiperRef.current?.swiper.slidePrev();
                                        setActiveIndex(swiperRef.current?.swiper.realIndex || 0);
                                    }}
                                    className="h-10 w-10 md:h-12 md:w-12 2xl:h-14 2xl:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                    <ArrowLeftOutlined />
                                </button>
                                <div className="flex items-center justify-center gap-2">
                                    {
                                        dataSource.map((item, index) => (
                                            <button key={item.id} onClick={() => { setActiveIndex(index); swiperRef.current?.swiper.slideTo(index) }}
                                                className={`h-4 md:h-5 w-4 md:w-5 rounded-full border-2 border-white ` + (index === activeIndex ? 'bg-orange-500' : '')}></button>
                                        ))
                                    }
                                </div>
                                <button
                                    onClick={() => {
                                        swiperRef.current?.swiper.slideNext();
                                        setActiveIndex(swiperRef.current?.swiper.realIndex || 0);
                                    }}
                                    className="h-10 w-10 md:h-12 md:w-12 2xl:h-14 2xl:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
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

export default Internal