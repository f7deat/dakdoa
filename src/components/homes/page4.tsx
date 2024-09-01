import infra from '../../assets/tree-opa.svg';
import { useEffect, useRef, useState } from 'react';
import { FormattedMessage, Link, useIntl } from 'umi';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Header1 from '../header1';
import NextButton from '../button/next';
import PreviousButton from '../button/previous';
import { apiCatalogList } from '@/services/catalog';

const Page4: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const swiperRef = useRef<SwiperRef>(null);
    const [products, setProducts] = useState<any[]>([]);
    const intl = useIntl();

    useEffect(() => {
        if (products && products.length > 0) {
            return;
        }
        apiCatalogList({
            current: 1,
            pageSize: 8,
            type: 2,
            locale: intl.locale
        }).then(response => {
            if (response.data.data) {
                setProducts(response.data.data);
            }
        })
    }, []);

    const ProductItem = (product: API.Catalog) => (
        <div className="relative card-image-overlay">
            <div className="item h-96 2xl:h-[390px]">
                <a href="#" className='text-white'>
                    <img src={product.thumbnail} alt="IMG" className="object-cover h-96 2xl:h-[390px]" loading="lazy" />
                    <div className="linear-gradient h-96 2xl:h-[390px]"></div>
                    <div className="item__overlay justify-start pt-24">
                        <Link to={`/product/${product.id}`}>
                            <div className="md:text-xl p-4 text-lg 2xl:text-xl font-bold text-white 2xl:min-h-[50px]">{product.name}</div>
                            <div className="border-b w-16 border-2 mx-4"></div>
                        </Link>
                        <div className='text-white px-4'>{product.description}</div>
                    </div>
                </a>
            </div>
        </div>
    )

    return (
        <div className="bg-white">
            <div className="flex h-full flex-col justify-between w-full" >
                <div className="relative h-full">
                    <div className="h-full flex items-center justify-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="container mx-auto px-10 md:px-0 md:py-20 py-8">
                            <div className='md:flex gap-4'>
                                <div className='md:w-1/2 flex flex-col items-center justify-center gap-4'>
                                    <div className='text-2xl mb-4 text-green-800 font-bold 2xl:text-3xl'>Cơ cấu sử dụng đất</div>
                                    <img src='https://shinecgialai.com.vn/imgs/pie-chart.png' alt='chart' />
                                </div>
                                <div className='md:w-1/2 text-center'>
                                    <div className='text-2xl mb-4 text-green-800 font-bold 2xl:text-3xl 2xl:mb-10'>Ngành nghề thu hút đầu tư</div>
                                    <div className='flex gap-4 2xl:gap-10 items-center justify-center mb-10'>
                                        <img src='https://shinecgialai.com.vn/imgs/n1.png' />
                                        <img src='https://shinecgialai.com.vn/imgs/n2.png' />
                                        <img src='https://shinecgialai.com.vn/imgs/n3.png' />
                                        <img src='https://shinecgialai.com.vn/imgs/n4.png' />
                                    </div>
                                    <div className='text-2xl mb-4 text-green-800 font-bold 2xl:text-3xl'>Hỗ trợ xuyên suốt dự án</div>
                                    <div className='flex gap-10 justify-center text-xl font-bold 2xl:mb-10 text-slate-800'>
                                        <span>1. Thông tin</span>
                                        <span>2. Pháp lý</span>
                                        <span>3. Hoạt động</span>
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

export default Page4