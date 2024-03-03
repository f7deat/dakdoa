import { GoogleMap } from "@/components";
import BannerFooter from "@/components/banner/footer";
import Loader from "@/components/loader";
import Footer from "@/layouts/footer";
import Sidebar from "@/layouts/sidebar";
import { apiCatalogList } from "@/services/catalog";
import { simpleLocale } from "@/ultis";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Card, Input, Spin, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, Link, useIntl } from "umi";

const ProductListPage: React.FC = () => {

    const { Meta } = Card;
    const [height, setHeight] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const intl = useIntl();
    const [articles, setArticles] = useState<API.Catalog[]>([]);

    useEffect(() => {
        if (!intl.locale) return;
        if (articles && articles.length > 1) {
            return;
        }
        setLoading(true);
        apiCatalogList({
            current: 1,
            pageSize: 8,
            type: 2,
            locale: intl.locale
        }).then(response => {
            setArticles(response.data.data);
            setLoading(false);
        })
        setTimeout(() => {
            setHeight(100)
        }, 100);
    }, [intl.locale]);

    return (
        <div className="relative">
            <Helmet>
                <title>{intl.formatMessage({ id: 'PRODUCT' })} - Shinec Gia Lai</title>
            </Helmet>

            <div style={{
                backgroundImage: 'url(https://longhau.com.vn/assets/images/about-awards-bg-bottom.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
            }}>
                <div className="container mx-auto py-4 px-2 md:px-0">
                    <Loader loading={loading} />
                    <div className="mb-4">
                        <Breadcrumb items={[
                            {
                                title: <Link to='/'><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</Link>
                            },
                            {
                                title: intl.formatMessage({ id: 'PRODUCT' })
                            }
                        ]} />
                    </div>
                    <h1 className="text-center text-2xl md:text-4xl uppercase font-bold py-4 text-green-700 mb-0 md:mb-4">
                        <FormattedMessage id='PRODUCT' />
                    </h1>
                    <div className="md:flex gap-4 mb-4">
                        <div className="md:w-3/4">
                            <div className="grid md:grid-cols-3 gap-4">
                                {
                                    articles.map(article => (
                                        <Link to={`/page/${article.normalizedName}`} key={article.id} className="shadow rounded bg-white">
                                            <figure className="snip1577">
                                                <img
                                                    alt={article.name}
                                                    src={article.thumbnail}
                                                    className="h-52 object-cover max-w-64 w-full"
                                                    loading="lazy"
                                                />
                                                <figcaption>
                                                    <h3>CCN NO.2 Đak Đoa</h3>
                                                    <h4>Shinec Gia Lai</h4>
                                                </figcaption>
                                                <Link to={`/page/${article.normalizedName}`}></Link>
                                            </figure>
                                            <div className="p-2">
                                                <Meta title={(
                                                    <div className="text-green-700 line-clamp-2 mb-2 md:text-lg hover:text-green-800 font-semibold">
                                                        {article.name}
                                                    </div>
                                                )}
                                                    description={(
                                                        <div className="line-clamp-3 text-gray-500">
                                                            {article.description}
                                                        </div>
                                                    )}
                                                />
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListPage;