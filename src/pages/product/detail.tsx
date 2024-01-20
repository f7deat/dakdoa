import { useEffect, useState } from 'react';
import { Helmet, Link, useIntl, useParams } from 'umi';
import Footer from '@/layouts/footer';
import { Breadcrumb } from 'antd';
import Sidebar from '@/layouts/sidebar';
import Editor from '@/components/editor';
import Loader from '@/components/loader';
import { CalendarOutlined, EyeOutlined, HomeOutlined } from '@ant-design/icons';
import ShareButton from '@/components/share-button';
import { GoogleMap } from '@/components';
import moment from 'moment';
import { apiGetCatalog, apiGetStructure } from '@/services/catalog';
import BannerFooter from '@/components/banner/footer';
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
        <div className='relative'>
            <Helmet>
                <title>{product?.name || ''} - Shinec Gia Lai</title>
            </Helmet>
            <Loader loading={loading} />
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
                        <div className="text-2xl md:text-4xl text-green-700 text-center font-semibold py-4">{product?.name}</div>
                        <div className='mb-4 border-b border-dashed'>
                            <div className='mb-4'>
                                {editor?.blocks && <Editor blocks={editor.blocks} />}
                            </div>
                            <div className='text-slate-500 italic flex justify-between'>
                                <div><CalendarOutlined /> Cập nhật lúc: {moment(product?.modifiedDate).format('DD/MM/YYYY hh:mm')}</div>
                                <div><EyeOutlined /> Lựợt xem: {(product?.viewCount || 0).toLocaleString()}</div>
                            </div>
                        </div>
                        <ShareButton />
                    </div>
                    <Sidebar />
                </div>
            </main>
            <BannerFooter />
            <Footer height={100} />
        </div>
    )
}

export default ProductPage