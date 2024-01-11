import { GoogleMap } from "@/components";
import Loader from "@/components/loader";
import Footer from "@/layouts/footer";
import Sidebar from "@/layouts/sidebar";
import { apiCatalogList } from "@/services/catalog";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Card, Input, Pagination, Spin, Table, Tabs, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, Link, useIntl } from "umi";

const NewsPage: React.FC = () => {

    const { Meta } = Card;
    const [loading, setLoading] = useState<boolean>(false);
    const [shinecLoading, setShinecLoading] = useState<boolean>(false);

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
            type: 1
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
        <>
            <Helmet>
                <title>{intl.formatMessage({ id: 'NEWS' })} - Shinec Gia Lai</title>
            </Helmet>
            <div className="container mx-auto py-4 md:py-10">
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
                                    label: 'Nội bộ',
                                    children: (
                                        <>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                {
                                                    articles.map(article => (
                                                        <Card
                                                            hoverable
                                                            key={article.id}
                                                            cover={
                                                                <img
                                                                    alt={article.name}
                                                                    src={article.thumbnail}
                                                                    className="h-52 object-cover"
                                                                />
                                                            }
                                                        >
                                                            <Tooltip title={article.name}>
                                                                <Meta
                                                                    title={(
                                                                        <Link to={`/news/${article.id}`}>
                                                                            {article.name}
                                                                        </Link>
                                                                    )}
                                                                    description={(
                                                                        <div className="truncate">
                                                                            {article.description}
                                                                        </div>
                                                                    )}
                                                                />
                                                            </Tooltip>
                                                        </Card>
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
                                                        <a href={`https://namcaukien.com.vn/${record.slug}`} target="_blank" className="hover:text-green-700">
                                                            {stripHtml(record.title.rendered)}
                                                        </a>
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
            <GoogleMap />
            <Footer height={100} />
        </>
    )
}

export default NewsPage;