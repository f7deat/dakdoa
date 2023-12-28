import infra from '../../assets/tree1.svg';
import { FormattedMessage, Link, useIntl } from "umi";
import { ArrowRightOutlined } from '@ant-design/icons';
import { animated, useSpring } from '@react-spring/web';

type HomeSectionItemProps = {
    active: boolean
}

const Page1: React.FC<HomeSectionItemProps> = (props) => {

    const { active } = props;
    const intl = useIntl();
    const styles1 = useSpring({
        y: active ? 0 : 400,
        opacity: active ? 1 : 0
    })
    const styles2 = useSpring({
        x: active ? 0 : -300
    })

    return (
        <div className="relative h-body">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="h-full flex flex-col justify-end z-10 relative" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.93%, #FFF 73.8%)'
            }}>
                <div className="relative">
                    <div className="container mx-auto pb-40 md:pb-20 px-10 md:px-0">
                        <div>
                            <div className="montserrat text-[#0B8936] text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 border-b border-green-600 py-1 md:py-6 uppercase">
                                <animated.div style={styles2}>
                                    {intl.formatMessage({ id: 'TAY_NGUYEN_NATURE' })}
                                </animated.div>
                            </div>
                            <animated.div className="text-slate-600 mb-4 text-sm md:text-base break-words max-w-[900px]">
                                {intl.formatMessage({ id: 'TAY_NGUYEN_NATURE_DESCRIPTION1' })}
                                {intl.formatMessage({ id: 'TAY_NGUYEN_NATURE_DESCRIPTION2' })}
                            </animated.div>
                            <animated.div>
                                <Link to={`/news/c15e1eab-884b-42aa-4eb5-08dc054f1e5e`}
                                    className='flex'>
                                    <div
                                        className="transition-all hover:w-64 w-52 duration-500 flex gap-2 h-12 md:h-14 px-10 rounded-full text-white hover:text-white items-center justify-between bg-gradient-to-b from-orange-500 to-orange-400 poppins font-semibold md:text-lg">
                                        <span>
                                            <FormattedMessage id='VIEWMORE' />
                                        </span>
                                        <ArrowRightOutlined />
                                    </div>
                                </Link>
                            </animated.div>
                        </div>
                    </div>
                    <animated.div style={styles1}>
                        <div className="absolute bottom-0 right-0">
                            <img src={infra} alt="IMG" />
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default Page1