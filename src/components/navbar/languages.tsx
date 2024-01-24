import { Dropdown, MenuProps } from "antd";
import viFlag from '../../assets/flags/vi.svg';
import enFlag from '../../assets/flags/en.svg';
import cnFlag from '../../assets/flags/cn.svg';
import krFlag from '../../assets/flags/kr.svg';
import jpFlag from '../../assets/flags/jp.svg';
import { setLocale, useIntl } from "umi";
import { CaretDownOutlined, DownOutlined } from "@ant-design/icons";

type LanguagesProps = {
    white?: boolean;
}

const Languages: React.FC<LanguagesProps> = (props) => {

    const intl = useIntl()

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

    const flag = () => {
        const locale = intl.locale;
        if (locale === 'en-US') {
            return enFlag;
        }
        if (locale === 'zh-CN') {
            return cnFlag;
        }
        if (locale === 'ja-JP') {
            return jpFlag;
        }
        if (locale === 'ko-KR') {
            return krFlag;
        }
        return viFlag;
    }

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

    const label = () => {
        const locale = intl.locale;
        if (locale === 'en-US') {
            return 'English';
        }
        if (locale === 'zh-CN') {
            return '简体中文';
        }
        if (locale === 'ja-JP') {
            return '日本語';
        }
        if (locale === 'ko-KR') {
            return '한국어';
        }
        return 'Tiếng Việt';
    }

    return (
        <Dropdown menu={{ items, onClick: menuClick }} arrow>
            <button className={'border rounded-full px-2 md:px-4 py-1 md:py-2 flex items-center gap-1 font-semibold text-sm' + (props.white ? ' text-white' : ' text-slate-700')}>
                <img src={flag()} alt='FLAG' />
                <span className="hidden md:block">{label()}</span>
                <CaretDownOutlined />
            </button>
        </Dropdown>
    )
}

export default Languages