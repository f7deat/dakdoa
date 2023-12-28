import { Cover, Page1, Page2, News, Page4, Page5, External, Different, Testimonial } from "@/components/homes";
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
  const [news, setNews] = useState<any[]>([]);
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
      const response = await res.json().then(res => res.data);
      setProducts(response);
    }
    setLoading(false)
  }

  const getNews = async () => {
    if (products && products.length > 0) {
      return;
    }
    const res = await fetch(`https://shinecgialai.com.vn/api/catalog/list?current=1&pageSize=4&type=1`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('wf_token')
      }
    });
    if (res.ok) {
      const response = await res.json().then(res => res.data);
      setNews(response);
    }
  }

  useEffect(() => {
    getProducts();
    getNews();
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
        <Cover active={currentSlide === 0} />
        <Page1 active={currentSlide === 1} />
        <Page2 active={currentSlide === 2} />
        <News news={news} active={currentSlide === 3} />
        <Page4 products={products} active={currentSlide === 4} />
        <Page5 active={currentSlide === 5} />
        <External active={currentSlide === 6} />
        <Different active={currentSlide === 7} />
        <Testimonial active={currentSlide === 8} />
        <Partner active={currentSlide === 9} />
      </Carousel>
      <Loader loading={loading} />
      <Footer height={height} fixed />
    </>
  );
}
