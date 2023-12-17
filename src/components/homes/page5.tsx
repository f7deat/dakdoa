import Navbar from "../navbar"
import bg from '../../assets/css/bg-feature.gif';
import NestedCarousel from "../nested-carousel";
import trafic from '../../assets/amenities/trafic.png';
import electric from '../../assets/amenities/electric.png';
import water from '../../assets/amenities/water.png';

const Page5: React.FC = () => {

    const Amenities = (image: string, title: string, description: string[]) => (
        <div className="px-4 text-white montserrat">
            <img src={image} className="w-full bg-cover h-[250px] md:h-[317px] rounded-lg mb-2" alt="Amenities" loading="lazy" />
            <div className="font-semibold text-xl py-2">{title}</div>
            <ul className="text-sm list-disc">
                {
                    description.map((value: string, index: number) => (
                        <li key={index} className="ml-4">{value}</li>
                    ))
                }
            </ul>
        </div>
    )

    return (
        <div className="h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${bg})`
            }}>
            <div className="h-screen flex flex-col justify-between w-screen" >
                <Navbar />
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex  h-full items-center">
                        <div className="container mx-auto px-10 md:px-0">
                            <div className="text-center text-lg md:text-[50px] montserrat text-white font-bold">
                                TIỆN ÍCH NỘI KHU
                            </div>
                            <div className="text-white montserrat text-center max-w-[550px] mx-auto mb-8">
                                As a company, we’ve always believed in walking our own path and doing things a little differently.
                            </div>
                            <NestedCarousel
                                slidesPerRow={3}
                                responsive={[
                                    {
                                      breakpoint: 640,
                                      settings: {
                                        slidesPerRow: 1
                                      }
                                    }
                                ]}
                                items={[
                                    Amenities(trafic, 'Giao thông', ['Hệ thống đường giao thông đồng bộ, tiêu chuẩn', 'Chiều rộng: 40m – 30m – 25m']),
                                    Amenities(electric, 'Hệ thống cấp điện - nước', ['Điện áp: 110KV-22KV', 'Công suất: 189 MVA (có dự trù nâng cao)']),
                                    Amenities(water, 'Hệ thống XLNT tập trung', ['Công suất: 2.000 m3/ngày đêm (có dự trù nâng cao công suất)', 'Công nghệ xử lý vi sinh tiêu chuẩn']),
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5