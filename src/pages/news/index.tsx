import { Card } from "antd";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, useIntl } from "umi";

const NewsPage: React.FC = () => {

    const { Meta } = Card;

    const intl = useIntl();
    const [articles, setArticles] = useState<{
        name: string;
        thumbnail: string;
    }[]>([]);

    useEffect(() => {
        fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=1`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        }).then(response => response.json().then(data => {
            setArticles(data.data);
        }))
    }, []);

    return (
        <>
            <Helmet>
                <title>{intl.formatMessage({ id: 'NEWS' })} - Shinec Gia Lai</title>
            </Helmet>
            <div className="container mx-auto py-4 md:py-10">
                <div className="grid md:grid-cols-4 gap-4">
                    {
                        articles.map(article => (
                            <Card title={article.name} 
                            cover={<img alt="IMG" src={article.thumbnail} className="object-cover h-52" />}
                            >

                            </Card>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default NewsPage;