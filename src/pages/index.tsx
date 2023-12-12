import { Cover, Page1, Page2, Page3, Page4 } from "@/components/homes";
import { Carousel } from "antd";
import { Helmet } from "umi";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Shinec Gia Lai</title>
      </Helmet>
      <Carousel dots dotPosition="left">
        <Cover />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Carousel>
    </div>
  );
}
