import { FormattedMessage, Helmet, useIntl } from "umi"
import ContactForm from "@/components/forms/contact";

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
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                                <FormattedMessage id='CONTACT' />
                            </h1>
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