import logoWhite from '../../assets/logo/logo-green.svg';
import { FormattedMessage, Link, history, setLocale, useIntl, useLocation } from 'umi';
import { GlobalOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ScheduleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Card, ConfigProvider, Dropdown, Layout, Menu, MenuProps, Popover, Select, message } from 'antd';
import { useEffect, useState } from 'react';
import './index.css';
import MenuData from '@/data/menu';

const { Sider } = Layout;

const Navbar: React.FC = () => {

    const [collapsed, setCollaped] = useState<boolean>(true);
    const intl = useIntl();
    const [current, setCurrent] = useState('/about-shinec');
    const myLocation = useLocation();

    useEffect(() => {
        if (myLocation.pathname.includes('product')) {
            setCurrent('/product');
        }
    }, [myLocation]);

    const onClick: MenuProps['onClick'] = (e) => {
        setCollaped(true);
        setCurrent(e.key);
        if (e.key === '/about-shinec') {
            history.push(`/page/gioi-thieu`);
            return;
        }
        if (e.key === '/news') {
            history.push(`/news`);
            return;
        }
        if (e.key === '/career') {
            history.push(`/career`);
            return;
        }
        if (e.key === '/contact') {
            history.push(`/contact`);
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
        if (e.key === 'thue-dung-xuong-kho-theo-yeu-cau') {
            history.push(`/product/24994986-a68c-4463-0358-08dc045188ed`);
            return;
        }
        history.push(`/page/${e.key}`);
        return;
    };

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


    const items: MenuProps['items'] = [
        {
            key: 'vi',
            label: 'Tiếng Việt',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            ),
            disabled: intl.locale === 'vi-VN'
        },
        {
            key: 'en',
            label: 'English',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            ),
            disabled: intl.locale === 'en-US'
        },
        {
            key: 'zh',
            label: '简体中文',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            ),
            disabled: intl.locale === 'zh-CN'
        },
        {
            key: 'ja',
            label: '日本語',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            ),
            disabled: intl.locale === 'ja-JP'
        },
        {
            key: 'ko',
            label: '한국어',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            ),
            disabled: intl.locale === 'ko-KR'
        },
    ];

    const menuClick = (info: any) => {
        if (info.key === 'vi') {
            setLocale('vi-VN');
        }
        if (info.key === 'en') {
            setLocale('en-US');
        }
        if (info.key === 'zh') {
            setLocale('zh-CN');
        }
        if (info.key === 'ja') {
            setLocale('ja-JP');
        }
        if (info.key === 'ko') {
            setLocale('ko-KR');
        }
    }

    const [options] = useState<any[]>(MenuData().filter(x => x.children).map(x => ({
        label: x.label,
        vaue: x.key,
        options: x.children?.map(c => ({
            value: c.key,
            label: c.label
        })) || []
    })))

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
            <div className='px-4 text-xs md:text-sm fixed top-0 left-0 right-0 border-b z-20 bg-slate-500'>
                <div className='flex justify-end gap-4 font-semibold text-white'>
                    <a href='https://shinecgialai.com.vn'>
                        <div className='py-1 hover:text-green-100 cursor-pointer'><SearchOutlined /> Tìm kiếm</div>
                    </a>
                    <Dropdown menu={{ items, onClick: menuClick }} arrow className='text-xs md:text-sm'>
                        <div className='py-1 hover:text-green-100 cursor-pointer'><GlobalOutlined /> Ngôn ngữ</div>
                    </Dropdown>
                    <Link to="/career"><div className='py-1 hover:text-green-100 cursor-pointer'><ScheduleOutlined /> Việc làm</div></Link>
                </div>
            </div>
            <div className='bg-slate-900 opacity-75 fixed top-0 left-0 right-0 h-screen z-10' hidden={collapsed}></div>
            <nav className="bg-white shadow-lg fixed top-5 md:top-7 z-10 right-0 left-0">
                <div className='container mx-auto py-3 px-2 md:px-0'>
                    <div className='flex justify-between items-center'>
                        <div className='md:hidden flex-1'>
                            <button className='h-8 w-10 text-xl text-slate-600' onClick={() => setCollaped(!collapsed)}>
                                {
                                    collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
                                }
                            </button>
                        </div>
                        <div className='md:w-48 block'>
                            <Link to={`/`}>
                                <img src="https://shinecgialai.com.vn/imgs/logo.png" alt='LOGO' className='w-28 md:w-48' />
                            </Link>
                        </div>
                        <div className='flex-1 items-center'>
                            <div className='hidden md:block text-right'>
                                <Menu
                                    selectedKeys={[current]}
                                    className='justify-end w-full flex-1'
                                    onClick={onClick}
                                    mode="horizontal"
                                    items={MenuData().map((menu, i) => {
                                        return (
                                            {
                                                key: menu.key,
                                                label: menu.url ? (
                                                    <Link to={menu.url} className='nav-link'>
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
                        </div>
                    </div>
                </div>
                <Sider
                    width={244}
                    theme="light"
                    className='border-t bg-white'
                    collapsedWidth={0}
                    collapsed={collapsed}
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', right: 0, top: 79, bottom: 0 }}
                >
                    <Menu
                        selectedKeys={[current]}
                        mode="inline"
                        onClick={onClick}
                        items={MenuData().map((menu, i) => (
                            {
                                key: menu.key,
                                label: menu.url ? (
                                    <Link to={menu.url} className='font-medium'>
                                        <FormattedMessage id={menu.label} />
                                    </Link>
                                ) : (<FormattedMessage id={menu.label} />),
                                children: menu.children,
                                icon: menu.icon
                            }
                        ))}
                    />
                </Sider>
            </nav>
        </ConfigProvider>
    )
}

export default Navbar