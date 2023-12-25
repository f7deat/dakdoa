import Navbar from "../navbar";
import cover from '../../assets/cover-min.jpg';
import fid from '../../assets/fdi.png';
import london from '../../assets/london-office.png';
import infra from '../../assets/tree-opa.svg';
import { Carousel } from "antd";
import cases from '../../assets/icons/case.svg';
import tree from '../../assets/icons/tree.svg';
import { FormattedMessage } from "umi";

const Page7: React.FC = () => {

    const Item = (title: string, description: string[], image: string, icon: string) => (
        <div className="montserrat text-white h-full px-4">
            <div className="flex flex-col gap-4 justify-between h-full bg-[#1C9C47] rounded-xl p-4 md:p-[50px]">
                <div className="mb-4">
                    <img src={icon} alt="ICON" className="w-8 h-8 md:w-14 md:h-14" />
                </div>
                <div className="flex-1">
                    <div className="text-lg md:text-[30px] font-medium mb-2 truncate">{title}</div>
                    <ul className="mb-4 text-xs md:text-base">
                        {
                            description.map((value, index) => (
                                <li key={index} className="truncate"><span className="px-2">&bull;</span>{value}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <img src={image} loading="lazy" alt="IMG" className="w-full object-cover max-h-[223px]" />
                </div>
            </div>
        </div>
    )

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-body flex flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex h-full items-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="container mx-auto px-10 md:px-0">
                            <div className="text-center text-lg md:text-[50px] montserrat text-white font-bold mb-4 md:mb-10">
                                <FormattedMessage id='THINKING_DIFFERENT' />
                            </div>
                            <Carousel dots={false} autoplay infinite
                                responsive={[
                                    {
                                        breakpoint: 640,
                                        settings: {
                                            slidesPerRow: 1
                                        }
                                    }
                                ]}
                                slidesPerRow={2}>
                                {Item('Hỗ trợ nhà đầu tư với thị trường trong nước', [
                                    'Hỗ trợ thu hút, cung ứng nguồn lao động phổ thông và lao động đã qua đào tạo.',
                                    'Hỗ trợ kết nối các đối tác, khách hàng tham gia vào quá trình sản xuất, cung ứng sản phẩm.',
                                    'Hỗ trợ giải quyết các thủ tục pháp lý của doanh nghiệp trong quá trình hoạt động.'
                                ], fid, cases)}
                                {Item('Hỗ trợ nhà đầu tư với thị trường quốc tế', [
                                    'Thu xếp tín dụng cho các dự án đầu tư vào KCN, CCN với mức vốn ưu đãi.',
                                    'Hỗ trợ thị trường xuất khẩu đầu ra và tài trợ tín dụng xuất khẩu cho các Nhà đầu tư trong KCN, CCN do Shinec đầu tư. Hỗ trợ các thủ tục pháp lý, logistics và hậu cần trong giao dịch kinh doanh quốc tế.',
                                    'Hỗ trợ nhà đầu tư hoàn thành các chứng chỉ, tín chỉ xanh.'
                                ], london, tree)}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page7