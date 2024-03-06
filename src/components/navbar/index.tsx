import logoWhite from '../../assets/logo/logo-green.svg';
import { FormattedMessage, Link, history } from 'umi';
import Languages from './languages';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ConfigProvider, Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import './index.css';
import MenuData from '@/data/menu';

const { Sider } = Layout;

const Navbar: React.FC = () => {

    const [collapsed, setCollaped] = useState<boolean>(true);

    const onClick: MenuProps['onClick'] = (e) => {
        setCollaped(true);
        if (e.key === 'about-shinec') {
            history.push(`/page/gioi-thieu`);
            return;
        }
        if (e.key === 'thue-dat-cong-nghiep') {
            history.push(`/product/1f025462-0ad8-4ffb-31df-08dc044e3bfc`);
            return;
        }
        if (e.key === 'thue-xuong-kho-xay-san') {
            history.push(`/product/65773527-8ba5-485e-f318-08dc044f3d01`);
            return;
        }
        if (e.key === 'cho-thue-dat-thuong-mai') {
            history.push(`/product/ae3486a8-194d-4a37-d5d6-08dc0451c999`);
            return;
        }
        if (e.key === 'cho-thue-van-phong') {
            history.push(`/product/5dd86918-9719-4ca7-0359-08dc045188ed`);
            return;
        }
        history.push(e.key);
    };

    return (
        <ConfigProvider theme={{
            components: {
                Menu: {
                    horizontalItemHoverColor: '#15803D',
                    horizontalItemSelectedColor: '#15803D',
                    itemSelectedColor: '#15803D',
                    activeBarBorderWidth: 0
                }
            }
        }}>
            <div className='bg-slate-900 opacity-75 fixed top-0 left-0 right-0 h-screen z-10' hidden={collapsed}></div>
            <nav className="bg-white shadow fixed top-0 z-10 right-0 left-0">
                <div className='container mx-auto py-3 px-2 md:px-0'>
                    <div className='flex justify-between items-center'>
                        <div className='md:hidden'>
                            <button className='h-8 w-10 text-xl text-slate-600' onClick={() => setCollaped(!collapsed)}>
                                {
                                    collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
                                }
                            </button>
                        </div>
                        <Link to={`/`}>
                            <img src={logoWhite} alt='LOGO' className='w-28 md:w-auto' />
                        </Link>
                        <div className='flex items-center md:min-w-[1000px]'>
                            <div className='hidden md:block md:min-w-[1000px]'>
                                <Menu
                                    onClick={onClick}
                                    mode="horizontal"
                                    items={MenuData().map((menu, i) => {
                                        if (menu.key === '/vr360') {
                                            return (
                                                {
                                                    key: menu.key,
                                                    label: (
                                                        <Link to="/vr360">
                                                            <div className="loader text-red-600 font-semibold">
                                                                <FormattedMessage id="VR360" />
                                                                <div className="tile"></div>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            )
                                        }
                                        return (
                                            {
                                                key: menu.key,
                                                label: menu.url ? (
                                                    <Link to={menu.url} className='nav-link font-semibold'>
                                                        <FormattedMessage id={menu.label} />
                                                    </Link>
                                                ) : (<FormattedMessage id={menu.label} />),
                                                children: menu.children,
                                                icon: menu.icon
                                            }
                                        )
                                    })}
                                />
                            </div>
                            <Languages />
                        </div>
                    </div>
                </div>
                <Sider
                    theme="light"
                    className='border-t'
                    collapsedWidth={0}
                    collapsed={collapsed}
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', right: 0, top: 60, bottom: 0 }}
                >
                    <Menu
                        style={{ width: 256 }}
                        mode="inline"
                        onClick={onClick}
                        items={MenuData().map((menu, i) => (
                            {
                                key: menu.key,
                                label: menu.url ? (
                                    <Link to={menu.url} className='nav-link font-medium'>
                                        <FormattedMessage id={menu.label} />
                                    </Link>
                                ) : (<FormattedMessage id={menu.label} />),
                            }
                        ))}
                    />
                </Sider>
            </nav>
        </ConfigProvider>
    )
}

export default Navbar