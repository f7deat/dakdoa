import { FormattedMessage, useIntl } from 'umi';
import land from '../../assets/icons/land.svg';
import target from '../../assets/icons/target.svg';
import support from '../../assets/icons/support.svg';
import { animated, useSpring } from '@react-spring/web';
import Brands from '../brands';

const Partner: React.FC<HomeSectionItemProps> = (props) => {

    const { active, brands } = props;
    const intl = useIntl();

    const fadeLeft = useSpring({
        x: props.active ? 0 : 400,
        opacity: props.active ? 1 : 0
    })
    const fadeLeft1 = useSpring({
        x: props.active ? 0 : 100,
        opacity: props.active ? 1 : 0,
        delay: 400
    })

    const styles = useSpring({
        y: props.active ? 0 : -400,
        opacity: props.active ? 1 : 0
    })

    const TextItem = (title: string, description: string, icon: string) => (
        <div className='md:border-l border-[#f9f9f947] md:px-8 mb-4'>
            <div className='mb-4'>
                <img src={icon} loading='lazy' alt='ICON' className='w-10 h-10' />
            </div>
            <animated.div style={fadeLeft}>
                <div className='font-semibold text-lg 2xl:text-3xl mb-2'>{title}</div>
            </animated.div>
            <animated.div style={fadeLeft1}>
                <div className='text-xs line-clamp-3 md:text-sm 2xl:text-base'>{description}</div>
            </animated.div>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center relative">
            <div className="h-full flex flex-col justify-between">
                <div className="relative h-full bg-gray-100">
                    <div className='container mx-auto md:pt-10 text-gray-700 md:px-0 px-10'>
                        <div className='md:mb-20 mb-10'>
                            <div className='grid grid-cols-2 gap-4 md:grid-cols-4 mb-4 mt-4 2xl:mt-20'>
                                <div>
                                    <div className='mb-4 mt-2 text-green-700'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 48" fill="#008000" className='w-10 h-10'>
                                            <path d="M55 9.87235C51.6049 11.1206 49.0021 13.0496 47.1914 15.6596C45.4938 18.2695 44.6451 21.3901 44.6451 25.0213L55 25.0213L55 48L33.7809 48L33.7809 25.0213C33.7809 21.844 34.3467 18.8936 35.4784 16.1702C36.6101 13.4468 38.1379 11.0638 40.0617 9.02128C41.9856 6.86526 44.1924 5.04965 46.6821 3.57447C49.285 2.0993 52.0576 0.907808 55 4.80825e-06L55 9.87235ZM21.2191 9.87234C17.8241 11.1206 15.2212 13.0496 13.4105 15.6596C11.713 18.2695 10.8642 21.3901 10.8642 25.0213L21.2191 25.0213L21.2191 48L-4.19629e-06 48L-2.18743e-06 25.0213C-1.90966e-06 21.844 0.565842 18.8936 1.69753 16.1702C2.82922 13.4468 4.357 11.0638 6.28086 9.02128C8.20473 6.86525 10.4115 5.04965 12.9012 3.57447C15.5041 2.09929 18.2767 0.907805 21.2191 1.85504e-06L21.2191 9.87234Z" fill="green" />
                                        </svg>
                                    </div>
                                    <animated.div style={fadeLeft}>
                                        <div className='font-semibold text-lg 2xl:text-3xl mb-2'>
                                            <FormattedMessage id='Assist' />
                                        </div>
                                    </animated.div>
                                    <animated.div style={fadeLeft1}>
                                        <div className='text-gray-700 mb-4 md:text-sm text-xs line-clamp-3 2xl:text'>
                                            <FormattedMessage id='PARTNER_QUOTE' />
                                        </div>
                                    </animated.div>
                                </div>
                                {TextItem(intl.formatMessage({ id: 'TEAM' }), intl.formatMessage({ id: 'TEAM_QUOTE' }), land)}
                                {TextItem(intl.formatMessage({ id: 'TARGET' }), intl.formatMessage({ id: 'TARGET_QUOTE' }), target)}
                                {TextItem(intl.formatMessage({ id: 'SUPPORT' }), intl.formatMessage({ id: 'SUPPORT_QUOTE' }), support)}
                            </div>

                            <Brands brands={brands} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner