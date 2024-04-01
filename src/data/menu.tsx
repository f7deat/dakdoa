import { AlertOutlined, AppstoreAddOutlined, HomeOutlined, NotificationOutlined, PhoneOutlined, ScheduleOutlined, SearchOutlined } from "@ant-design/icons"

const MenuData = () => {
    return [
        {
            key: '/about-shinec',
            label: 'ABOUT',
            icon: <HomeOutlined className="text-slate-700" />,
            children: [
                {
                    key: 'shinec-gia-lai',
                    label: 'Shinec Gia Lai' 
                },
                {
                    key: 'su-menh-va-tam-nhin',
                    label: 'Sứ mệnh và Tầm nhìn' 
                }
            ]
        },
        {
            key: '/product',
            label: 'Về CCN số 2 Đak Đoa',
            icon: <AppstoreAddOutlined className="text-slate-700" />,
            children: [
                {
                    key: 'tong-quan-ve-ccn',
                    label: 'Tổng quan về CCN'
                },
                {
                    key: 'thue-dat-cong-nghiep',
                    label: 'Cho thuê nhà xưởng xây sẵn',
                    children: [
                        {
                            key: 'thue-xuong-kho-xay-san',
                            label: 'Nhà xưởng xây sẵn'
                        },
                        {
                            key: 'thue-dung-xuong-kho-theo-yeu-cau',
                            label: 'Nhà xưởng xây theo yêu cầu'
                        }
                    ]
                },
                {
                    key: 'thue-dat-cong-nghiep',
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
                    key: 'nganh-muc-tieu',
                    label: 'Ngành mục tiêu '
                },
                {
                    key: 'ban-do-dia-diem',
                    label: 'Bản đồ địa điểm'
                },
                {
                    key: 'khach-hang-hien-tai',
                    label: 'Khách hàng hiện tại'
                },
                {
                    key: 'phong-trung-bay',
                    label: 'Phòng trưng bày'
                },
                {
                    key: 'dich-vu-cskh',
                    label: 'Dịch vụ CSKH'
                },
                {
                    key: 'xem-vr-360',
                    label: 'Xem VR 360'
                }
            ]
        },
        {
            key: '/amenities',
            label: 'Lợi ích của nhà đầu tư',
            icon: <AlertOutlined className="text-slate-700" />,
            children: [
                {
                    key: 'tien-ich-noi-khu',
                    label: 'Tiện ích nội khu'
                },
                {
                    key: 'tien-ich-ngoai-khu',
                    label: 'Tiện ích ngoại khu'
                },
                {
                    key: 'khac-biet-va-loi-the',
                    label: 'Khác biệt và lợi thế'
                }
            ]
        },
        {
            key: '/news',
            label: 'Tin tức',
            url: '/news',
            icon: <NotificationOutlined className="text-slate-700" />
        },
        {
            key: '/career',
            label: 'Việc làm',
            url: '/career',
            icon: <ScheduleOutlined className="text-slate-700" />
        },
        {
            key: '/contact',
            label: 'Liên hệ',
            url: '/contact',
            icon: <PhoneOutlined className="text-slate-700" />
        }
    ]
}

export default MenuData