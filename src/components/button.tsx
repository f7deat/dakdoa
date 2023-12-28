import { PhoneOutlined } from "@ant-design/icons";
import { FormattedMessage } from "umi";

const ContactButton: React.FC = () => {
    return (
        <>
            <a
                href="tel:02253645365"
                className='flex'>
                <div className="flex gap-2 py-3 w-full px-8 rounded-full text-white hover:text-white items-center bg-gradient-to-b from-orange-500 to-orange-400 poppins font-semibold md:text-lg">
                    <span>
                        <FormattedMessage id='CONTACT_US' />
                    </span>
                    <PhoneOutlined />
                </div>
            </a>
        </>
    )
}

export default ContactButton;