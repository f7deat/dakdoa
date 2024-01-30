import { Cover, Page1, Page2, News, Page4, Internal, External, Different, Testimonial } from "@/components/homes";
import Partner from "@/components/homes/partner";
import Loader from "@/components/loader";
import Footer from "@/layouts/footer";
import { apiCatalogList, queryGetComponents } from "@/services/catalog";
import { simpleLocale } from "@/ultis";
import { Carousel } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet, getLocale, useIntl } from "umi";

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
    if (next === 9) {
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
    window.addEventListener("wheel", e => {
      scroll(e.deltaY);
    });
  }, [scroll]);

  return (
    <>
      <Helmet>
        <title>Shinec Gia Lai - Industrial Clusters</title>
      </Helmet>
      <Carousel dots dotPosition="left" ref={carouselRef} infinite={false} beforeChange={beforeChange}>
        <Cover active={currentSlide === 0} />
        <Page1 active={currentSlide === 1} />
        <Page2 active={currentSlide === 2} />
        <News active={currentSlide === 3} />
        <Page4 products={products} active={currentSlide === 4} />
        <Internal active={currentSlide === 5} />
        <External active={currentSlide === 6} />
        <Different active={currentSlide === 7} />
        <Testimonial active={currentSlide === 8} />
        <Partner active={currentSlide === 9} brands={brands} />
      </Carousel>
      <Loader loading={loading} />
      <Footer height={height} fixed />
    </>
  );
}
