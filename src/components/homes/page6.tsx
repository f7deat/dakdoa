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
                        <div className="container mx-auto">
                            <div className="text-center text-[50px] montserrat text-white font-bold mb-4">
                                Tiện ích ngoại khu
                            </div>
                            <NestedCarousel
                                items={[
                                    <div className="grid grid-cols-3 gap-6">
                                        <CardImageOverlays height={190} title={intl.formatMessage({ id: 'hospital' })} image={hospital} />
                                        <CardImageOverlays height={190} title="Trường học" image={school} />
                                        <CardImageOverlays height={190} title="Ngân hàng" image={bank} />
                                        <CardImageOverlays height={190} title="Khu vực hành chính công" image={govern} />
                                        <CardImageOverlays height={190} title="Trung tâm thương mại" image={mall} />
                                        <CardImageOverlays height={190} title="Nhà hàng" image={restaurent} />
                                        <CardImageOverlays height={190} title="Khách sạn" image={hotel} />
                                        <CardImageOverlays height={190} title="Dịch vụ khác" image={golf} />
                                        <CardImageOverlays height={190} title="Các lĩnh vực sản suất ngoại khu" image={cafe} />
                                    </div>
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page6