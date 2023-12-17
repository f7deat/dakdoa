import { Helmet, Link, Outlet } from 'umi';
import './index.less';
import { ConfigProvider } from 'antd';
import fav from '../assets/favicon.png';
import { useEffect, useState } from 'react';

export default function Layout() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [position1, setPosition1] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setTimeout(() => {
        setPosition1({ x: e.pageX, y: e.pageY });
      }, 100);
      setTimeout(() => {
        setPosition({ x: e.pageX -14, y: e.pageY -14 });
      }, 200);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" href={fav} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@400;500;600;700;800&family=Poppins:wght@600&display=swap" rel="stylesheet" />
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
            fontSize: 16,
            colorLinkHover: '#0B8936'
          }
        }}
      >
        <Outlet />
        <div
          className="border-2 h-8 w-8 rounded-full border-slate-600 fixed"
          style={{ left: position.x, top: position.y }}
        >
        </div>
          <div className='h-[5px] w-[5px] rounded-full bg-slate-600 fixed' style={{ left: position1.x, top: position1.y }}></div>
      </ConfigProvider>
    </div>
  );
}
