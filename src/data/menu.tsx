import { FormattedMessage } from "umi"

const MenuData = () => {
    return [
        {
            key: '1',
            label: 'ABOUT',
            children: [
                {
                    key: 'about-shinec',
                    label: <FormattedMessage id='ABOUT_US' />
                },
                {
                    key: 'career',
                    label: <FormattedMessage id='CAREER' />
                },
                {
                    key: 'catalog',
                    label: <FormattedMessage id='CATALOG' />
                }
            ]
        },
        {
            key: '2',
            label: 'PRODUCT',
            url: '/product'
        },
        {
            key: '3',
            label: 'NEWS',
            url: '/news'
        },
        {
            key: '4',
            label: 'CONTACT',
            url: '/contact'
        }
    ]
}

export default MenuData