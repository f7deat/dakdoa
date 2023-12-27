import { Cover, Page1, Page2, ProductNService, Page4, Page5, Page6, Page7, Testimonial } from "@/components/homes";
import Partner from "@/components/homes/partner";
import Loader from "@/components/loader";
import Footer from "@/layouts/footer";
import { Carousel } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet } from "umi";

export default function HomePage() {

  const carouselRef = useRef<any>();
  const [height, setHeight] = useState<number>(0);
  const [currentSlide, setCurrentSile] = useState<number>(0);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getProducts = async () => {
    if (products && products.length > 0) {
      return;
    }
    setLoading(true)
    const res = await fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=8&type=2`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wf_token')
      }
    });
    if (res.ok) {
      const articles = await res.json().then(res => res.data);
      setProducts(articles);
    }
    setLoading(false)
  }

  useEffect(() => {
    getProducts();
  }, []);

  const beforeChange = useCallback((current: number, next: number) => {
    if (next === 9) {
      setHeight(147);
    } else {
      setHeight(0)
    }
    setCurrentSile(next);
    console.log('beforeChange', next)
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
        <Cover />
        <Page1 active={currentSlide === 1} />
        <Page2 active={currentSlide === 2} />
        <ProductNService />
        <Page4 products={products} />
        <Page5 />
        <Page6 />
        <Page7 />
        <Testimonial />
        <Partner />
      </Carousel>
      <Loader loading={loading} />
      <Footer height={height} fixed />
    </>
  );
}
