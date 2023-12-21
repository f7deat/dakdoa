import { Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8 } from "@/components/homes";
import Partner from "@/components/homes/partner";
import Footer from "@/layouts/footer";
import { Carousel } from "antd";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "umi";

export default function HomePage() {

  const carouselRef = useRef<any>();
  const [height, setHeight] = useState<number>(0);
  const [currentSlide, setCurrentSile] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) {
        carouselRef.current?.next();
      } else {
        carouselRef.current?.prev();
      }
    })
  }, []);

  const afterChange = (current: number) => {
    if (current === 9) {
      setHeight(147);
    } else {
      setHeight(0)
    }
    setCurrentSile(current);
  }

  return (
    <>
      <Helmet>
        <title>Shinec Gia Lai - Industrial Cluster</title>
      </Helmet>
      <Carousel dots dotPosition="left" ref={carouselRef} infinite={false} afterChange={afterChange}>
        <Cover />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 currentSection={currentSlide} />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Partner />
      </Carousel>
      <Footer height={height}/>
    </>
  );
}
