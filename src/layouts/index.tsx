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
import { MenuData } from '@/data';
import logoWhite from '../assets/logo/logo-green.svg';

const { Header, Content, Footer } = Layout;

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
        <script>
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function() {
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/658adc5007843602b805a423/1hij6p6l7';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </script>
      </Helmet>
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
            fontFamily: `'Montserrat', sans-serif`
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

        </Layout>
      </ConfigProvider>
    </div>
  );
}
