import { Helmet, Outlet } from 'umi';
import './index.less';
import './style.less';
import { ConfigProvider, Layout } from 'antd';
import fav from '../assets/favicon.png';
import Navbar from '@/components/navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './footer';

const { Header, Content } = Layout;

export default function Layout1() {

  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={fav} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

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
            fontFamily: `"Inter", sans-serif`,
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
