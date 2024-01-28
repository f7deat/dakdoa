import { FormattedMessage, Link, useIntl } from 'umi';
import infra from '../../assets/tree2.svg';
import { ArrowRightOutlined } from '@ant-design/icons';
import { animated, useSpring } from '@react-spring/web';

type HomeSectionItemProps = {
    active: boolean
}

const Page2: React.FC<HomeSectionItemProps> = (props) => {
    const { active } = props;
    const intl = useIntl();
    const styles1 = useSpring({
        y: active ? 0 : 500,
        opacity: active ? 1 : 0
    })
    const styles2 = useSpring({
        x: active ? 0 : -300
    })
    return (
        <div className="relative h-body">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source
                    src="https://shinecgialai.com.vn/videos/ind.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="h-full flex flex-col justify-end z-10 relative" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 20%, #FFF 70%)'
            }}>
                <div className="relative">
                    <div className="container mx-auto md:pb-10 px-10 md:px-0 pb-40">
                        <div className="text-[#0B8936] text-2xl md:text-4xl 2xl:text-5xl font-bold mb-4 border-b border-green-600 py-1 md:py-4 uppercase">
                            <animated.div style={styles2}>
                                {intl.formatMessage({ id: 'TOP_INDUSTRIAL' })}
                            </animated.div>
                        </div>
                        <div className="text-slate-900 font-medium mb-4 text-sm md:text-base max-w-[900px]">
                            {intl.formatMessage({ id: 'TOP_INDUSTRIAL_DES' })}
                        </div>
                        <Link to={`/news/67dd6e55-b552-433c-d103-08dc0551893f`}
                            className='flex'>
                            <div
                                className="transition-all hover:w-64 w-52 duration-500 flex gap-2 h-12 md:h-14 px-10 rounded-full text-white hover:text-white items-center justify-between bg-gradient-to-b from-orange-500 to-orange-400 poppins font-semibold md:text-lg">
                                <span>
                                    <FormattedMessage id='VIEWMORE' />
                                </span>
                                <ArrowRightOutlined />
                            </div>
                        </Link>
                    </div>
                    <animated.div style={styles1}>
                        <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default Page2