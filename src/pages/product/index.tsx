import { useEffect, useState } from 'react';
import cover from '../../assets/cover-min.jpg';
import { Helmet, useParams } from 'umi';
import Footer from '@/layouts/footer';

const ProductPage: React.FC = () => {

    const { id } = useParams();
    const [height, setHeight] = useState<number>(0);
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
        setTimeout(() => {
            setHeight(147)
        }, 100);
    }, [])

    return (
        <>
            <Helmet>
                <title>{product?.name || ''} - Shinec Gia Lai</title>
            </Helmet>
            <div className="h-body relative">
                <div className="flex h-body flex-col justify-between" >
                </div>
            </div>
            <Footer height={height} />
        </>
    )
}

export default ProductPage