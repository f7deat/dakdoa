import { FormattedMessage, Helmet, useIntl } from "umi"
import ContactForm from "@/components/forms/contact";
import Header1 from "@/components/header1";
import bg from '../../assets/css/bg-feature.gif';
import infra from '../../assets/tree-opa.svg';

const ContactPage: React.FC = () => {

    const intl = useIntl();

    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: 'CONTACT' })} - Shinec Gia Lai
                </title>
            </Helmet>
            <main className="container mx-auto">
                <section className="text-gray-600 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
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