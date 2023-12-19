import cover from '../../assets/cover-min.jpg';
import infra from '../../assets/tree-opa.svg';
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRef, useState } from "react";
import { FormattedMessage } from "umi";

const Page8: React.FC = () => {

    const Item = () => (
        <div className="px-10">
            <div className="p-4 md:p-[40px] rounded-lg max-w-[1000px]" style={{
                background: 'linear-gradient(109deg, rgba(131, 255, 173, 0.30) 0%, rgba(91, 208, 131, 0.28) 73.74%, rgba(54, 164, 92, 0.00) 137.77%)'
            }}>
                <div className="md:flex gap-4 montserrat text-white">
                    <div className="md:w-[387px] bg-slate-200 rounded-lg">

                    </div>
                    <div className="flex-1 px-8 md:border-l">
                        <div className="mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width={66} height={57} viewBox="0 0 66 57" fill="none">
                                <path opacity="0.4" d="M66 11.7234C61.9259 13.2057 58.8025 15.4965 56.6296 18.5957C54.5926 21.695 53.5741 25.4007 53.5741 29.7128L66 29.7128L66 57L40.537 57L40.537 29.7128C40.537 25.9397 41.2161 22.4362 42.5741 19.2021C43.9321 15.9681 45.7654 13.1383 48.0741 10.7128C50.3827 8.15249 53.0309 5.99646 56.0185 4.24469C59.142 2.49291 62.4691 1.07802 66 5.7699e-06L66 11.7234ZM25.463 11.7234C21.3889 13.2057 18.2654 15.4965 16.0926 18.5957C14.0556 21.695 13.037 25.4007 13.037 29.7128L25.463 29.7128L25.463 57L-4.9831e-06 57L-2.59757e-06 29.7128C-2.26772e-06 25.9397 0.679011 22.4362 2.03704 19.2021C3.39506 15.9681 5.22839 13.1383 7.53704 10.7128C9.84568 8.15249 12.4938 5.99646 15.4815 4.24468C18.6049 2.49291 21.9321 1.07802 25.463 2.22604e-06L25.463 11.7234Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-[30px] font-bold mb-4">Ông. Nguyễn Mộng Lân</div>
                            <div className="italic mb-4 text-sm md:text-lg">
                                KCN Shinec Gia Lai đã dành cho chúng tôi một lô đất nằm cạnh hai cầu cảng container và cảng hàng lỏng. Hàng tháng chúng tôi phải nhập khoảng 2000 tấn chất lỏng về và việc nằm ngay tại cầu cảng giảm chi phí vận hành cho chúng tôi rất nhiều. Từ vị trí này kết nối với hệ thống đường cao tốc trong thành phố, tỏa đi khắp khu vực phía bắc cũng vô cùng thuận tiện. Thực sự chúng tôi rất tâm đắc với địa điểm đầu tư này.
                            </div>
                            <div className="text-lg font-bold">
                                Tổng Giám đốc Cty TNHH Vico
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const carouselRef = useRef<CarouselRef>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const beforeChange = (currentSlide: number) => {
        setCurrentSlide(currentSlide);
    }

    const onChange = (next: boolean) => {
        if (next) {
            carouselRef.current?.next();
        } else {
            carouselRef.current?.prev();
        }
    }

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-body flex flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="h-body items-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="h-body p-20 md:px-0">
                            <div className="text-center text-lg md:text-[50px] montserrat text-white font-bold mb-4 md:mb-8">
                                <FormattedMessage id='TESTIMONIAL' />
                            </div>
                            <Carousel slidesPerRow={1}
                                ref={carouselRef}
                                beforeChange={beforeChange}
                                dots={false}
                                autoplay
                                centerMode
                                variableWidth
                                responsive={[
                                    {
                                        breakpoint: 640,
                                        settings: {
                                            slidesPerRow: 1
                                        }
                                    }
                                ]}>
                                {Item()}
                                {Item()}
                                {Item()}
                            </Carousel>
                            <div className="flex justify-between w-2/3 mx-auto mt-8">
                                <button className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500" onClick={() => onChange(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <div className="flex items-center justify-center gap-2">
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (0 === currentSlide ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (1 === currentSlide ? 'bg-orange-500' : '')}></button>
                                    <button className={`h-5 w-5 rounded-full border-2 border-white ` + (2 === currentSlide ? 'bg-orange-500' : '')}></button>

                                </div>
                                <button className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500" onClick={() => onChange(true)}>
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

export default Page8