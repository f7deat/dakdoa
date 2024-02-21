import logoWhite from '../../assets/logo/logo-green.svg';
import { FormattedMessage, Link, history } from 'umi';
import Languages from './languages';
import { MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { MenuData } from '@/data';

const { Sider } = Layout;

const Navbar: React.FC = () => {

    const [collapsed, setCollaped] = useState<boolean>(true);
    const [current, setCurrent] = useState('mail');
    
    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
      if (e.key === 'about-shinec') {
        history.push(`/page/gioi-thieu`);
      }
    };

    return (
        <div>
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
                        <div className='flex items-center'>
                            <Menu
                            onClick={onClick}
                                mode="horizontal"
                                items={MenuData.map((menu, i) => (
                                    {
                                        key: menu.key,
                                        label: (
                                            <Link to={menu.url} className='nav-link'>
                                                <FormattedMessage id={menu.label} />
                                            </Link>
                                        ),
                                        children: menu.children
                                    }
                                ))}
                            />
                            <div className='border-r h-8 mx-8 hidden md:block pl-8'></div>
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
                        items={MenuData.map((menu, i) => (
                            {
                                key: menu.key,
                                label: (
                                    <Link to={menu.url} className='nav-link'>
                                        <FormattedMessage id={menu.label} />
                                    </Link>
                                )
                            }
                        ))}
                    />
                </Sider>
            </nav>
        </div>
    )
}

export default Navbar