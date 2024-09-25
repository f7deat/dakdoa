import { FormattedMessage, useIntl } from 'umi';
import Header1 from '../header1';
import gt from '../../assets/amenities/gt.png';
import water from '../../assets/amenities/nuoc.png';
import rac from '../../assets/amenities/rac.png';
import fire from '../../assets/amenities/fire.png';
import elec from '../../assets/amenities/elec.png';
import inter from '../../assets/amenities/inter.png';


const Internal: React.FC = () => {

    const Amenities = (image: string, title: string, description: string[], delay: number) => (
        <div className="md:px-4 flex gap-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={delay}>
            <div>
                <img src={image} />
            </div>
            <div className='flex-1'>
                <div className="font-bold text-xl mb-1 text-blue-800">{title}</div>
                <ul className="text-sm md:text-base list-disc text-blue-900" >
                    {
                        description.map((value: string, index: number) => (
                            <li key={index} className="ml-4">{value}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

    return (
        <div className="bg-cover bg-no-repeat bg-fixed bg-center relative">
            <div className="h-full flex flex-col justify-between w-full" >
                <div className="relative h-full">
                    <div className="flex h-full items-center md:py-10 py-8">
                        <div className="container mx-auto px-4 md:px-0">
                            <Header1 active primary>
                                Hạ tầng kỹ thuật đồng bộ và hiện đại
                            </Header1>
                            <div className="text-center mx-auto mb-8 text-base md:text-lg text-green-700">
                                <FormattedMessage id='AMENITIES_DES' />
                            </div>
                            <div className='grid md:grid-cols-3 gap-4'>
                                {Amenities(
                                    gt,
                                    'Giao thông nội bộ', [
                                    'Diện tích long đường giao thông nội bộ: 15m'
                                ], 500)}
                                {Amenities(
                                    water,
                                    'Hệ thống cấp nước và xử lý nước thải', [
                                    'Cấp nước công nghiệp: 30m3/ha/ngày đêm. Xây dựng trạm bơm tăng áp tại khu đất kỹ thuật, công xuất trạm bơm 270m3/h.',
                                    'Chỉ tiêu phát sinh nước thải: >80% chỉ tiêu nước cấp'
                                ], 600)}
                                {Amenities(
                                    rac,
                                    'Chất thải rắn phát sinh', [
                                    '>0,3 tấn/ha',
                                    'Tỷ lệ thu gom xử lý chất thải rắn: 100%'
                                ], 700)}
                                {Amenities(
                                    fire,
                                    'Phòng cháy chữa cháy', [
                                    'Mạng lưới cấp nước chữa cháy là mạng lưới kết hợp với mạng lưới cấp nước sản xuất'
                                ], 800)}
                                {Amenities(
                                    elec,
                                    'Hệ thống cấp điện', [
                                    '16 máy biến áp hạ áp cho các nhà đầu tư thứ cấp',
                                    '3 trạm biến áp cho khu vực dịch vụ, khu chiếu sáng và khu kỹ thuật'
                                ], 900)}
                                {Amenities(
                                    inter,
                                    'Viễn thông liên lạc', [
                                    '5 trạm BTS phủ song toàn bộ khu vực',
                                    'Áp dụng công nghệ truy cập mạng quang thụ động theo tiêu chuẩn GPON – mạng quang thụ động tốc độ Gigabit'
                                ], 1000)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Internal