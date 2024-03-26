import { useEffect, useState } from 'react';
import { Helmet, Link, useIntl, useParams } from 'umi';
import { Breadcrumb, Divider } from 'antd';
import Sidebar from '@/layouts/sidebar';
import Editor from '@/components/editor';
import Loader from '@/components/loader';
import { CalendarOutlined, EyeOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import { apiGetCatalog, apiGetStructure } from '@/services/catalog';
import bg from '../../assets/css/bg-feature.gif';
import infra from '../../assets/tree-opa.svg';
import Header1 from '@/components/header1';

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
        <div className='relative overflow-x-hidden'>
            <Helmet>
                <title>{product?.name || ''} - Shinec Gia Lai</title>
                <meta property="og:title" content={product?.name} />
                <meta property="og:description" content={product?.description} />
                <meta property="og:image" content={product?.thumbnail} />
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
                                <main className="container mx-auto py-10 px-4 md:px-0 text-white">
                                    <div className="mb-4">
                                        <Breadcrumb items={[
                                            {
                                                title: <Link to='/'><span className='text-white'><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</span></Link>
                                            },
                                            {
                                                title: <span className='text-white'>{intl.formatMessage({ id: 'PRODUCT' })}</span>
                                            }
                                        ]} />
                                    </div>
                                    <div className="md:flex gap-4">
                                        <div className="md:w-3/4">
                                            <Header1 active>{product?.name}</Header1>
                                            <div className='mb-4 border-b border-dashed'>
                                                <div className='mb-4'>
                                                    {editor?.blocks && <Editor blocks={editor.blocks} />}
                                                </div>
                                                <Divider dashed />
                                                <div className='text-slate-100 italic flex justify-between'>
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
                    </div>
            </div>
        </div>
    )
}

export default ProductPage