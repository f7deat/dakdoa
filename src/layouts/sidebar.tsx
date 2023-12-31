import Hotline from "@/components/banner/hotline";
import { AppstoreAddOutlined, CaretRightOutlined, SearchOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react";
import { Link } from "umi";

const Sidebar: React.FC = () => {
    const [products, setProducts] = useState<API.Catalog[]>([]);

    const getProducts = async () => {
        if (products && products.length > 0) {
            return;
        }
        const res = await fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=10&type=2`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        });
        if (res.ok) {
            const articles = await res.json().then(res => res.data);
            setProducts(articles);
        }
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="md:w-1/4">
            <div className="mb-4">
                <div className="flex rounded-full bg-slate-100 h-10 w-full">
                    <input type="text" className="h-full w-full bg-slate-100 rounded-full px-4" placeholder="Nhập từ khóa..." />
                    <SearchOutlined className="text-xl text-slate-600 mr-3" />
                </div>
            </div>
            <div className="mb-4">
                <div className="bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700"><AppstoreAddOutlined /> SẢN PHẨM - DỊCH VỤ</div>
                {
                    products.map(product => (
                        <div key={product.id} className="border-b px-4 py-2">
                            <CaretRightOutlined className="text-green-700" /> <Link to={`/product/${product.id}`} className="text-slate-600 font-medium hover:text-green-700">{product.name}</Link>
                        </div>
                    ))
                }
            </div>
            <div className="mb-4">
                <div className="bg-slate-100 rounded uppercase py-2 px-4 font-bold text-green-700"><AppstoreAddOutlined /> THÔNG TIN CHI TIẾT</div>

                <div className="border-b px-4 py-2">
                    <CaretRightOutlined className="text-green-700" /> <Link to={`/catalog`} className="text-slate-600 font-medium hover:text-green-700">Tài liệu</Link>
                </div>
                <div className="border-b px-4 py-2">
                    <CaretRightOutlined className="text-green-700" /> <Link to={`/news/8bc9db4e-3ffb-4950-8e41-08dc081eba2c`} className="text-slate-600 font-medium hover:text-green-700">Phối cảnh 3D</Link>
                </div>
                <div className="border-b px-4 py-2">
                    <CaretRightOutlined className="text-green-700" /> <Link to={`/news/1c87fe8e-5094-49cf-4d09-08dc0823fa43`} className="text-slate-600 font-medium hover:text-green-700">Giải thưởng</Link>
                </div>
                <div className="border-b px-4 py-2">
                    <CaretRightOutlined className="text-green-700" /> <Link to={`/news/36724df0-a109-44b2-770f-08dc08244635`} className="text-slate-600 font-medium hover:text-green-700">Định hướng và tầm nhìn SHINEC</Link>
                </div>
            </div>
            <div className="mb-4">
                <Hotline />
            </div>
        </div>
    )
}

export default Sidebar