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
                    key: 'career',
                    label: <FormattedMessage id='CAREER' />
                },
                {
                    key: 'catalog',
                    label: <FormattedMessage id='CATALOG' />
                }
            ],
            icon: <HomeOutlined className="text-slate-700" />
        },
        {
            key: '2',
            label: 'PRODUCT',
            url: '/product',
            icon: <AppstoreAddOutlined className="text-slate-700" />
        },
        {
            key: '3',
            label: 'NEWS',
            url: '/news',
            icon: <GlobalOutlined className="text-slate-700" />
        },
        {
            key: '4',
            label: 'CONTACT',
            url: '/contact',
            icon: <PhoneOutlined className="text-slate-700" />
        },
        {
            key: 'search',
            label: 'SEARCH',
            url: '/search',
            icon: <SearchOutlined className="text-slate-700" />
        }
    ]
}

export default MenuData