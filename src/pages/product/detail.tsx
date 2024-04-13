import { useEffect, useState } from 'react';
import { Helmet, Link, useIntl, useParams } from 'umi';
import { Breadcrumb, Divider, Modal } from 'antd';
import Sidebar from '@/layouts/sidebar';
import Editor from '@/components/editor';
import Loader from '@/components/loader';
import { CalendarOutlined, EyeOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import { apiGetCatalog, apiGetStructure } from '@/services/catalog';
import bg from '../../assets/css/bg-feature.gif';
import infra from '../../assets/tree-opa.svg';
import Header1 from '@/components/header1';
import ContactForm from '@/components/forms/contact';

const ProductPage: React.FC = () => {

    const { id } = useParams();

    const intl = useIntl();
    const [product, setProduct] = useState<API.Catalog>();
    const [editor, setEditor] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

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

            <div className="mb-4 h-32 bg-gray-300 flex items-center justify-center text-white" style={{
                background: `url('https://longhau.com.vn/assets/images/about-awards-bg-bottom.png') #010e007d bottom`,
                backgroundBlendMode: 'multiply'
            }}>
                <Breadcrumb items={[
                    {
                        title: <Link to='/'>
                            <HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}
                        </Link>
                    },
                    {
                        title: product?.name
                    }
                ]} />
            </div>
            <Loader loading={loading} />
            <main className="container mx-auto px-4 md:px-0">
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
                <Header1 active primary>{product?.name}</Header1>
                <div className='mb-4 border-b border-dashed'>
                    <div className='mb-4'>
                        {editor?.blocks && <Editor blocks={editor.blocks} />}
                    </div>
                    <div className='py-4 text-center'>
                        <button className='border-2 border-red-500 text-red-500 font-bold py-2 px-6 hover:bg-red-500 hover:text-white' onClick={() => setOpen(true)}>Liên hệ với chúng tôi</button>
                    </div>
                    <Divider dashed />
                    <div className='italic flex justify-between'>
                        <div><CalendarOutlined /> Cập nhật lúc: {moment(product?.modifiedDate).format('DD/MM/YYYY hh:mm')}</div>
                        <div><EyeOutlined /> Lựợt xem: {(product?.viewCount || 0).toLocaleString()}</div>
                    </div>
                </div>
            </main>
            <Modal open={open} onCancel={() => setOpen(false)} width={900} footer={false}>
                <div className='rounded-lg'>
                    <div className='text-center pt-4 text-xl'>Liên hệ với chúng tôi</div>
                    <Divider dashed />
                    <ContactForm />
                </div>
            </Modal>
        </div>
    )
}

export default ProductPage