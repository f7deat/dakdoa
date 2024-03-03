import { HomeOutlined, SearchOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { Helmet, Link, useIntl } from "umi";

const SearchPage: React.FC = () => {
    const intl = useIntl();
    return (
        <>
            <Helmet>
                <title>Tìm kiếm</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="mt-6">
                    <Breadcrumb items={[
                        {
                            title: <Link to='/'><HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}</Link>
                        },
                        {
                            title: intl.formatMessage({ id: 'NEWS' })
                        }
                    ]} />
                </div>
                <main className="h-96 2xl:h-[700px] flex items-center justify-center">
                    <div className="2xl:w-1/2">
                        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                            <div className="md:flex">
                                <div className="w-full p-3">
                                    <div className="relative border rounded-full">
                                        <i className="absolute fa fa-search text-gray-400 top-5 left-4" />
                                        <input
                                            placeholder={intl.formatMessage({ id: 'SEARCH_PLACEHOLDER' })}
                                            type="text" className="bg-white h-14 w-full px-12 focus:outline-none hover:cursor-pointer rounded-full" />
                                        <span className="absolute top-5 right-5 border-l pl-4">
                                            <SearchOutlined className="text-slate-700 text-lg" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default SearchPage;