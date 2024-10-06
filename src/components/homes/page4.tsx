import infra from '../../assets/tree-opa.svg';

const Page4: React.FC = () => {

    return (
        <div className="bg-white">
            <div className="flex h-full flex-col justify-between w-full" >
                <div className="relative h-full">
                    <div className="h-full flex items-center justify-center" style={{
                        backgroundImage: `url(${infra})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right'
                    }}>
                        <div className="container mx-auto px-2 md:px-10 md:px-0 md:py-20 py-12">
                            <div className='md:flex gap-4'>
                                <div className='md:w-2/5 flex flex-col items-center justify-center gap-4 mb-6'>
                                    <div className='text-2xl mb-4 text-green-800 font-bold 2xl:text-3xl' data-aos="fade-up">Cơ cấu sử dụng đất</div>
                                    <div className='flex md:flex-col'>
                                        <div className='flex justify-center mb-4 w-1/2 md:w-full'>
                                            <img src='https://shinecgialai.com.vn/imgs/pie-chart.png' alt='chart' data-aos="zoom-in" />
                                        </div>
                                        <div className='grid md:grid-cols-2 md:text-base text-xs flex-1'>
                                            <div className='py-1 flex items-center gap-1 md:gap-2' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                                <div>Đất kho xưởng: <span className='text-blue-500 font-bold'>50,96 Ha</span></div>
                                            </div>
                                            <div className='py-1 flex items-center gap-1 md:gap-2' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-orange-500 rounded-full'></div>
                                                <div>Đất giao thông nội bộ: <span className='text-blue-500 font-bold'>8,78 Ha</span></div>

                                            </div>
                                            <div className='py-1 flex items-center gap-1 md:gap-2' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-sky-500 rounded-full'></div>
                                                <div>Đất cây xanh:</div>
                                                <span className='text-blue-500 font-bold'>9,74 Ha</span>
                                            </div>
                                            <div className='py-1 flex items-center gap-1 md:gap-2' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-green-500 rounded-full'></div>
                                                <div>Đất kỹ thuật:</div>
                                                <span className='text-blue-500 font-bold'>1,67 Ha</span>
                                            </div>
                                            <div className='py-1 flex items-center gap-1 md:gap-2' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-green-700 rounded-full'></div>
                                                <div>Đất dịch vụ:</div>
                                                <span className='text-blue-500 font-bold'>3,65 Ha</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='md:w-3/5 text-center'>
                                    <div className='text-2xl mb-2 text-green-800 font-bold 2xl:text-3xl' data-aos="fade-up">Cụm công nghiệp số 2 Đak Đoa</div>
                                    <div className='text-gray-500 mb-4 2xl:mb-6' data-aos="fade-up">
                                        Vị trí: Xã Tân Bình, huyên Đak Đoa, tỉnh Gia Lai
                                    </div>
                                    <div className='mb-4 md:px-10 2xl:px-20 2xl:mb-10'>
                                        <div className='py-1 flex items-center gap-1 md:gap-2 md:text-2xl mb-2' data-aos="fade-up">
                                            <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <div>Tổng diện tích: <span className='font-bold bg-blue-500 text-white px-4 py-1 rounded-full'>50,96 Ha</span></div>
                                        </div>
                                        <div className='py-1 flex items-center gap-1 md:gap-2 md:text-2xl mb-2' data-aos="fade-up">
                                            <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <div>Thời hạn: <span className='font-bold bg-blue-500 text-white px-4 py-1 rounded-full'>2025-2075</span></div>
                                        </div>
                                        <div className='py-1 flex items-center gap-1 md:gap-2 md:text-2xl mb-2' data-aos="fade-up">
                                            <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                            <div>Dự kiến giao đất: <span className='font-bold bg-blue-500 text-white px-4 py-1 rounded-full'>Quý IV/2025</span></div>
                                        </div>
                                    </div>
                                    <div className='text-2xl mb-2 text-green-800 font-bold 2xl:text-3xl md:mb-8' data-aos="fade-up">Ngành nghề thu hút đầu tư</div>
                                    <div className='gap-4'>
                                        <div className='mb-4 md:px-10 2xl:px-20 text-gray-600'>
                                            <div className='py-1 flex items-center gap-1 md:gap-2 md:text-lg mb-1' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                                Sản xuất chế biến các sản phẩm nông - lâm sản
                                            </div>
                                            <div className='py-1 flex items-center gap-1 md:gap-2 md:text-lg mb-1' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                                Công nghiệp chế biến thực phẩm, công nghiệp tiêu dùng, may mặc
                                            </div>
                                            <div className='py-1 flex items-center gap-1 md:gap-2 md:text-lg mb-1' data-aos="fade-up">
                                                <div className='md:w-4 md:h-4 w-2 h-2 bg-blue-500 rounded-full'></div>
                                                Công nghiệp cơ khí, chế tạo, điện tử; Các ngành công nghiệp phụ trợ,...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4