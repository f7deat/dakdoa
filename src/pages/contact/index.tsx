import { FormattedMessage, Helmet, Link, useIntl } from "umi"
import ContactForm from "@/components/forms/contact";
import Header1 from "@/components/header1";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const ContactPage: React.FC = () => {

    const intl = useIntl();

    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: 'CONTACT' })} - Shinec Gia Lai
                </title>
            </Helmet>
            <div className="mb-4 h-32 bg-gray-300 flex items-center justify-center text-white" style={{
                background: `url('https://longhau.com.vn/assets/images/about-awards-bg-bottom.png') #010e007d bottom`,
                backgroundBlendMode: 'multiply'
            }}>
                <Breadcrumb items={[
                    {
                        title: <Link to='/'>
                            <HomeOutlined /> {intl.formatMessage({ id: 'HOME' })}
                        </Link>
                    },
                    {
                        title: 'Liên hệ'
                    }
                ]} />
            </div>
            <main className="container mx-auto">
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 pb-10 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <Header1 active primary>
                                <FormattedMessage id='CONTACT' />
                            </Header1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                <FormattedMessage id='CONTACT_SUBTITLE' />
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactPage