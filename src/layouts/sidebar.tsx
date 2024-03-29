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
        if (e.key === 'thue-dat-cong-nghiep') {
            history.push(`/product/1f025462-0ad8-4ffb-31df-08dc044e3bfc`);
            return;
        }
        if (e.key === 'thue-xuong-kho-xay-san') {
            history.push(`/product/65773527-8ba5-485e-f318-08dc044f3d01`);
            return;
        }
        if (e.key === 'cho-thue-dat-thuong-mai') {
            history.push(`/product/ae3486a8-194d-4a37-d5d6-08dc0451c999`);
            return;
        }
        if (e.key === 'cho-thue-van-phong') {
            history.push(`/product/5dd86918-9719-4ca7-0359-08dc045188ed`);
            return;
        }
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
            <div className="mb-4">
                <div className="flex rounded-full bg-green-700 h-10 w-full">
                    <input type="text" className="h-full w-full bg-green-700 rounded-full px-4" placeholder={intl.formatMessage({ id: 'SEARCH_PLACEHOLDER' })} />
                    <SearchOutlined className="text-xl text-slate-100 mr-3" />
                </div>
            </div>
            <div className="mb-4">
                <div className="bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700">
                    <AppstoreAddOutlined className="mr-2" />
                    <FormattedMessage id='PRODUCT' />
                </div>
                <Menu
                    className='justify-end bg-green-700 text-white'
                    mode="vertical"
                    onClick={onClick}
                    items={MenuData().find(x => x.key === '/product')?.children}
                />
            </div>
            <div className="mb-4">
                <Hotline />
            </div>
        </div>
    )
}

export default Sidebar