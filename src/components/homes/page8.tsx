import Navbar from "../navbar";
import cover from '../../assets/cover-min.jpg';
import NestedCarousel from "../nested-carousel";
import infra from '../../assets/tree-opa.svg';

const Page8: React.FC = () => {

    const Item = () => (
        <div className="p-4 md:p-[40px] rounded-lg" style={{
            background: 'linear-gradient(109deg, rgba(131, 255, 173, 0.30) 0%, rgba(91, 208, 131, 0.28) 73.74%, rgba(54, 164, 92, 0.00) 137.77%)'
        }}>
            <div className="md:flex gap-4 montserrat text-white">
                <div className="md:w-[387px] bg-slate-200 rounded-lg">

                </div>
                <div className="flex-1 px-8 md:border-l">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width={66} height={57} viewBox="0 0 66 57" fill="none">
                            <path opacity="0.4" d="M66 11.7234C61.9259 13.2057 58.8025 15.4965 56.6296 18.5957C54.5926 21.695 53.5741 25.4007 53.5741 29.7128L66 29.7128L66 57L40.537 57L40.537 29.7128C40.537 25.9397 41.2161 22.4362 42.5741 19.2021C43.9321 15.9681 45.7654 13.1383 48.0741 10.7128C50.3827 8.15249 53.0309 5.99646 56.0185 4.24469C59.142 2.49291 62.4691 1.07802 66 5.7699e-06L66 11.7234ZM25.463 11.7234C21.3889 13.2057 18.2654 15.4965 16.0926 18.5957C14.0556 21.695 13.037 25.4007 13.037 29.7128L25.463 29.7128L25.463 57L-4.9831e-06 57L-2.59757e-06 29.7128C-2.26772e-06 25.9397 0.679011 22.4362 2.03704 19.2021C3.39506 15.9681 5.22839 13.1383 7.53704 10.7128C9.84568 8.15249 12.4938 5.99646 15.4815 4.24468C18.6049 2.49291 21.9321 1.07802 25.463 2.22604e-06L25.463 11.7234Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-[30px] font-bold mb-4">Ông. Nguyễn Mộng Lân</div>
                        <div className="italic mb-4 text-sm md:text-lg">
                            KCN Shinec Gia Lai đã dành cho chúng tôi một lô đất nằm cạnh hai cầu cảng container và cảng hàng lỏng. Hàng tháng chúng tôi phải nhập khoảng 2000 tấn chất lỏng về và việc nằm ngay tại cầu cảng giảm chi phí vận hành cho chúng tôi rất nhiều. Từ vị trí này kết nối với hệ thống đường cao tốc trong thành phố, tỏa đi khắp khu vực phía bắc cũng vô cùng thuận tiện. Thực sự chúng tôi rất tâm đắc với địa điểm đầu tư này.
                        </div>
                        <div className="text-lg font-bold">
                        Tổng Giám đốc Cty TNHH Vico
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="h-screen bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
            style={{
                backgroundImage: `url(${cover})`
            }}>
            <div className="h-screen flex flex-col justify-between w-screen" >
                <Navbar />
                <div className="relative h-full" style={{
                    background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                }}>
                    <div className="flex h-full items-center">
                        <div className="container mx-auto max-w-[1013px] px-10 md:px-0">
                            <div className="text-center text-lg md:text-[50px] montserrat text-white font-bold mb-4 nd:mb-8">
                                Khách hàng nói gì về chúng tôi
                            </div>
                            <NestedCarousel items={[
                                Item()
                            ]}>
                            </NestedCarousel>
                        </div>
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page8