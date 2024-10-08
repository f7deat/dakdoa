import Hotline from "@/components/banner/hotline";
import MenuData from "@/data/menu";
import { apiCatalogList } from "@/services/catalog";
import { AppstoreAddOutlined, CaretRightOutlined, SearchOutlined } from "@ant-design/icons"
import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { FormattedMessage, Link, history, useIntl } from "umi";

const Sidebar: React.FC = () => {
    const [products, setProducts] = useState<API.Catalog[]>([]);
    const intl = useIntl();

    const onClick: MenuProps['onClick'] = (e) => {
        if (e.key === '/about-shinec') {
            history.push(`/page/gioi-thieu`);
            return;
        }
        if (e.key === '/news') {
            window.location.href = 'https://shinecgialai.com.vn/article'
            return;
        }
        if (e.key === '/career') {
            window.location.href = 'https://shinecgialai.com.vn/leaf/viec-lam';
            return;
        }
        if (e.key === '/contact') {
            history.push(`/contact`);
            return;
        }
        history.push(`/page/${e.key}`);
        return;
    };

    const getProducts = async () => {
        if (products && products.length > 0) {
            return;
        }
        apiCatalogList({
            current: 1,
            pageSize: 8,
            type: 2,
            locale: intl.locale
        }).then(response => {
            if (response.data.data) {
                setProducts(response.data.data);
            }
        });
    }

    useEffect(() => {
        getProducts();
        let parentId = '125f06d1-dc08-4a18-9cfd-08dc39eb733b';
        if (intl.locale === 'vi-VN') {
            parentId = '688d23e2-4567-49af-29ae-08dc39ef00ab';
        }
    }, [])

    return (
        <div className="md:w-1/4">
            <div className="mb-4 sidebar">
                <div className="bg-slate-100 rounded-t uppercase py-2 px-4 font-bold text-green-700">
                    <AppstoreAddOutlined className="mr-2" />
                    Về CCN số 2 Đak Đoa
                </div>
                <div className="border border-2 rounded-b">
                <Menu
                    className='justify-end bg-green-700 text-white rounded-b'
                    mode="vertical"
                    onClick={onClick}
                    items={MenuData().find(x => x.key === '/product')?.children}
                />
                </div>
            </div>
            <div className="mb-4">
                <Hotline />
            </div>
        </div>
    )
}

export default Sidebar