import { animated, useSpring } from "@react-spring/web";

type Header1Props = {
    children: any;
    active: boolean;
}

const Header1: React.FC<Header1Props> = (props) => {

    const styles = useSpring({
        y: props.active ? 0 : 400,
        opacity: props.active ? 1 : 0
    })

    return (
       <animated.div style={styles}>
         <div className="text-center text-2xl md:text-5xl uppercase font-bold mb-4 py-4 text-white">
            {props.children}
        </div>
       </animated.div>
    )
}

export default Header1;