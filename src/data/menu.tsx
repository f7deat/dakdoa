import { AppstoreAddOutlined, GlobalOutlined, HomeOutlined, PhoneOutlined, SearchOutlined } from "@ant-design/icons"
import { FormattedMessage } from "umi"

const MenuData = () => {
    return [
        {
            key: '1',
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
        }
    ]
}

export default MenuData