type Header1Props = {
    children: any;
    active: boolean;
    primary?: boolean;
}

const Header1: React.FC<Header1Props> = (props) => {

    return (
            <h1 style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}  data-aos="fade-up"
            className={`text-center text-2xl md:text-4xl 2xl:text-4xl uppercase font-bold py-4 ${props.primary ? 'text-green-700' : 'text-white'} mb-0 2xl:mb-4`}>
                {props.children}
            </h1>
    )
}

export default Header1;