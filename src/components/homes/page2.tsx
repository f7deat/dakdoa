import infra from '../../assets/tree2.svg';
import ContactButton from "../button";

const Page2: React.FC = () => {
    return (
        <div className="relative">
            <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-train-heading-through-an-industrial-city-25881-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="h-body flex flex-col justify-end z-10 relative" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.93%, #FFF 73.8%)'
            }}>
                <div className="relative">
                    <div className="container mx-auto mb-[65px] px-10 md:px-0">
                        <div className="montserrat text-[#0B8936] text-2xl md:text-5xl font-bold mb-4 border-b border-green-600 py-1 md:py-4">Cụm công nghiệp sinh thái hàng đầu</div>
                        <div className="text-slate-400 mb-4 montserrat text-sm md:text-base" style={{
                            maxWidth: 670
                        }}>
                            Cụm công nghiệp Đak Đoa 2 được xây dựng và phát triển theo bộ tiêu chí với mong muốn xây dựng một KCNST, trong đó các cộng đồng các doanh nghiệp sản xuất có mối liên hệ mật thiết trên cùng một lợi ích; đồng thời hợp tác chặt chẽ trong quản lý các vấn đề về môi trường và tài nguyên thiên nhiên.
                        </div>
                        <ContactButton />
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page2