import { Helmet, useIntl } from "umi"

const ContactPage: React.FC = () => {

    const intl = useIntl()

    return (
        <>
            <Helmet>
                <title>
                    {intl.formatMessage({ id: 'CONTACT' })} - Shinec Gia Lai
                </title>
            </Helmet>
        </>
    )
}

export default ContactPage