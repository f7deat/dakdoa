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
            <div className="bg-cover bg-no-repeat bg-fixed bg-right bg-green-800 relative"
                style={{
                    backgroundImage: `url(${bg})`
                }}>
                <div className="flex h-full flex-col justify-between w-screen" >
                    <div className="relative h-full" style={{
                        background: 'linear-gradient(114deg, rgba(11, 137, 54, 0.67) 0%, #00812C 68.71%)'
                    }}>
                        <div className="h-full flex items-center justify-center" style={{
                            backgroundImage: `url(${infra})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'bottom right'
                        }}>
                            <main className="container mx-auto">
                                <section className="text-gray-600 body-font relative">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="flex flex-col text-center w-full mb-12">
                                            <Header1 active >
                                                <FormattedMessage id='CONTACT' />
                                            </Header1>
                                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-200">
                                                <FormattedMessage id='CONTACT_SUBTITLE' />
                                            </p>
                                        </div>
                                        <ContactForm />
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage