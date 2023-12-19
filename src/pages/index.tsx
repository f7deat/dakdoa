import { Cover, Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8 } from "@/components/homes";
import { Carousel } from "antd";
import { useEffect, useRef } from "react";
import { Helmet } from "umi";

export default function HomePage() {

  const carouselRef = useRef<any>();

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) {
        carouselRef.current?.next();
      } else {
        carouselRef.current?.prev();
      }
    })
  }, [])

  return (
    <div>
      <Helmet>
        <title>Shinec Gia Lai - Industrial Cluster</title>
      </Helmet>
      <Carousel dots dotPosition="left" ref={carouselRef} infinite={false} rootClassName="c1" id="cc">
        <Cover />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
      </Carousel>
    </div>
  );
}
