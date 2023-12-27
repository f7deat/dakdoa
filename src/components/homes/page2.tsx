import { FormattedMessage, Link, useIntl } from 'umi';
import infra from '../../assets/tree2.svg';
import Texty from 'rc-texty';
import { ArrowRightOutlined } from '@ant-design/icons';

type HomeSectionItemProps = {
    active: boolean
}

const Page2: React.FC<HomeSectionItemProps> = (props) => {
    const { active } = props;
    const intl = useIntl();
    return (
        <div className="relative h-body">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-train-heading-through-an-industrial-city-25881-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="h-full flex flex-col justify-end z-10 relative" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.93%, #FFF 73.8%)'
            }}>
                <div className="relative">
                    <div className="container mx-auto md:pb-10 px-10 md:px-0">
                        <div className="montserrat text-[#0B8936] text-2xl md:text-5xl font-bold mb-4 border-b border-green-600 py-1 md:py-4 uppercase">
                            <Texty mode="sync" type="right" duration={1000}>
                                {active ? intl.formatMessage({ id: 'TOP_INDUSTRIAL' }) : ''}
                            </Texty>
                        </div>
                        <div className="text-slate-400 mb-4 text-sm md:text-base max-w-[800px]">
                            {intl.formatMessage({ id: 'TOP_INDUSTRIAL_DES' })}
                        </div>
                        <Link to={`/news/67dd6e55-b552-433c-d103-08dc0551893f`}
                            className='flex'>
                            <div className="flex gap-2 h-14 px-8 rounded-full text-white hover:text-white items-center bg-gradient-to-b from-orange-500 to-orange-400 poppins font-semibold md:text-lg">
                                <span>
                                    <FormattedMessage id='VIEWMORE' />
                                </span>
                                <ArrowRightOutlined />
                            </div>
                        </Link>
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page2