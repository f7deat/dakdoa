import Editor from "@/components/editor";
import ContactForm from "@/components/forms/contact";
import Loader from "@/components/loader";
import ShareButton from "@/components/share-button";
import Sidebar from "@/layouts/sidebar";
import { apiGetCatalogByName, apiGetStructure, apiGetStructureNew } from "@/services/catalog";
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
        <div className="relative">
            <Helmet>
                <title>{catalog?.name || ''} - Shinec Gia Lai</title>
            </Helmet>
            <Loader loading={loading} />

            <div style={{
                backgroundImage: 'url(https://longhau.com.vn/assets/images/about-awards-bg-bottom.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom'
            }}>
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
                            <div className="text-3xl text-green-700 text-center font-semibold py-4">{catalog?.name}</div>
                            <div className="mb-4 border-b border-dashed">
                                <div className='mb-4'>
                                    {editor?.blocks && <Editor blocks={editor.blocks} />}
                                </div>
                                <Divider dashed />
                                <ContactForm />
                                <div className='text-slate-500 italic flex justify-between'>
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
    )
}

export default Page;