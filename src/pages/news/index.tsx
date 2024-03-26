import { GoogleMap } from "@/components";
import Loader from "@/components/loader";
import Footer from "@/layouts/footer";
import Sidebar from "@/layouts/sidebar";
import { apiCatalogList } from "@/services/catalog";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Card, Input, Modal, Pagination, Spin, Table, Tabs, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, Link, useIntl } from "umi";
import './style.css';
import bg from '../../assets/css/bg-feature.gif';
import infra from '../../assets/tree-opa.svg';
import Header1 from "@/components/header1";

const NewsPage: React.FC = () => {

    const { Meta } = Card;
    const [loading, setLoading] = useState<boolean>(false);
    const [shinecLoading, setShinecLoading] = useState<boolean>(false);
    const [artice, setArtice] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);

    const intl = useIntl();
    const [articles, setArticles] = useState<{
        id: string;
        name: string;
        thumbnail: string;
        description: string;
    }[]>([]);

    const [shinecArtices, setShinecArtices] = useState<any[]>([]);

    useEffect(() => {
        if (articles && articles.length > 1) {
            return;
        }
        setLoading(true);
        apiCatalogList({
            current: 1,
            pageSize: 8,
            type: 1,
            locale: intl.locale
        }).then(response => {
            setArticles(response.data.data);
            setLoading(false);
        })
    }, []);

    const onChange = (actKey: string) => {
        if (actKey === 'namcaukien' && shinecArtices.length === 0) {
            setShinecLoading(true);
            fetch(`https://shinecgialai.com.vn/api/open-api/wordpress/posts?domain=https://namcaukien.com.vn/`, {
                method: 'GET'
            }).then(response => response.json().then(data => {
                setShinecArtices(data);
                setShinecLoading(false);
            }));
        }
    }

    const stripHtml = (value: string) => {
        if (!value) {
            return '';
        }
        return React.createElement("div", { dangerouslySetInnerHTML: { __html: value } });
    }
    return (
        <div className="relative overflow-x-hidden">
            <Helmet>
                <title>{intl.formatMessage({ id: 'NEWS' })} - Shinec Gia Lai</title>
            </Helmet>

            <div className="bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
                style={{
                    backgroundImage: `url(${bg})`
                }}>
                <div className="flex h-full flex-col justify-between w-screen" >
                    <div className="relative h-full" style={{
                        background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                    }}>
                        <div className="h-full flex items-center justify-center" style={{
                            backgroundImage: `url(${infra})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom right'
                        }}>
                            <div className="container mx-auto py-4 md:py-10 px-4 md:px-0">
                                <Loader loading={loading} />
                                <div className="mb-4 px-4">
                                    <Breadcrumb items={[
                                        {
                                            title: <Link to='/'>
                                                <span className="text-white"><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</span>
                                            </Link>
                                        },
                                        {
                                            title: <span className="text-white">{intl.formatMessage({ id: 'NEWS' })}</span>
                                        }
                                    ]} />
                                </div>
                                <Header1 active><FormattedMessage id='NEWS' /></Header1>
                                <div className="md:flex gap-4">
                                    <div className="md:w-3/4">
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {
                                                articles.map(article => (
                                                    <div
                                                        key={article.id}
                                                        className="shadow rounded bg-green-700 shadow-lg"
                                                    >
                                                        <Link to={`/news/${article.id}`}>
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
                                                                <Link to={`/news/${article.id}`}></Link>
                                                            </figure>
                                                            <div className="p-2">
                                                                <Meta title={(
                                                                    <div className="text-green-700 line-clamp-2 mb-2 md:text-lg hover:text-green-800 font-semibold text-white">
                                                                        {article.name}
                                                                    </div>
                                                                )}
                                                                    description={(
                                                                        <div className="line-clamp-3 text-gray-500 text-white">
                                                                            {article.description}
                                                                        </div>
                                                                    )}
                                                                />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="py-2 flex justify-end">
                                            <Pagination />
                                        </div>
                                    </div>
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                        <Modal title={stripHtml(artice?.title.rendered)} open={open} onCancel={() => setOpen(false)} footer={false} width={1000}>
                            {stripHtml(artice?.content.rendered)}
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;