import Loader from "@/components/loader";
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
    const [artice, setArtice] = useState<any>();
    const [open, setOpen] = useState<boolean>(false);

    const intl = useIntl();
    const [articles, setArticles] = useState<API.Catalog[]>([]);

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

            <div className="container mx-auto py-4 md:py-10 px-4 md:px-0">
                <Loader loading={loading} />
                <div className="mb-4 px-4">
                    <Breadcrumb items={[
                        {
                            title: <Link to='/'>
                                <HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}
                            </Link>
                        },
                        {
                            title: intl.formatMessage({ id: 'NEWS' })
                        }
                    ]} />
                </div>
                <Header1 active primary>
                    Sự kiện & hoạt động
                </Header1>
                <div className="grid md:grid-cols-4 gap-4">
                    {
                        articles.map(article => (
                            <div className="shadow-lg"
                                key={article.id}
                            >
                                <Link to={`/page/${article.normalizedName}`}>
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
                                            <div className="text-green-700 line-clamp-2 md:text-lg font-semibold">
                                                {article.name}
                                            </div>
                                        )}
                                            description={(
                                                <div className="line-clamp-2 text-gray-500">
                                                    <div className="flex justify-end text-sm mb-2">{moment(article.modifiedDate).format('DD-MM-YYYY hh:mm')}</div>
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
                <Modal title={stripHtml(artice?.title.rendered)} open={open} onCancel={() => setOpen(false)} footer={false} width={1000}>
                    {stripHtml(artice?.content.rendered)}
                </Modal>
            </div>
        </div>
    )
}

export default NewsPage;