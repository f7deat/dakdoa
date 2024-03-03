import Brands from "@/components/brands";
import { apiCatalogList, queryGetComponents } from "@/services/catalog";
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Table, TableColumnType, Tabs, Tooltip } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet, Link, useIntl } from "umi";

const CareerPage: React.FC = () => {
    const [brands, setBrands] = useState<any[]>([]);
    const intl = useIntl();

    const columns: TableColumnType<any>[] = [
        {
            title: '#',
            render: (value, record, index) => index + 1,
            width: 50
        },
        {
            title: 'Vị trí tuyển dụng',
            dataIndex: 'name',
            render: (value, record) => (
                <Link to={`/page/${record.normalizedName}`} className="font-medium">{value}</Link>
            )
        },
        {
            title: 'Ngày đăng tải',
            render: (value, record) => moment(record.modifiedDate).format('DD/MM/YYYY hh:mm:ss'),
            width: 200
        },
        {
            title: 'Hạn ứng tuyển',
            render: (value, record) => moment(record.modifiedDate).add(1, 'month').format('DD/MM/YYYY hh:mm:ss'),
            width: 200
        },
        {
            title: 'Tác vụ',
            render: (value) => (
                <div className="flex justify-center">
                    <a href="tel:02696333456">
                        <Tooltip title={<FormattedMessage id='CONTACT' />}>
                            <Button size="small" type="link" icon={<PhoneOutlined />}></Button>
                        </Tooltip>
                    </a>
                </div>
            ),
            width: 100
        }
    ]

    const [jobShinecs, setJobShinecs] = useState<API.Catalog[]>([]);
    const [jobNonShinecs, setJobNonShinecs] = useState<API.Catalog[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        apiCatalogList({
            parentId: '44b549a9-abf2-4f91-45a0-08dc3514ae40'
        }).then(response => {
            setJobShinecs(response.data.data);
            setLoading(false);
        });
        apiCatalogList({
            parentId: '34807610-93e0-45c6-3a07-08dc3521274a'
        }).then(response => {
            setJobNonShinecs(response.data.data);
        });

        queryGetComponents('/index', intl.locale).then(response => {
            const sponsor = response.data.find((x: any) => x.normalizedName === 'Sponsor');
            if (sponsor) {
                const component1 = JSON.parse(sponsor.arguments)
                setBrands(component1.brands);
            }
            setLoading(false)
        })
    }, []);

    return (
        <>
            <Helmet>
                <title>Tuyển dụng</title>
            </Helmet>
            <main className="container mx-auto py-4 md:py-8 2xl:py-10">
                <h1 className="text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 text-green-700 mb-0 md:mb-4">
                    <FormattedMessage id='CAREER' />
                </h1>
                <Tabs
                    items={[
                        {
                            key: 'shinec',
                            label: 'Shinec Gia Lai tuyển dụng',
                            children: <Table columns={columns} dataSource={jobShinecs} loading={loading} />
                        },
                        {
                            key: 'cluster',
                            label: 'Nhà đầu tư tuyển dụng',
                            children: <Table columns={columns} dataSource={jobNonShinecs} />
                        }
                    ]}
                >

                </Tabs>

                <h1 className="text-center text-2xl uppercase font-bold py-4 text-green-700 mb-0 md:mb-4">
                    Nhà đầu tư tuyển dụng
                </h1>
                <Brands brands={brands} />
            </main >
        </>
    )
}

export default CareerPage;