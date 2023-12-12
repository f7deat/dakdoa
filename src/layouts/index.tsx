import { Helmet, Link, Outlet } from 'umi';
import './index.less';
import { ConfigProvider } from 'antd';
import fav from '../assets/favicon.png';

export default function Layout() {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={fav} />
      </Helmet>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul> */}
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 19,
              dotWidth: 19
            }
          },
          token: {
            fontSize: 16
          }
        }}
      >
        <Outlet />
      </ConfigProvider>
    </div>
  );
}
