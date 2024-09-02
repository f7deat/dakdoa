import { Cover, Page4, Internal } from "@/components/homes";
import Navbar from "@/components/navbar";
import Footer from "@/layouts/footer";
import { ConfigProvider } from "antd";
import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "umi";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../layouts/index.less';
import Header1 from "@/components/header1";

export default function HomePage() {

  const carouselRef = useRef<any>();

  const scroll = useCallback((y: number) => {
    if (y > 0) {
      return carouselRef?.current?.next();
    } else {
      return carouselRef?.current?.prev();
    }
  }, [carouselRef]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      return
    }
    window.addEventListener("wheel", e => {
      scroll(e.deltaY);
    });
  }, [scroll]);

  const Benefits = (icon: number, text: string) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <img src={`https://shinecgialai.com.vn/imgs/i${icon}.png`} />
        </div>
        <div className="font-bold text-center md:text-xl text-white" style={{
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}>{text}</div>
      </div>
    )
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 19,
            dotWidth: 19
          }
        },
        token: {
          fontSize: 16,
          colorLinkHover: '#0B8936',
          fontFamily: `"Inter", sans-serif`,
          colorBgLayout: '#FFFFFF'
        }
      }}
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W248JMRJ32"></script>
        <title>Shinec Gia Lai - Industrial Clusters</title>
      </Helmet>
      <Navbar />
      <Cover />
      <img src='https://shinecgialai.com.vn/imgs/bg-cover-1.png' className='absolute right-0 top-40 2xl:w-[960px] md:w-[750px]' />
      <Page4 />
      <div className="bg-gradient-to-r from-sky-500 from-10% via-sky-200 via-30% to-green-600 to-90% h-1"></div>
      <div className="bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative"
        style={{
          backgroundImage: `url(https://shinecgialai.com.vn/imgs/bg-cover-2.png)`
        }}>
        <div className="h-full flex items-center justify-center bg-repeat-x" style={{
          backgroundImage: `url(https://shinecgialai.com.vn/imgs/bg-2.png)`,
          backgroundPosition: 'bottom right'
        }}>
          <div className="container mx-auto">
            <div className="py-6 md:py-10">
              <Header1 active>
                Lợi thế đầu tư tại cụm công nghiệp Số 2 Đak Đoa
              </Header1>
              <div className="grid md:grid-cols-6 gap-4 py-10">
                {Benefits(1, "Tối ưu chi phí đầu tư xây dựng")}
                {Benefits(2, "Thủ tục pháp lý đầu tư minh bạch")}
                {Benefits(3, "Tuyển dụng hiệu quả")}
                {Benefits(4, "Mô hình cụm công nghiệp sinh thái - Môi trường đầu tư bền vững")}
                {Benefits(5, "Linh hoạt trong thu hút đầu tư")}
                {Benefits(6, "Đội ngũ nhân viên tận tâm, hỗ trợ và kết nối các dịch vụ")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Internal />
      <div className="bg-gradient-to-r from-sky-500 from-10% via-sky-200 via-30% to-green-600 to-90% h-1"></div>
      <Footer />
    </ConfigProvider>
  );
}
