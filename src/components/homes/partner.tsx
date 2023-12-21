import { FormattedMessage } from 'umi';
import cover from '../../assets/cover-min.jpg';
import { Carousel } from 'antd';
import vietcombank from '../../assets/logo/vietcombank.png';
import growViet from '../../assets/logo/grow-viet.png';
import mit from '../../assets/logo/mit.png';
import sonha from '../../assets/logo/sonha.png';
import gomDatViet from '../../assets/logo/gom-dat-viet.png';
import ContactButton from '../button';
import land from '../../assets/icons/land.svg';
import target from '../../assets/icons/target.svg';
import support from '../../assets/icons/support.svg';

const Partner: React.FC = () => {

    const CarouselItem = (logo: string) => (
        <div>
            <div className='rounded-xl h-[160px] max-w-[400px] flex justify-center items-center p-4 bg-gradient-to-b from-[#28A753] to-[#108E3B]'>
                <img src={logo} alt='LOGO' />
            </div>
        </div>
    )

    const TextItem = (title: string, description: string, icon: string) => (
        <div className='border-l border-[#f9f9f947] px-8'>
            <div className='mb-8'>
                <img src={icon} loading='lazy' alt='ICON' />
            </div>
            <div className='font-medium text-lg md:text-2xl mb-2'>{title}</div>
            <div>{description}</div>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-body flex flex-col justify-between">
                <div className="relative h-full" style={{
                    background: 'linear-gradient(180deg, rgba(11, 137, 54, 0.67) 0%, #00812C 55.05%)'
                }}>
                    <div className='container mx-auto py-4 text-white'>
                        <div className="text-center text-lg md:text-[50px] font-bold mb-4 md:mb-8 py-10">
                            <FormattedMessage id='PARNERS_AND_CUSTOMERS' />
                        </div>
                        <div className='grid grid-cols-4 mb-4 md:mb-20'>
                            <div>
                                <div className='mb-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="48" viewBox="0 0 55 48" fill="none">
                                        <path opacity="0.4" d="M55 9.87235C51.6049 11.1206 49.0021 13.0496 47.1914 15.6596C45.4938 18.2695 44.6451 21.3901 44.6451 25.0213L55 25.0213L55 48L33.7809 48L33.7809 25.0213C33.7809 21.844 34.3467 18.8936 35.4784 16.1702C36.6101 13.4468 38.1379 11.0638 40.0617 9.02128C41.9856 6.86526 44.1924 5.04965 46.6821 3.57447C49.285 2.0993 52.0576 0.907808 55 4.80825e-06L55 9.87235ZM21.2191 9.87234C17.8241 11.1206 15.2212 13.0496 13.4105 15.6596C11.713 18.2695 10.8642 21.3901 10.8642 25.0213L21.2191 25.0213L21.2191 48L-4.19629e-06 48L-2.18743e-06 25.0213C-1.90966e-06 21.844 0.565842 18.8936 1.69753 16.1702C2.82922 13.4468 4.357 11.0638 6.28086 9.02128C8.20473 6.86525 10.4115 5.04965 12.9012 3.57447C15.5041 2.09929 18.2767 0.907805 21.2191 1.85504e-06L21.2191 9.87234Z" fill="white" />
                                    </svg>
                                </div>
                                <div className='text-white text-xl mb-4 px-4'>
                                    Với mỗi đối - khách hàng, chúng tôi trao gửi những giá trị bền vững, tín nhiệm và đồng hành
                                </div>
                                <ContactButton />
                            </div>
                            {TextItem('Đội ngũ', 'Đội ngũ nhân sự chuyên nghiệp, thấu hiểu, cung ứng nhiều giải pháp và song hành cùng khách hàng', land)}
                            {TextItem('Mục tiêu', 'Sự thành công của khách hàng cũng là sự thành công của DakDoa 2', target)}
                            {TextItem('Hỗ trợ', 'Sự thành công của khách hàng cũng là sự thành công của DakDoa 2', support)}
                        </div>
                    </div>
                    <Carousel dots={false} centerMode slidesPerRow={4} slidesToScroll={1} autoplay infinite>
                        {CarouselItem(growViet)}
                        {CarouselItem(vietcombank)}
                        {CarouselItem(sonha)}
                        {CarouselItem(gomDatViet)}
                        {CarouselItem(mit)}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Partner