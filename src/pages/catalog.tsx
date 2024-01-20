import Footer from "@/layouts/footer"
import { Breadcrumb } from "antd"
import { Helmet, Link, useIntl } from "umi"
import { DownloadOutlined, HomeOutlined } from '@ant-design/icons';

const CatalogPage: React.FC = () => {
    const intl = useIntl();
    return (
        <>
            <Helmet>
                <title>Catalog</title>
            </Helmet>
            <div className="container mx-auto py-10">
                <div className="mb-4">
                    <Breadcrumb items={[
                        {
                            title: <Link to='/'><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</Link>
                        },
                        {
                            title: 'Catalogue'
                        }
                    ]} />
                </div>
                <div className="text-center text-green-700 font-semibold uppercase text-2xl md:text-4xl mb-4">
                    Catalogue
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="border p-3">
                        <figure className="snip1577">
                            <img src='https://shinecgialai.com.vn/files/CATALOGUE%208.png' className="w-full object-cover mb-2 border" alt="CATALOGUE" loading="lazy" />
                            <figcaption>
                                <h3>CCN SỐ 2 Đak Đoa</h3>
                                <h4>Shinec Gia Lai</h4>
                            </figcaption>
                            <a href="https://shinecgialai.com.vn/files/catalogue-DakDoa.pdf" target="_blank"></a>
                        </figure>
                        <div className="flex justify-center py-2">
                            <a href="https://shinecgialai.com.vn/files/catalogue-DakDoa.pdf" target="_blank" className="border border-green-700 font-medium rounded px-4 py-2 text-green-700 transition duration-500 hover:text-white hover:bg-green-700">
                                <DownloadOutlined className="mr-2" />
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer height={100} />
        </>
    )
}

export default CatalogPage