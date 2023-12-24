import Footer from "@/layouts/footer";
import { useEffect, useState } from "react"
import { Helmet, useIntl, useParams } from "umi";
import { Image } from 'antd';

const NewsDetails: React.FC = () => {

    const { id } = useParams();

    const [height, setHeight] = useState<number>(0);
    const intl = useIntl();
    const [catalog, setCatalog] = useState<API.Catalog>();
    const [editor, setEditor] = useState<any>();

    useEffect(() => {
        setTimeout(() => {
            setHeight(147)
        }, 100);
        fetch(`https://shinecgialai.com.vn/api/catalog/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        }).then(response => response.json().then(data => {
            setCatalog(data);
        }));
        fetch(`https://shinecgialai.com.vn/api/catalog/structure/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        }).then(response => response.json().then((data: any[]) => {
            if (data && data.length > 0) {
                data.forEach(value => {
                    if (value.name === "Editor") {
                        if (value.arguments) {
                            const jsonData = JSON.parse(value.arguments)
                            setEditor(jsonData);
                            console.log(jsonData);
                        }
                    }
                })
            }
        }));
    }, []);

    return (
        <>
            <Helmet>
                <title>{catalog?.name || ''} - Shinec Gia Lai</title>
            </Helmet>
            <main className="container mx-auto">
                <div className="text-3xl text-green-700 text-center font-semibold py-4">{catalog?.name}</div>
                <div className="shadow p-4">
                    {
                        editor?.blocks.map((block: any) => (
                            <div id={block.id}>
                                {block.type === "paragraph" && <p className="mb-2">{block.data.text}</p>}
                                {block.type === "simpleImage" && (
                                    <div className="flex justify-center mb-2">
                                        <Image src={block.data.url} alt="IMG" loading="lazy" />
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            </main>
            <Footer height={height} />
        </>
    )
}

export default NewsDetails