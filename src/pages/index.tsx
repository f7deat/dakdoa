import { Cover, Page4, Internal } from "@/components/homes";
import Navbar from "@/components/navbar";
import Footer from "@/layouts/footer";
import { ConfigProvider, Tooltip } from "antd";
import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "umi";
import '../layouts/index.less';
import Header1 from "@/components/header1";
import 'aos/dist/aos.css';
// @ts-ignore
import AOS from 'aos';

export default function HomePage() {

  useEffect(() => {
    if (AOS) {
      AOS.init({
        duration: 1000
      });
    }
  }, [AOS]);

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

  const Benefits = (icon: number, text: string, delay: number) => {
    return (
      <div className="flex flex-col gap-4"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="flex justify-center">
          <Tooltip title={text}>
            <img src={`https://shinecgialai.com.vn/imgs/i${icon}.png`} />
          </Tooltip>
        </div>
        <div className="font-bold text-center md:text-xl text-white line-clamp-1 md:line-clamp-2" style={{
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
      <img src='https://shinecgialai.com.vn/imgs/bg-cover-1.png' className='absolute top-60 md:top-40 2xl:w-[960px] md:w-[750px] w-80 right-0' data-aos="fade-left" data-aos-delay="200" />
      <Page4 />
      <div className="bg-gradient-to-r from-sky-500 from-10% via-sky-200 via-30% to-green-600 to-90% h-1"></div>
      <div className="md:flex py-4 items-center">
        <div className="md:w-1/3 px-4">
          <div className="mb-2 text-lg md:text-3xl font-semibold text-green-700" data-aos="fade-up">
            TỔNG QUAN TỈNH GIA LAI
          </div>
          <div className="text-gray-400 mb-4 text-sm" data-aos="fade-up">
            <div className="mb-2">
              Gia Lai là tỉnh có diện tích lớn thứ hai Việt Nam và là một tỉnh cao nguyên nằm ở khu vực Bắc Tây Nguyên (Gia Lai đứng thứ nhất về diện tích và đứng thứ 2 về dân số khu vực Tây Nguyên).
            </div>
            <div>
              Với nhiều lợi thế trong phát triển sản xuất nông nghiệp, xuất khẩu nông sản, Gia Lai bắt nhịp xu hướng quốc tế thúc đẩy phát triển công nghiệp và dịch vụ, tạo nên sức bật và đột phá mới trong tương lại, đem đến nhiều cơ hội tốt cho các nhà đầu tư.
            </div>
          </div>
          <img src="https://shinecgialai.com.vn/imgs/info-map.png" data-aos="fade-up" />
        </div>
        <div className="md:w-2/3">
          <img src="https://shinecgialai.com.vn/imgs/map.png" data-aos="fade-up" />
        </div>
      </div>
      <div className="bg-cover bg-no-repeat bg-fixed bg-center bg-green-800 relative" id="benefits"
        style={{
          backgroundImage: `url(https://shinecgialai.com.vn/imgs/bg-cover-2.png)`
        }}>
        <div className="h-full flex items-center justify-center bg-repeat-x" style={{
          backgroundImage: `url(https://shinecgialai.com.vn/imgs/bg-2.png)`,
          backgroundPosition: 'bottom right'
        }}>
          <div className="container mx-auto px-2 md:px-0">
            <div className="py-6 md:py-10">
              <Header1 active>
                Lợi thế đầu tư tại cụm công nghiệp Số 2 Đak Đoa
              </Header1>
              <div className="grid md:grid-cols-6 grid-cols-3 gap-4 py-6 md:py-10">
                {Benefits(1, "Tối ưu chi phí đầu tư xây dựng", 500)}
                {Benefits(2, "Thủ tục pháp lý đầu tư minh bạch", 600)}
                {Benefits(3, "Tuyển dụng hiệu quả", 700)}
                {Benefits(4, "Mô hình cụm công nghiệp sinh thái - Môi trường đầu tư bền vững", 800)}
                {Benefits(5, "Linh hoạt trong thu hút đầu tư", 900)}
                {Benefits(6, "Đội ngũ nhân viên tận tâm, hỗ trợ và kết nối các dịch vụ", 1000)}
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
