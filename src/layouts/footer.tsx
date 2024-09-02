import { Link } from "umi";
import { FacebookFilled, GlobalOutlined, InstagramFilled, PhoneOutlined, SendOutlined } from "@ant-design/icons";

const Footer: React.FC = () => {

    const ContactItem = (icon: any, title: string, description: string) => (
        <div className="flex gap-4">
            <div className="h-10 md:h-10 w-10 md:w-10 rounded-full flex items-center justify-center bg-[#006E26]">
                {icon}
            </div>
            <div className="hidden md:block">
                <div className="text-xs md:text-sm">{title}</div>
                <div className="font-bold text-xs md:text-sm">{description}</div>
            </div>
        </div>
    )

    return (
        <>
            <footer className={`bg-green-800 bottom-0 left-0 right-0 transition-height duration-500 py-10`}>
                <div className="md:pl-20 md:pr-40 mx-auto px-4 text-white flex flex-col justify-between h-full">
                    <div className="flex-1 flex items-center gap-4">
                        <div className="flex-1">
                            <div className="flex gap-4 md:gap-10 items-center">
                                <Link to='/' className="cursor-pointer">
                                    <img src='https://shinecgialai.com.vn/imgs/logo-white.png' alt="LOGO" loading="lazy" className="w-52" />
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
                                <a href="https://www.facebook.com/shinecgialai/"><FacebookFilled className="text-3xl" /></a>
                            </div>
                            <div>
                                <a href="https://www.facebook.com/shinecgialai/"><InstagramFilled className="text-3xl" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;