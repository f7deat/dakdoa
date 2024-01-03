import { PhoneOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { FormattedMessage } from "umi";

const ContactButton: React.FC = () => {
    return (
        <>
            <Tooltip title="0269.6333.456" placement="bottom">
                <a
                    href="tel:02696333456"
                    className='flex'>
                    <div className="flex gap-2 w-full rounded-full text-white hover:text-white items-center bg-gradient-to-b from-orange-500 to-orange-400 poppins font-semibold md:text-lg">
                        <div className="pl-4">
                            <FormattedMessage id='CONTACT_US' />
                        </div>
                        <div className="bg-white h-full rounded-r-full w-14 flex justify-center items-center text-2xl">
                            <PhoneOutlined className="text-orange-500" />
                        </div>
                    </div>
                </a>
            </Tooltip>
        </>
    )
}

export default ContactButton;