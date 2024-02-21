import { Cover, Page1, Page2, News, Page4, Internal, External, Different, Testimonial } from "@/components/homes";
import Partner from "@/components/homes/partner";
import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import Footer from "@/layouts/footer";
import { apiCatalogList, queryGetComponents } from "@/services/catalog";
import { Carousel, ConfigProvider } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet, getLocale } from "umi";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../layouts/index.less';

export default function HomePage() {

  const carouselRef = useRef<any>();
  const [height, setHeight] = useState<number>(0);
  const [currentSlide, setCurrentSile] = useState<number>(0);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [components, setComponents] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);

  const getProducts = async () => {
    if (products && products.length > 0) {
      return;
    }
    setLoading(true)
    apiCatalogList({
      current: 1,
      pageSize: 8,
      type: 2,
      locale: getLocale()
    }).then(response => {
      if (response.data.data) {
        setProducts(response.data.data);
      }
      setLoading(false)
    })
    queryGetComponents('/index', getLocale()).then(response => {
      setComponents(response.data);
      const sponsor = response.data.find((x: any) => x.normalizedName === 'Sponsor');
      if (sponsor) {
        const component1 = JSON.parse(sponsor.arguments)
        setBrands(component1.brands);
      }
      console.log(response.data);
    })
  }

  useEffect(() => {
    getProducts();
  }, []);

  const beforeChange = useCallback((current: number, next: number) => {
    if (next === 7) {
      setHeight(100);
    } else {
      setHeight(0)
    }
    setCurrentSile(next);
  }, []);

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
          fontFamily: `'Montserrat', sans-serif`,
          colorBgLayout: '#FFFFFF'
        }
      }}
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W248JMRJ32"></script>
        <title>Shinec Gia Lai - Industrial Clusters</title>
      </Helmet>
      <Navbar />
      <Carousel dots dotPosition="left" ref={carouselRef} infinite={false} beforeChange={beforeChange}>
        <Cover active={currentSlide === 0} />
        <News active={currentSlide === 1} />
        <Page4 products={products} active={currentSlide === 2} />
        <Internal active={currentSlide === 3} />
        <External active={currentSlide === 4} />
        <Different active={currentSlide === 5} />
        <Testimonial active={currentSlide === 6} />
        <Partner active={currentSlide === 7} brands={brands} />
      </Carousel>
      <Loader loading={loading} />
      <Footer height={height} fixed />
    </ConfigProvider>
  );
}
