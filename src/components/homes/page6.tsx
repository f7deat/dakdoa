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
import { FormattedMessage, useIntl } from "umi";
import NestedCarousel from "../nested-carousel";
import Header1 from '../header1';

const Page6: React.FC<HomeSectionItemProps> = (props) => {

    const { active } = props;
    const intl = useIntl();

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-full flex flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex h-full items-center">
                        <div className="container mx-auto px-10 md:px-0">
                            <Header1 active={active}>
                                <FormattedMessage id='External_Amenities' />
                            </Header1>
                            <div className="amenities">
                                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                                    <CardImageOverlays
                                        title={intl.formatMessage({ id: 'HOSPITAL' })}
                                        image={hospital}
                                        descriptions={[
                                            'Bệnh viện Đa khoa Tỉnh Gia Lai',
                                            'Bệnh viện Quân Y 211',
                                            'Bệnh Viện Y Học Cổ Truyển Gia Lai'
                                        ]}
                                    />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'SCHOOL' })} image={school}
                                        descriptions={[
                                            'Trường THPT Chuyên Hùng Vương',
                                            'Trường THPT Pleiku',
                                            'Trường THPT Quang Trung',
                                        ]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'BANK' })} image={bank}
                                        descriptions={[
                                            'Agribank',
                                            'Vietcombank',
                                            'Sacombank',
                                        ]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'Publicadministrativearea' })} image={govern}
                                        descriptions={[
                                            'Trung tâm phục vụ hành chính công tỉnh Gia Lai'
                                        ]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'MALL' })} image={mall}
                                        descriptions={[
                                            'Sense City Pleiku'
                                        ]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'Restaurant' })} image={restaurent}
                                        descriptions={[]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'Hotel' })} image={hotel}
                                        descriptions={[]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'Otherservices' })} image={golf}
                                        descriptions={[]} />
                                    <CardImageOverlays title={intl.formatMessage({ id: 'Outsideproductionareas' })} image={cafe}
                                        descriptions={[]} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page6