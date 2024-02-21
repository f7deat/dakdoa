import { PhoneFilled } from "@ant-design/icons";
import { FormattedMessage } from "umi";

const ButtonContact: React.FC = () => {
    return (
        <div className="fixed bottom-10 right-10 md:bottom-20 md:right-20 flex">
            <button className="h-12 w-12 md:h-16 md:w-16 absolute bg-white text-green-700 rounded-full -bottom-3 -left-10 border-4 border-green-700 md:text-2xl text-lg shadow">
                <PhoneFilled />
            </button>
            <div className="text-white font-medium bg-green-700 px-8 py-2 rounded-r-xl shadow hidden md:block">
                <FormattedMessage id='CONTACT' />
            </div>
        </div>
    )
}

export default ButtonContact;