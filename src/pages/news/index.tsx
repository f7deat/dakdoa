import Footer from "@/layouts/footer";
import { Avatar, Card, Spin, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, Link, useIntl } from "umi";

const NewsPage: React.FC = () => {

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
        setLoading(true);
        fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=1`, {
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
                <title>{intl.formatMessage({ id: 'NEWS' })} - Shinec Gia Lai</title>
            </Helmet>
            <div className="container mx-auto py-4 md:py-10">
                <Spin fullscreen spinning={loading} />
                <div className="grid md:grid-cols-4 gap-4">
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
            </div>
            <Footer height={height} />
        </>
    )
}

export default NewsPage;