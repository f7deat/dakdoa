import infra from '../../assets/tree-opa.svg';
import { FormattedMessage, Link, useIntl } from 'umi';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import { ArrowLeftOutlined, SoundOutlined, StopOutlined } from '@ant-design/icons';
import { Autoplay } from 'swiper/modules';
import { animated, useSpring } from '@react-spring/web';

type NewsProps = {
    news: API.Catalog[];
    active: boolean;
}

const News: React.FC<NewsProps> = (props) => {

    const { news, active } = props;
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const styles = useSpring({
        y: props.active ? 0 : -400,
        opacity: props.active ? 1 : 0
    })

    const fadeUp = useSpring({
        y: props.active ? 0 : 100,
        opacity: props.active ? 1 : 0,
        delay: 200
    })

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-white relative">
            <div className="h-full flex flex-col justify-between">
                <div className="relative h-full" style={{
                }}>
                    <div className="h-full items-center">
                        <div className='mx-auto md:flex h-full justify-center flex-col md:gap-20 gap-4 relative'>
                            <div className='w-96 bg-green-900 absolute top-0 left-0 h-body z-10'></div>
                            <div className='w-96 bg-green-700 absolute top-0 left-96 h-body z-10'></div>
                            <div className='h-1/2 bg-[#00812C] absolute bottom-0 left-0 right-0' style={{
                                backgroundImage: `url(${infra})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'bottom right'
                            }}></div>
                            <div className='relative z-10 container mx-auto h-full md:p-0 px-10 py-10'>
                                <div className='md:flex items-center mb-4 md:gap-20 gap-4 h-full'>
                                    <div className='md:w-1/2 md:h-full flex items-center flex-col justify-center mb-4'>
                                        <div>
                                            <div className='border p-2 mb-4'>
                                                <div className='text-white text-xs mb-2'>SHINEC GIA LAI</div>
                                                <video autoPlay loop muted className="w-auto min-w-full min-h-full" ref={videoRef}>
                                                    <source
                                                        src="https://shinecgialai.com.vn/videos/dakdoa-full.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                                <div className='text-right text-white mt-2 text-xs'>CCN SỐ 2 ĐAK ĐOA</div>
                                            </div>
                                            <div className='flex items-center gap-4 text-white text-xl'>
                                                <button
                                                    onClick={() => {
                                                        if (videoRef.current) {
                                                            if (videoRef.current.paused) {
                                                                videoRef.current.play();
                                                            } else {
                                                                videoRef.current.pause();
                                                            }
                                                        }
                                                    }}
                                                    className='hover:scale-125 transition-all duration-500'><StopOutlined /></button>
                                                <button
                                                    onClick={() => {
                                                        if (videoRef.current) {
                                                            if (videoRef.current.muted) {
                                                                videoRef.current.muted = false;
                                                            } else {
                                                                videoRef.current.muted = true;
                                                            }
                                                        }
                                                    }}
                                                    className='hover:scale-125 transition-all duration-500'><SoundOutlined /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 text-white">
                                        <animated.div style={styles}>
                                            <div className='text-white md:text-green-700 md:text-3xl font-semibold uppercase'>
                                                <FormattedMessage id='LATEST_NEWS' />
                                            </div>
                                        </animated.div>
                                        <animated.div style={fadeUp}>
                                            <div className='py-4 flex-1'>
                                                <Swiper
                                                    ref={swiperRef}
                                                    slidesPerView={2}
                                                    loop
                                                    autoplay={{
                                                        pauseOnMouseEnter: true
                                                    }}
                                                    modules={[Autoplay]}
                                                    spaceBetween={30}
                                                >
                                                    {
                                                        news.map(x => (
                                                            <SwiperSlide>
                                                                <div className='flex gap-2 flex-col' key={x.id}>
                                                                    <figure className="snip1577">
                                                                        <img src={x.thumbnail} className="w-full bg-cover h-32 md:h-64 mb-2" alt="Amenities" loading="lazy" />
                                                                        <figcaption>
                                                                            <h3>CCN SỐ 2 Đak Đoa</h3>
                                                                            <h4>Shinec Gia Lai</h4>
                                                                        </figcaption>
                                                                        <Link to={`/news/${x.id}`}></Link>
                                                                    </figure>
                                                                    <Link to={`/news/${x.id}`} className='line-clamp-2 md:text-lg font-semibold text-white hover:text-white hover:underline'>
                                                                        {x.name}
                                                                    </Link>
                                                                    <div className='text-sm line-clamp-2 mb-4'>{x.description}</div>
                                                                </div>
                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                </Swiper>
                                                <div className="flex justify-between mx-auto text-black">
                                                    <button
                                                        onClick={() => {
                                                            swiperRef.current?.swiper.slidePrev();
                                                            setActiveIndex(swiperRef?.current?.swiper.realIndex || activeIndex);
                                                        }}
                                                        className="h-10 w-10 md:h-12 md:w-12 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                                        <ArrowLeftOutlined />
                                                    </button>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button className={`h-5 w-5 rounded-full border-2 border-white ` + (activeIndex === 0 ? 'bg-orange-500' : '')}></button>
                                                        <button className={`h-5 w-5 rounded-full border-2 border-white ` + (activeIndex === 1 ? 'bg-orange-500' : '')}></button>
                                                        <button className={`h-5 w-5 rounded-full border-2 border-white ` + (activeIndex === 2 ? 'bg-orange-500' : '')}></button>
                                                        <button className={`h-5 w-5 rounded-full border-2 border-white ` + (activeIndex === 3 ? 'bg-orange-500' : '')}></button>
                                                    </div>
                                                    <button
                                                        onClick={() => {
                                                            swiperRef.current?.swiper.slideNext();
                                                            setActiveIndex(swiperRef?.current?.swiper.realIndex || activeIndex);
                                                        }} className="h-10 w-10 md:h-12 md:w-12 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </animated.div>
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

export default News