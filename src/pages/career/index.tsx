import { apiCatalogList } from "@/services/catalog";
import { PhoneOutlined } from "@ant-design/icons";
import { Button, Table, TableColumnType, Tabs, Tooltip } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { FormattedMessage, Helmet } from "umi";

const CareerPage: React.FC = () => {

    const columns: TableColumnType<any>[] = [
        {
            title: '#',
            render: (value, record, index) => index + 1,
            width: 50
        },
        {
            title: 'Vị trí tuyển dụng',
            dataIndex: 'name'
        },
        {
            title: 'Ngày đăng tải',
            render: (value, record) => moment(record.createdDate).format('DD/MM/YYYY hh:mm:ss')
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
    }, []);

    return (
        <>
            <Helmet>
                <title>Nghề nghiệp</title>
            </Helmet>
            <main className="container mx-auto py-4 md:py-8 2xl:py-10">
                <h1 className="text-center text-2xl md:text-4xl 2xl:text-5xl uppercase font-bold py-4 text-green-700 mb-0 md:mb-4">
                    Nghề nghiệp
                </h1>
                <Tabs
                    items={[
                        {
                            key: 'shinec',
                            label: 'Shinec Gia Lai',
                            children: <Table columns={columns} dataSource={jobShinecs} loading={loading} />
                        },
                        {
                            key: 'cluster',
                            label: 'Nhà máy, xí nghiệp tại Shinec Gia Lai',
                            children: <Table columns={columns} dataSource={jobNonShinecs} />
                        }
                    ]}
                >

                </Tabs>
            </main>
        </>
    )
}

export default CareerPage;