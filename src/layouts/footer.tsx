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
            <footer className={`bg-green-700 bottom-0 left-0 right-0 z-10 transition-height duration-500 text-slate-200 fixed`} style={{
                height: height,
                backgroundImage: 'url(https://namcaukien.com.vn/wp-content/themes/thietkewebhiendai/images/photo-background-footer.jpg)'
            }}>
                <div className="container mx-auto py-6 2xl:py-16 md:py-12 px-4 md:px-0">
                    <div className="flex gap-2 md:gap-4 md:flex-row flex-col mb-4">
                        <div className="2xl:w-1/5">
                            <div className="border-b border-dashed border-slate-400 pb-2 uppercase md:mb-8 mb-4">Quét mã QR để xem catalogue</div>
                            <div className="flex justify-center">
                                <img src="https://i.imgur.com/dqRsTlF.png" alt="QR" className="md:w-40 w-24" />
                            </div>
                        </div>
                        <div className="2xl:w-1/5 md:px-10">
                            <div className="font-semibold uppercase md:mb-8 mb-4">
                                <span className="border-b border-dashed border-slate-400 pb-2">Về chúng tôi</span>
                            </div>
                            <ul className="list-disc px-4 flex flex-wrap md:flex-col text-sm md:text-base">
                                <li className="md:mb-3 mr-8 mb-2">
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li className="md:mb-3 mr-8 mb-2">
                                    <Link to="/news">Sự kiện & hoạt động</Link>
                                </li>
                                <li className="md:mb-3 mr-8 mb-2">
                                    <Link to="/page/gioi-thieu">Giới thiệu</Link>
                                </li>
                                <li className="md:mb-3 mr-8 mb-2">
                                    <Link to="/">Bản đồ địa điểm</Link>
                                </li>
                                <li className="md:mb-3 mb-2">
                                    <Link to="/">Xem VR 360</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-2/5">
                            <div className="font-semibold uppercase md:mb-8 mb-4">
                                <span className="border-b border-dashed border-slate-400 pb-2">CỤM CÔNG NGHIỆP SỐ 2 HUYỆN ĐAK ĐOA</span>
                            </div>
                            <ul className="list-disc px-4 text-sm md:text-base">
                                <li className="md:mb-3 mb-1">
                                    Trụ sở chính: Thôn 2, xã Tân Bình, huyện Đak Đoa, tỉnh Gia Lai
                                </li>
                                <li className="mb-3">
                                Văn phòng giao dịch: 14 Trần Hưng Đạo, Phường Tây Sơn, TP.Pleiku, tỉnh Gia Lai
                                </li>
                                <li className="mb-3">
                                    Hotline: 02696.333.456
                                </li>
                                <li className="mb-3">
                                    Email: congtyshinecgialai@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-72 hidden md:block">
                            <div className="font-semibold uppercase mb-8">
                                <span className="border-b border-dashed border-slate-400 pb-2">
                                    Chúng tôi sẽ liên hệ với bạn
                                </span>
                            </div>
                            <div className="text-slate-800">
                                <div className="mb-4">
                                    <input className="px-4 py-2 rounded-full w-full bg-white" placeholder="Họ và tên" />
                                </div>
                                <div className="mb-4 flex gap-2">
                                    <input className="px-4 py-2 rounded-full w-full bg-white" placeholder="Email" />
                                    <input className="px-4 py-2 rounded-full w-full bg-white" placeholder="Số điện thoại" />
                                </div>
                                <div className="mb-4 text-white">
                                    <button
                                        onClick={() => {
                                            message.success('Gửi thông tin thành công!');
                                        }}
                                        className="w-full px-2 border py-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-400 hover:border-orange-500">Gửi thông tin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`py-2 border-t border-green-900 bg-green-900 bottom-0 left-0 right-0 ${(height || 0) > 0 ? 'absolute' : ''}`}>
                    <div className="flex items-center justify-between container mx-auto text-sm flex-col-reverse md:flex-row flex">
                        <div>© Copyright 2024. All rights reserved. Shinec Gia Lai.</div>
                        <div className="flex gap-2 md:gap-6">
                            <div>
                                <a href="https://www.facebook.com/shinecgialai/"><FacebookFilled className="text-xl" /></a>
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