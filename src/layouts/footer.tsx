import { FormattedMessage, Link } from "umi";
import logo from '../assets/logo/logo-white.svg';
import { FacebookFilled, GlobalOutlined, InstagramFilled, PhoneOutlined, SendOutlined } from "@ant-design/icons";
import { message } from "antd";

type FooterProps = {
    height?: number;
    fixed?: boolean;
}

const Footer: React.FC<FooterProps> = (props) => {

    const { height, fixed } = props;

    return (
        <>
            <footer className={`bg-green-800 bottom-0 left-0 right-0 z-10 transition-height duration-500 text-slate-200 ${fixed ? 'fixed' : ''}`} style={{
                height: height
            }}>
                <div className="container mx-auto py-4 px-4 md:px-0">
                    <div className="flex gap-4 justify-center xl:gap-10">
                        <div className="max-w-[600px] hidden md:block">
                            <div className="font-semibold uppercase mb-4">
                                <span className="border-b border-dashed border-slate-400 pb-2">Liên hệ</span>
                            </div>
                            <ul className="list-disc px-4">
                                <li className="mb-2">
                                    Trụ sở chính: Thôn 2, xã Tân Bình, huyện Đak Đoa, tỉnh Gia Lai
                                </li>
                                <li className="mb-2">
                                    Văn phòng làm việc: 14 Trần Hưng Đạo, Phường Tây Sơn, TP.Pleiku, Gia Lai
                                </li>
                                <li className="mb-2">
                                    Hotline: 02696.333.456
                                </li>
                                <li className="mb-2">
                                    Email: congtyshinecgialai@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/5 md:px-10">
                            <div className="font-semibold uppercase mb-4">
                                <span className="border-b border-dashed border-slate-400 pb-2">Về chúng tôi</span>
                            </div>
                            <ul className="list-disc px-4">
                                <li className="mb-2">
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/page/gioi-thieu">Giới thiệu</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/news">Tin tức sự kiện</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/">Bản đồ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-72 hidden md:block">
                            <div className="font-semibold uppercase mb-6">
                                <span className="border-b border-dashed border-slate-400 pb-2">
                                    Chúng tôi sẽ liên hệ với bạn
                                </span>
                            </div>
                            <div className="text-sm">
                                <div className="mb-2">
                                    <input className="px-4 py-2 rounded-full w-full bg-green-900" placeholder="Họ và tên" />
                                </div>
                                <div className="mb-2 flex gap-2">
                                    <input className="px-4 py-2 rounded-full w-full bg-green-900" placeholder="Email" />
                                    <input className="px-4 py-2 rounded-full w-full bg-green-900" placeholder="Số điện thoại" />
                                </div>
                                <div className="mb-2">
                                    <button
                                        onClick={() => {
                                            message.success('Gửi thông tin thành công!');
                                        }}
                                        className="w-full px-2 border py-2 rounded-full hover:bg-white transition hover:text-green-700">Gửi thông tin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-1 border-t border-green-800">
                    <div className="flex items-center justify-between container mx-auto text-sm flex-col-reverse md:flex-row flex">
                        <div>© Copyright 2024. All rights reserved. Shinec Gia Lai.</div>
                        <div className="flex gap-2 md:gap-6">
                            <div>
                                <a href="#"><FacebookFilled className="text-xl" /></a>
                            </div>
                            <div>
                                <a href="#"><InstagramFilled className="text-xl" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;