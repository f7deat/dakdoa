import Navbar from "../navbar";
import infra from '../../assets/tree1.svg';
import ContactButton from "../button";

const Page1: React.FC = () => {
    return (
        <div className="relative">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="h-body flex flex-col justify-end z-10 relative" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.93%, #FFF 73.8%)'
            }}>
                <div className="relative">
                    <div className="container mx-auto mb-[65px] px-10 md:px-0">
                        <div>
                            <div className="montserrat text-[#0B8936] text-2xl md:text-5xl font-bold mb-4 border-b border-green-600 py-1 md:py-4">Tây Nguyên Tươi đẹp</div>
                            <div className="text-slate-400 mb-4 montserrat text-xs md:text-base" style={{
                                maxWidth: 670
                            }}>
                                <div>
                                    Gia Lai là tỉnh có diện tích lớn thứ hai Việt Nam và là một tỉnh cao nguyên nằm ở khu vực Bắc Tây Nguyên (Gia Lai đứng thứ nhất về diện tích và đứng thứ 2 về dân số khu vực Tây Nguyên).
                                </div>
                                <div>
                                    Với nhiều lợi thế trong phát triển sản xuất nông nghiệp, xuất khẩu nông sản, Gia Lai bắt nhịp xu hướng quốc tế thúc đẩy phát triển công nghiệp và dịch vụ, tạo nên sức bật và đột phá mới trong tương lại, đem đến nhiều cơ hội tốt cho các nhà đầu tư.
                                </div>
                            </div>
                            <ContactButton />
                        </div>
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page1