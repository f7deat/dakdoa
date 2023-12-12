import Navbar from "../navbar"
import infra from '../../assets/tree-opa.svg';
import cover from '../../assets/cover-min.jpg';

const ServiceItem = () => {
    return (
        <></>
    )
}

const Page3: React.FC = () => {
    return (
        <div className="h-screen bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-screen flex flex-col justify-between w-screen" >
                <Navbar />
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="container mx-auto mb-[65px] h-full">
                        <div className="md:flex gap-20 items-center h-full">
                            <div className="md:w-1/2">
                                <div className="grid grid-cols-2 gap-4">

                                </div>
                            </div>
                            <div className="md:w-1/2 montserrat text-white">
                                <div className="text-[50px] font-bold mb-4">Sản phẩm và dịch vụ chính</div>
                                <div className="text-xl font-semibold mb-4">
                                    Quỹ đất công nghiệp cho thuê: 48,16 ha
                                </div>
                                <div className="mb-6">
                                    Với mục tiêu xây dựng CCN sinh thái, tuần hoàn và tái tạo, DakDoa 2 ưu tiên thu hút các ngành nghề về sản xuất, chế biến nông sản và gỗ, cùng với đó là lĩnh vực logistics giúp hình thành các liên kết cộng sinh, giúp tối ưu hoá lợi nhuận và giảm thiểu chi phí.
                                </div>
                                <div className="text-xl font-semibold mb-4">
                                    Quỹ đất Hậu cần dịch vụ cho thuê: 4,58 ha
                                </div>
                                <div className="mb-4">
                                    Thu hút các dự án như Trung tâm thương mại, ngân hàng, khu trưng bày triển lãm, siêu thị, cửa hàng dịch vụ bán lẻ; nhà hàng, bãi đỗ xe và các công trình thương mại dịch vụ… Khu trưng bày và triển lãm các sản phẩm của các Nhà đầu tư trong cụm công nghiệp, trung tâm phân phối các sản phẩm, trung tâm bảo trì bảo hành, triển lãm các giải pháp công nghệ…
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page3