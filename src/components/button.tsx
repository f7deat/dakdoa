import { PhoneOutlined } from "@ant-design/icons";
import { Popover, Tooltip } from "antd";
import { FormattedMessage } from "umi";

const ContactButton: React.FC = () => {
    return (
        <>
            <Popover title="Hotline:" content="0269.6333.456" placement="bottom" trigger="hover">
                <a
                    href="tel:02696333456"
                    className='btn'>
                    <div className="flex btnInner py-3 px-4 gap-2 w-full rounded-full text-white hover:text-white items-center bg-gradient-to-b from-orange-500 to-orange-400 poppins font-semibold md:text-lg">
                            <FormattedMessage id='CONTACT_US' />
                        <PhoneOutlined />
                    </div>
                </a>
            </Popover>
        </>
    )
}

export default ContactButton;