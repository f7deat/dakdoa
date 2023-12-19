import cover from '../../assets/cover-min.jpg';
import infra from '../../assets/tree-opa.svg';
import NestedCarousel from "../nested-carousel";
import { CardImageOverlays } from "..";
import product1 from '../../assets/products/product1.png';
import { useEffect, useState } from 'react';

const Page4: React.FC = () => {

    const [products, setProducts] = useState<any[]>([]);

    const getProducts = async () => {
        const res = await fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=2`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('wf_token')
            }
        });
        const articles = await res.json().then(res => res.data);
        setProducts(articles);
    }


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="h-body bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="flex h-body flex-col justify-between w-screen" >
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex h-full items-center">
                        <div className="container mx-auto px-10 md:px-0">
                            <div className="text-center text-2xl md:text-[50px] montserrat text-white font-bold mb-4 md:mb-8">
                                Sản phẩm chúng tôi cung cấp
                            </div>
                            <div className="text-white montserrat text-center max-w-[550px] mx-auto mb-8 text-sm md:text-base">
                                As a company, we’ve always believed in walking our own path and doing things a little differently.
                            </div>
                            <div className="max-w-[1240px] mx-auto">
                                <NestedCarousel
                                    slidesPerRow={4}
                                    slidesToScroll={1}
                                    responsive={[
                                        {
                                            breakpoint: 640,
                                            settings: {
                                                slidesPerRow: 1
                                            }
                                        }
                                    ]}
                                    items={products.map(product => (
                                        <CardImageOverlays title={product.name} image={product1} url={`/product/${product.id}`} />
                                    ))}
                                />
                            </div>
                        </div>
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page4