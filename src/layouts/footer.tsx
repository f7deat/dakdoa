import { FormattedMessage, Link } from "umi";
import logo from '../assets/logo/logo-white.svg';
import { FacebookFilled, GlobalOutlined, InstagramFilled, PhoneOutlined, SendOutlined } from "@ant-design/icons";

type FooterProps = {
    height: number;
    fixed?: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {

    const { height, fixed } = props;

    const ContactItem = (icon: any, title: string, description: string) => (
        <div className="flex gap-4">
            <div className="h-10 md:h-10 w-10 md:w-10 rounded-full flex items-center justify-center bg-[#006E26]">
                {icon}
            </div>
            <div className="hidden md:block">
                <div className="text-xs 2xl:text-sm">{title}</div>
                <div className="font-bold text-xs md:text-sm">{description}</div>
            </div>
        </div>
    )

    return (
        <>
            <footer className={`bg-[#015D20] bottom-0 left-0 right-0 transition-height duration-500 ${fixed ? 'fixed' : ''}`} style={{
                height: height
            }}>
                <div className="md:pl-20 md:pr-40 mx-auto px-4 text-white flex flex-col justify-between h-full">
                    <div className="flex-1 flex items-center gap-4">
                        <div className="flex-1">
                            <div className="flex gap-4 md:gap-10 items-center">
                                <Link to='/' className="cursor-pointer">
                                    <img src={logo} alt="LOGO" loading="lazy" />
                                </Link>
                                <div className="flex gap-4">
                                    {ContactItem(<SendOutlined />, 'Email:', 'congtyshinecgialai@gmail.com')}
                                    {ContactItem(<PhoneOutlined />, 'Hotline:', '0269.6333.456')}
                                    {ContactItem(<GlobalOutlined />, 'Website:', 'shinecgialai.vn')}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div>
                                <a href="#"><FacebookFilled className="text-3xl" /></a>
                            </div>
                            <div>
                                <a href="#"><InstagramFilled className="text-3xl" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;