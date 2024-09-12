import { AlertOutlined, AppstoreAddOutlined, HomeOutlined, NotificationOutlined, PhoneOutlined, ScheduleOutlined, SearchOutlined } from "@ant-design/icons"

const MenuData = () => {
    return [
        {
            key: 'about',
            label: 'ABOUT',
            icon: <HomeOutlined className="text-slate-700" />,
            url: '/'
        },
        {
            key: 'product',
            label: 'Sản phẩm & Dịch vụ',
            icon: <AppstoreAddOutlined className="text-slate-700" />
        },
        {
            key: 'benefits',
            label: 'Lợi ích của nhà đầu tư',
            icon: <AlertOutlined className="text-slate-700" />
        },
        {
            key: '/news',
            label: 'Sự kiện & Hoạt động',
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