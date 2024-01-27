import { FormattedMessage, Link } from 'umi';
import { useRef } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import bg from '../../assets/news-bg.png';
import Header1 from '../header1';

type NewsProps = {
    news: API.Catalog[];
    active: boolean;
}

const News: React.FC<NewsProps> = (props) => {

    const { news, active } = props;
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="h-body bg-no-repeat bg-right bg-[#01822c] relative"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div className="h-full flex flex-col justify-between">
                <div className="relative h-full">
                    <div className="h-full items-center">
                        <div className='mx-auto md:flex h-full justify-center flex-col md:gap-20 gap-4 relative items-center'>
                            <div className='relative z-10 container mx-auto md:p-0 px-10 py-10'>
                                <Header1 active={active}>
                                    <FormattedMessage id='LATEST_NEWS' />
                                </Header1>
                                <div className='text-white text-center mb-10 hidden md:block'>
                                    <FormattedMessage id='AMENITIES_DES' />
                                </div>
                                <div className='md:flex mb-4 md:gap-10 gap-4'>
                                    <div className='md:w-1/2 md:h-full flex items-center flex-col justify-center'>
                                        <div>
                                            <div className='border-2 rounded-lg mb-4'>
                                                <video autoPlay loop muted controls className="w-auto min-w-full min-h-full rounded-lg h-52 md:h-[420px] object-cover" ref={videoRef}>
                                                    <source
                                                        src="https://shinecgialai.com.vn/videos/dakdoa-full.mp4"
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 text-white">
                                        <div className='grid grid-cols-2 gap-4'>
                                            {
                                                news.map(x => (
                                                    <div className='flex gap-2 flex-col relative border-2 border-white rounded-lg relative' key={x.id}>
                                                        <figure className="snip1577">
                                                            <img src={x.thumbnail} className="w-full h-32 md:h-48 mb-2 object-cover rounded" alt="Amenities" loading="lazy" />
                                                            <Link to={`/news/${x.id}`}></Link>
                                                        </figure>
                                                        <div className='overlay rounded'>
                                                            <div className='pt-10'>
                                                                <Link
                                                                    to={`/news/${x.id}`}
                                                                    className='line-clamp-2 px-2 md:text-lg font-semibold text-white hover:text-white hover:underline absolute bottom-10'>
                                                                    {x.name}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <Link to='/news'
                                        className='px-8 py-3 rounded-full text-green-600 hover:text-green-700 bg-white md:text-lg font-semibold'
                                    >
                                        <FormattedMessage id='VIEWMORE' />
                                        <ArrowRightOutlined className='ml-3' />
                                    </Link>
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