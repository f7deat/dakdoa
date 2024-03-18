import { AlertOutlined, AppstoreAddOutlined, GlobalOutlined, HomeOutlined, NotificationOutlined, PhoneOutlined, SearchOutlined } from "@ant-design/icons"
import { FormattedMessage } from "umi"

const MenuData = () => {
    return [
        {
            key: '/about-shinec',
            label: 'ABOUT',
            icon: <HomeOutlined className="text-slate-700" />
        },
        {
            key: '/product',
            label: 'Về CCN số 2 Đak Đoa',
            url: '/product',
            icon: <AppstoreAddOutlined className="text-slate-700" />,
            children: [
                {
                    key: 'tong-quan',
                    label: 'Tổng quan về CCN'
                },
                {
                    key: 'thue-dat-cong-nghiep',
                    label: 'Cho thuê nhà xưởng xây sẵn',
                    children: [
                        {
                            key: 'Nhà xưởng xây sẵn ',
                            label: 'Nhà xưởng xây sẵn '
                        },
                        {
                            key: 'nhà xưởng xây theo yêu cầu',
                            label: 'nhà xưởng xây theo yêu cầu'
                        }
                    ]
                },
                {
                    key: 'Cho thuê đất công nghiệp',
                    label: 'Cho thuê đất công nghiệp'
                },
                {
                    key: 'cho-thue-dat-thuong-mai',
                    label: 'Cho thuê đất thương mại và dịch vụ'
                },
                {
                    key: 'cho-thue-van-phong',
                    label: 'Cho thuê văn phòng'
                },
                {
                    key: 'Ngành mục tiêu ',
                    label: 'Ngành mục tiêu '
                },
                {
                    key: 'map',
                    label: 'Bản đồ địa điểm'
                },
                {
                    key: 'customer',
                    label: 'Khách hàng hiện tại'
                },
                {
                    key: 'Phòng trưng bày',
                    label: 'Phòng trưng bày'
                },
                {
                    key: 'Xem VR 360',
                    label: 'Dịch vụ CSKH'
                }
            ]
        },
        {
            key: '/amenities',
            label: 'amenities',
            icon: <AlertOutlined className="text-slate-700" />,
            children: [
                {
                    key: 'internal',
                    label: <FormattedMessage id='INTERNAL_AMENITIES' />
                },
                {
                    key: 'external',
                    label: <FormattedMessage id='External_Amenities' />
                },
                {
                    key: 'difference',
                    label: 'Khác biệt và lợi thế'
                }
            ]
        },
        {
            key: '/news',
            label: 'Sự kiện và hoạt động',
            url: '/news',
            icon: <NotificationOutlined className="text-slate-700" />
        },
        {
            key: '/contact',
            label: 'Liên hệ với chúng tôi',
            url: '/contact',
            icon: <PhoneOutlined className="text-slate-700" />
        }
    ]
}

export default MenuData