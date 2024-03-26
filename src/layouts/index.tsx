import { Helmet, Link, Outlet } from 'umi';
import './index.less';
import { ConfigProvider, Layout, Menu } from 'antd';
import fav from '../assets/favicon.png';
import Navbar from '@/components/navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './footer';
import PhoneButton2 from '@/components/button/phone2';

const { Header, Content } = Layout;

export default function Layout1() {

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={fav} />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@600&display=swap" rel="stylesheet" /> */}
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
            fontFamily: `'Montserrat', sans-serif`,
            colorBgLayout: '#FFFFFF',
            colorPrimary: '#15803d',
            colorLink: '#15803d'
          }
        }}
      >
        <Layout hasSider>
          <Navbar />
          <Content>
            <Outlet />
          </Content>
        </Layout>
        <Footer />
      </ConfigProvider>
    </div>
  );
}
