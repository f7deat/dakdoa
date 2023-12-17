import Navbar from "../navbar"
import cover from '../../assets/cover-min.jpg';
import { CardImageOverlays } from "..";
import hospital from '../../assets/amenities/hospital.png';
import school from '../../assets/amenities/school.png';
import bank from '../../assets/amenities/bank.png';
import govern from '../../assets/amenities/govern.png';
import mall from '../../assets/amenities/mall.png';
import restaurent from '../../assets/amenities/restaurent.png';
import hotel from '../../assets/amenities/hotel.png';
import golf from '../../assets/amenities/golf.png';
import cafe from '../../assets/amenities/cafe.png';
import { useIntl } from "umi";
import NestedCarousel from "../nested-carousel";

const Page6: React.FC = () => {

    const intl = useIntl();

    return (
        <div className="h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-screen flex flex-col justify-between w-screen" >
                <Navbar />
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex h-full items-center">
                        <div className="container mx-auto px-10 md:px-0">
                            <div className="text-center text-lg md:text-[50px] montserrat text-white font-bold mb-4 md:mb-8">
                                Tiện ích ngoại khu
                            </div>
                            <div className="amenities">
                                <NestedCarousel
                                    items={[
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                            <CardImageOverlays title={intl.formatMessage({ id: 'hospital' })} image={hospital} />
                                            <CardImageOverlays title="Trường học" image={school} />
                                            <CardImageOverlays title="Ngân hàng" image={bank} />
                                            <CardImageOverlays title="Khu vực hành chính công" image={govern} />
                                            <CardImageOverlays title="Trung tâm thương mại" image={mall} />
                                            <CardImageOverlays title="Nhà hàng" image={restaurent} />
                                            <CardImageOverlays title="Khách sạn" image={hotel} />
                                            <CardImageOverlays title="Dịch vụ khác" image={golf} />
                                            <CardImageOverlays title="Các lĩnh vực sản suất ngoại khu" image={cafe} />
                                        </div>
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page6