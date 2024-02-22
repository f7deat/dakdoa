import { Table, TableColumnType, Tabs } from "antd";
import { Helmet } from "umi";

const CareerPage: React.FC = () => {

    const columns: TableColumnType<any>[] = [
        {
            title: '#'
        },
        {
            title: 'Vị trí tuyển dụng'
        },
        {
            title: 'Hạn nộp hồ sơ'
        },
        {
            title: 'Tác vụ'
        }
    ]

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
                            children: <Table columns={columns} />
                        },
                        {
                            key: 'cluster',
                            label: 'Nhà máy, xí nghiệp tại Shinec Gia Lai',
                            children: <Table columns={columns} />
                        }
                    ]}
                >

                </Tabs>
            </main>
        </>
    )
}

export default CareerPage;