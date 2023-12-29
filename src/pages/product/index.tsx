import { GoogleMap } from "@/components";
import Loader from "@/components/loader";
import Footer from "@/layouts/footer";
import Sidebar from "@/layouts/sidebar";
import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Card, Input, Spin, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, Link, useIntl } from "umi";

const ProductListPage: React.FC = () => {

    const { Meta } = Card;
    const [height, setHeight] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    const intl = useIntl();
    const [articles, setArticles] = useState<{
        id: string;
        name: string;
        thumbnail: string;
        description: string;
    }[]>([]);

    useEffect(() => {
        if (articles && articles.length > 1) {
            return;
        }
        setLoading(true);
        fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=2`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        }).then(response => response.json().then(data => {
            setArticles(data.data);
            setLoading(false);
        }));
        setTimeout(() => {
            setHeight(147)
        }, 100);
    }, []);

    return (
        <>
            <Helmet>
                <title>{intl.formatMessage({ id: 'PRODUCT' })} - Shinec Gia Lai</title>
            </Helmet>
            <div className="container mx-auto py-4">
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
                <div className="md:flex gap-4 mb-4">
                    <div className="md:w-3/4">
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
                                                    <Link to={`/product/${article.id}`}>
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
                    </div>
                    <Sidebar />
                </div>
            </div>
                <GoogleMap />
            <Footer height={height} />
        </>
    )
}

export default ProductListPage;