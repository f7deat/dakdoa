import { Cover, Page1, Page2, Page3, Page4 } from "@/components/homes";
import Page5 from "@/components/homes/page5";
import Page6 from "@/components/homes/page6";
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
        <title>Shinec Gia Lai</title>
      </Helmet>
      <Carousel dots dotPosition="left" ref={carouselRef} infinite={false} rootClassName="c1" id="cc">
        <Cover />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
      </Carousel>
    </div>
  );
}
