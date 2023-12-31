import { Carousel, CarouselProps, Empty } from "antd"
import { CarouselRef } from "antd/es/carousel";
import { useCallback, useRef, useState } from "react";

type NestedCarouselProps = CarouselProps & {
    items: any[]
}

const NestedCarousel: React.FC<NestedCarouselProps> = (props) => {

    const { items } = props;
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
        <div>
            <Carousel ref={carouselRef} dots={false} className="h-full" {...props} beforeChange={beforeChange}>
                {
                    items.map((item, index) => <div key={index}>{item}</div>)
                }
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
                </div>
                <button className="h-10 w-10 md:h-14 md:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500" onClick={() => onChange(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default NestedCarousel