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
      <img src='https://shinecgialai.com.vn/imgs/bg-cover-1.png' className='absolute right-0 top-40' />
      <Page4 />
      <Internal />
      <Footer />
    </ConfigProvider>
  );
}
