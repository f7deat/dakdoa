import Hotline from "@/components/banner/hotline";
import { apiCatalogList } from "@/services/catalog";
import { AppstoreAddOutlined, CaretRightOutlined, SearchOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import { FormattedMessage, Link, useIntl } from "umi";

const Sidebar: React.FC = () => {
    const [products, setProducts] = useState<API.Catalog[]>([]);
    const [quickLinks, setQuickLinks] = useState<API.Catalog[]>([]);
    const intl = useIntl();

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
        apiCatalogList({
            current: 1,
            pageSize: 8,
            type: 0,
            locale: intl.locale,
            parentId
        }).then(response => {
            if (response.data.data) {
                setQuickLinks(response.data.data);
            }
        });
    }, [])

    return (
        <div className="md:w-1/4">
            <div className="mb-4">
                <div className="flex rounded-full bg-slate-100 h-10 w-full">
                    <input type="text" className="h-full w-full bg-slate-100 rounded-full px-4" placeholder={intl.formatMessage({ id: 'SEARCH_PLACEHOLDER'})} />
                    <SearchOutlined className="text-xl text-slate-600 mr-3" />
                </div>
            </div>
            <div className="mb-4">
                <div className="bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700">
                    <AppstoreAddOutlined className="mr-2" />
                    <FormattedMessage id='PRODUCT' />
                </div>
                {
                    products.map(product => (
                        <div key={product.id} className="border-b px-4 py-2">
                            <CaretRightOutlined className="text-green-700" /> <Link to={`/product/${product.id}`} className="text-slate-800 font-medium hover:text-green-700">{product.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div className="mb-4">
                <div className="bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700">
                    <AppstoreAddOutlined className="mr-2" />
                    <FormattedMessage id='ABOUT' />
                </div>

                <div className="border-b px-4 py-2">
                    <CaretRightOutlined className="text-green-700" /> <Link to={`/catalog`} className="text-slate-800 font-medium hover:text-green-700">
                        <FormattedMessage id='CATALOG' />
                    </Link>
                </div>
                {
                    quickLinks.map(x => (
                        <div className="border-b px-4 py-2" key={x.id}>
                            <CaretRightOutlined className="text-green-700" /> <Link to={`/page/${x.normalizedName}`} className="text-slate-800 font-medium hover:text-green-700">{x.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div className="mb-4">
                <Hotline />
            </div>
        </div>
    )
}

export default Sidebar