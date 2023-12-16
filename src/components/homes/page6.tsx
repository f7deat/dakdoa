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

const Page6: React.FC = () => {
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
                            <div className="text-center text-[50px] montserrat text-white font-bold">
                            Tiện ích ngoại khu
                            </div>
                            <div className="text-white montserrat text-center max-w-[550px] mx-auto mb-8">
                                As a company, we’ve always believed in walking our own path and doing things a little differently.
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <CardImageOverlays maxHeight={150} image={hospital} />
                                <CardImageOverlays maxHeight={150} image={school} />
                                <CardImageOverlays maxHeight={150} image={bank} />
                                <CardImageOverlays maxHeight={150} image={govern} />
                                <CardImageOverlays maxHeight={150} image={mall} />
                                <CardImageOverlays maxHeight={150} image={restaurent} />
                                <CardImageOverlays maxHeight={150} image={hotel} />
                                <CardImageOverlays maxHeight={150} image={golf} />
                                <CardImageOverlays maxHeight={150} image={cafe} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page6