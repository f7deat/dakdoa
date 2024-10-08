import ThankComponent from "@/pages/contact/thank";
import { apiAddContact } from "@/services/contact";
import { Form, message } from "antd";
import { useState } from "react";

const ContactForm: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    const onFinish = async (values: any) => {
        const response = await apiAddContact(values);
        if (response.data) {
            message.success('Gửi thành công!');
            setOpen(true);
        }
    }

    return (
        <>
            <Form onFinish={onFinish}>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <Form.Item name="name" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập thông tin'
                                }
                            ]}>
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm">Họ và tên</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </Form.Item>
                        </div>
                        <div className="p-2 w-1/2">
                            <Form.Item name="email" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập thông tin'
                                }
                            ]}>
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </Form.Item>
                        </div>
                        <div className="p-2 w-full">
                            <Form.Item name="note" rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập thông tin'
                                }
                            ]}>
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm">Lời nhắn</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                                </div>
                            </Form.Item>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                type="submit"
                                className="hover:text-white flex mx-auto text-red-500 border-2 border-red-500 hover:bg-red-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Gửi Yêu Cầu</button>
                        </div>
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a className="text-white">shinecgialai@gmai.com</a>
                            <p className="leading-normal my-5">Cụm Công Nghiệp Số 2 Đak Đoa
                                <br />
                                Trụ sở chính: Thôn 2, xã Tân Bình, huyện Đak Đoa, tỉnh Gia Lai
                                <br />
                                Văn phòng giao dịch: 14 Trần Hưng Đạo, Phường Tây Sơn, TP.Pleiku, tỉnh Gia Lai
                            </p>
                            <span className="inline-flex">
                                <a>
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a className="ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    </svg>
                                </a>
                                <a className="ml-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                    </svg>
                                </a>
                                <a className="ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </Form>
            <ThankComponent open={open} onCancel={() => setOpen(false)} />
        </>
    )
}

export default ContactForm;