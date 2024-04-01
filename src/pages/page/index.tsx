import Editor from "@/components/editor";
import bg from '../../assets/css/bg-feature.gif';
import infra from '../../assets/tree-opa.svg';
import Header1 from "@/components/header1";
import Loader from "@/components/loader";
import Sidebar from "@/layouts/sidebar";
import { apiGetCatalogByName, apiGetStructure } from "@/services/catalog";
import { HomeOutlined, CalendarOutlined, EyeOutlined } from "@ant-design/icons";
import { Breadcrumb, Divider } from "antd";
import moment from "moment";
import { useState, useEffect } from "react";
import { useParams, useIntl, Helmet, Link } from "umi";

const Page: React.FC = () => {
    const { id, parent } = useParams();

    const intl = useIntl();
    const [catalog, setCatalog] = useState<API.Catalog>();
    const [editor, setEditor] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            setLoading(true);
            let normalizedName = id;
            if (parent) {
                normalizedName = parent + '/' + id;
            }
            apiGetCatalogByName(normalizedName).then(response => {
                setCatalog(response.data);
                apiGetStructure(response.data.id).then(response => {
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
            });
        }
    }, [id]);

    return (
        <div className="relative overflow-x-hidden">
            <Helmet>
                <title>{catalog?.name || ''} - Shinec Gia Lai</title>
            </Helmet>
            <Loader loading={loading} />
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
                            <main className="container mx-auto py-10 px-4 md:px-0">
                                <div className="mb-4">
                                    <Breadcrumb items={[
                                        {
                                            title: <Link to='/'>
                                                <span className="text-slate-200"><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</span>
                                            </Link>
                                        },
                                        {
                                            title: <span className="text-slate-200">{catalog?.name}</span>
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
                                            <Divider dashed />
                                            <div className='text-slate-200 italic flex justify-between'>
                                                <div><CalendarOutlined /> Cập nhật lúc: {moment(catalog?.modifiedDate).format('DD/MM/YYYY hh:mm')}</div>
                                                <div><EyeOutlined /> Lựợt xem: {(catalog?.viewCount || 0).toLocaleString()}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <Sidebar />
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;