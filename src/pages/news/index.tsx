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
import { simpleLocale } from "@/ultis";

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
        <div className="relative">
            <Helmet>
                <title>{intl.formatMessage({ id: 'NEWS' })} - Shinec Gia Lai</title>
            </Helmet>

            <div style={{
                backgroundImage: 'url(https://longhau.com.vn/assets/images/about-awards-bg-bottom.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
            }}>
                <div className="container mx-auto py-4 md:py-10 px-4 md:px-0">
                    <Loader loading={loading} />
                    <div className="mb-4 px-4">
                        <Breadcrumb items={[
                            {
                                title: <Link to='/'><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</Link>
                            },
                            {
                                title: intl.formatMessage({ id: 'NEWS' })
                            }
                        ]} />
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-3/4">
                            <Tabs
                                onChange={onChange}
                                type="card"
                                items={[
                                    {
                                        key: 'gialai',
                                        label: 'Đak Đoa',
                                        children: (
                                            <>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    {
                                                        articles.map(article => (
                                                            <div
                                                                key={article.id}
                                                                className="shadow rounded bg-white"
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
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="py-2 flex justify-end">
                                                    <Pagination />
                                                </div></>
                                        )
                                    },
                                    {
                                        key: 'namcaukien',
                                        label: 'Shinec',
                                        children: (
                                            <>
                                                <Table loading={shinecLoading} columns={[
                                                    {
                                                        title: '#',
                                                        render: (value, record, index) => index + 1
                                                    },
                                                    {
                                                        title: 'Tiêu đề',
                                                        render: (value, record) => (
                                                            <button className="hover:text-green-700" onClick={() => {
                                                                setArtice(record)
                                                                setOpen(true);
                                                            }}>
                                                                {stripHtml(record.title.rendered)}
                                                            </button>
                                                        )
                                                    },
                                                    {
                                                        title: 'Ngày',
                                                        render: (value, record) => moment(record.date).format('DD-MM-YYYY hh:mm'),
                                                        width: 200
                                                    }
                                                ]}
                                                    dataSource={shinecArtices}
                                                />
                                            </>
                                        )
                                    }
                                ]}  >

                            </Tabs>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <Modal title={stripHtml(artice?.title.rendered)} open={open} onCancel={() => setOpen(false)} footer={false} width={1000}>
                {stripHtml(artice?.content.rendered)}
            </Modal>
        </div>
    )
}

export default NewsPage;