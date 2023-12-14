import Navbar from "../navbar"
import cover from '../../assets/cover-min.jpg';
import infra from '../../assets/tree-opa.svg';
import NestedCarousel from "../nested-carousel";
import { CardImageOverlays } from "..";
import product1 from '../../assets/products/product1.png';

const Page4: React.FC = () => {
    return (
        <div className="h-screen bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-screen flex flex-col justify-between w-screen" >
                <Navbar />
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex  h-full items-center">
                        <div className="container mx-auto">
                            <div className="text-center text-[50px] montserrat text-white font-bold">
                                Sản phẩm chúng tôi cung cấp
                            </div>
                            <div className="text-white montserrat text-center max-w-[550px] mx-auto mb-8">
                                As a company, we’ve always believed in walking our own path and doing things a little differently.
                            </div>
                            <NestedCarousel
                                items={[
                                    <div key={1} className="flex justify-center">
                                        <CardImageOverlays image={product1} />
                                        <CardImageOverlays image={product1} />
                                        <CardImageOverlays image={product1} />
                                        <CardImageOverlays image={product1} />
                                    </div>
                                ]}
                            />
                        </div>
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page4