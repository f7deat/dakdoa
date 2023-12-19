import { useEffect, useState } from 'react';
import cover from '../../assets/cover-min.jpg';
import { Helmet, useParams } from 'umi';

const ProductPage: React.FC = () => {

    const { id } = useParams();
    const [product, setProduct] = useState<{
        name: string;
        id: string;
        description: string;
        modifiedDate: Date;
    }>();

    useEffect(() => {
        fetch(`https://shinecgialai.com.vn/api/catalog/structure/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        }).then(response => response.json().then(data => {
            console.log(data);
        }));
        fetch(`https://shinecgialai.com.vn/api/catalog/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        }).then(response => response.json().then(data => {
            setProduct(data);
        }));
    }, [])

    return (
        <>
        <Helmet>
            <title>{product?.name || ''} - Shinec Gia Lai</title>
        </Helmet>
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="flex h-body flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage