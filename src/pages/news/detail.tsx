import Footer from "@/layouts/footer";
import { useEffect, useState } from "react"
import { Helmet, Link, useIntl, useParams } from "umi";
import { Breadcrumb, Image, Spin } from 'antd';
import Sidebar from "@/layouts/sidebar";
import Editor from "@/components/editor";
import Loader from "@/components/loader";
import { CalendarOutlined, EyeOutlined, HomeOutlined } from "@ant-design/icons";
import ShareButton from "@/components/share-button";
import moment from "moment";
import { apiGetCatalog, apiGetStructure } from "@/services/catalog";
import Header1 from "@/components/header1";

const NewsDetails: React.FC = () => {

    const { id } = useParams();

    const [height, setHeight] = useState<number>(0);
    const intl = useIntl();
    const [catalog, setCatalog] = useState<API.Catalog>();
    const [editor, setEditor] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setHeight(100)
        }, 100);
        if (id) {
            setLoading(true);
            apiGetCatalog(id).then(response => {
                setCatalog(response.data);
            });
            apiGetStructure(id).then(response => {
                const data = response.data;
                if (data && data.length > 0) {
                    data.forEach((value: any) => {
                        if (value.name === "Editor") {
                            if (value.arguments) {
                                const jsonData = JSON.parse(value.arguments)
                                setEditor(jsonData);
                                console.log(jsonData);
                            }
                        }
                    })
                } else {
                    setEditor([])
                }
                setLoading(false);
            })
        }
    }, [id]);

    return (
        <div className="relative bg-green-600 text-white">
            <Helmet>
                <title>{catalog?.name || ''} - Shinec Gia Lai</title>
            </Helmet>
            <Loader loading={loading} />
            <main className="container mx-auto py-10 px-4 md:px-0">
                <div className="mb-4">
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
                        <Header1 active>{catalog?.name}</Header1>
                        <div className="mb-4 border-b border-dashed">
                            <div className='mb-4'>
                                {editor?.blocks && <Editor blocks={editor.blocks} />}
                            </div>
                            <div className='text-slate-100 italic flex justify-between'>
                                <div><CalendarOutlined /> Cập nhật lúc: {moment(catalog?.modifiedDate).format('DD/MM/YYYY hh:mm')}</div>
                                <div><EyeOutlined /> Lựợt xem: {(catalog?.viewCount || 0).toLocaleString()}</div>
                            </div>
                        </div>
                        <ShareButton />
                    </div>
                    <Sidebar />
                </div>
            </main>
        </div>
    )
}

export default NewsDetails