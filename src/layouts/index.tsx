import { Helmet, Link, Outlet } from 'umi';
import './index.less';
import { ConfigProvider, Layout, Menu } from 'antd';
import fav from '../assets/favicon.png';
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AnimatedCursor from 'animated-cursor'
import ButtonContact from '@/components/button/contact';
import Footer from './footer';

const { Header, Content } = Layout;

export default function Layout1() {

  useEffect(() => {
    const ac = AnimatedCursor({
      color: '#fafafa',
      outerAlpha: 0,
      outerBorderSize: 2,
      hasBlendMode: true,
      outerScale: 2,
      hideNativeCursor: false
    })
    ac.init()
  }, [])

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={fav} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@600&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W248JMRJ32"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W248JMRJ32');
          `}
        </script>
      </Helmet>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 19,
              dotWidth: 19
            },
            Tabs: {
              itemActiveColor: '#0B8936',
              itemSelectedColor: '#0B8936',
              itemHoverColor: '#0B8936',
              inkBarColor: '#0B8936'
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
        <div id="cursor" className='md:opacity-100 opacity-0'>
          <div id="cursor-outer" className='z-50'></div>
          <div id="cursor-inner" className='z-50'></div>
        </div>
        <Layout hasSider>
          <Navbar />
          <Content>
            <Outlet />
          </Content>
          <ButtonContact />
        </Layout>
        <Footer height={100} />
      </ConfigProvider>
    </div>
  );
}
