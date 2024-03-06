import { useEffect, useState } from 'react';
import { Helmet, Link, useIntl, useParams } from 'umi';
import { Breadcrumb, Divider } from 'antd';
import Sidebar from '@/layouts/sidebar';
import Editor from '@/components/editor';
import Loader from '@/components/loader';
import { CalendarOutlined, EyeOutlined, HomeOutlined } from '@ant-design/icons';
import ShareButton from '@/components/share-button';
import moment from 'moment';
import { apiGetCatalog, apiGetStructure } from '@/services/catalog';
import ContactForm from '@/components/forms/contact';

const ProductPage: React.FC = () => {

    const { id } = useParams();

    const intl = useIntl();
    const [product, setProduct] = useState<API.Catalog>();
    const [editor, setEditor] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            setLoading(true);
            apiGetStructure(id).then(response => {
                const data = response.data;
                if (data && data.length > 0) {
                    data.forEach((value: any) => {
                        if (value.name === "Editor") {
                            if (value.arguments) {
                                const jsonData = JSON.parse(value.arguments)
                                setEditor(jsonData);
                            }
                        }
                    })
                } else {
                    setEditor([])
                }
                setLoading(false);
            })
            apiGetCatalog(id).then(response => {
                setProduct(response.data);
                console.log(response.data)
            })
        }
    }, [id])

    return (
        <div className='relative'>
            <Helmet>
                <title>{product?.name || ''} - Shinec Gia Lai</title>
                <meta property="og:title" content={product?.name} />
                <meta property="og:description" content={product?.description} />
                <meta property="og:image" content={product?.thumbnail} />
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
                                title: intl.formatMessage({ id: 'PRODUCT' })
                            }
                        ]} />
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-3/4">
                            <h1 className="text-2xl md:text-4xl text-green-700 text-center font-semibold py-4">{product?.name}</h1>
                            <div className='mb-4 border-b border-dashed'>
                                <div className='mb-4'>
                                    {editor?.blocks && <Editor blocks={editor.blocks} />}
                                </div>
                            <Divider dashed />
                            <ContactForm />
                                <div className='text-slate-500 italic flex justify-between'>
                                    <div><CalendarOutlined /> Cập nhật lúc: {moment(product?.modifiedDate).format('DD/MM/YYYY hh:mm')}</div>
                                    <div><EyeOutlined /> Lựợt xem: {(product?.viewCount || 0).toLocaleString()}</div>
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

export default ProductPage