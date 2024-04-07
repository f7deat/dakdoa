import { animated, useSpring } from "@react-spring/web";

type Header1Props = {
    children: any;
    active: boolean;
    primary?: boolean;
}

const Header1: React.FC<Header1Props> = (props) => {

    const styles = useSpring({
        y: props.active ? 0 : -400,
        opacity: props.active ? 1 : 0
    })

    return (
        <animated.div style={styles}>
            <h1 className={`text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 ${props.primary ? 'text-green-700' : 'text-white'} mb-0 2xl:mb-4`}>
                {props.children}
            </h1>
        </animated.div>
    )
}

export default Header1;