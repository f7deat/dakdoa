import { AlertOutlined, AppstoreAddOutlined, GlobalOutlined, HomeOutlined, PhoneOutlined, SearchOutlined } from "@ant-design/icons"
import { FormattedMessage } from "umi"

const MenuData = () => {
    return [
        {
            key: '/about-shinec',
            label: 'ABOUT',
            children: [
                {
                    key: 'about-shinec',
                    label: <FormattedMessage id='ABOUT_US' />
                },
                {
                    key: '/career',
                    label: <FormattedMessage id='CAREER' />
                },
                {
                    key: '/catalog',
                    label: <FormattedMessage id='CATALOG' />
                },
                {
                    key: '/news',
                    label: <FormattedMessage id='EVENT_AND_ACTIVITY' />
                }
            ],
            icon: <HomeOutlined className="text-slate-700" />
        },
        {
            key: '/product',
            label: 'PRODUCT',
            url: '/product',
            icon: <AppstoreAddOutlined className="text-slate-700" />,
            children: [
                {
                    key: 'tong-quan',
                    label: 'Tổng quan'
                },
                {
                    key: 'thue-dat-cong-nghiep',
                    label: 'Thuê đất công nghiệp'
                },
                {
                    key: 'thue-xuong-kho-xay-san',
                    label: 'Thuê xưởng - Kho xây sẵn'
                },
                {
                    key: 'cho-thue-dat-thuong-mai',
                    label: 'Cho thuê đất thương mại'
                },
                {
                    key: 'cho-thue-van-phong',
                    label: 'Cho thuê văn phòng'
                },
                {
                    key: 'map',
                    label: 'Bản đồ địa điểm'
                },
                {
                    key: 'customer',
                    label: 'Khách hàng hiện tại'
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
            key: '/contact',
            label: 'CONTACT',
            url: '/contact',
            icon: <PhoneOutlined className="text-slate-700" />
        },
        {
            key: '/search',
            label: 'SEARCH',
            url: '/search',
            icon: <SearchOutlined className="text-slate-700" />
        },
        {
            key: '/vr360',
            label: 'VR 360',
            url: '/vr360'
        }
    ]
}

export default MenuData