import { PhoneFilled } from "@ant-design/icons";
import { FormattedMessage } from "umi";

const PhoneButton: React.FC = () => {
    return (
        <div className="fixed bottom-12 right-10 md:bottom-40 md:right-20 flex animate-bounce"><a href="tel:02696333456">
            <button className="h-12 w-12 md:h-16 md:w-16 absolute bg-white text-green-700 rounded-full -bottom-3 -left-10 border-4 border-green-700 md:text-2xl text-lg shadow">
                <PhoneFilled />
            </button>
            <div className="text-white font-medium bg-green-700 px-8 py-2 rounded-r-xl shadow hidden md:block border">
                <span className="hover:border-b border-dashed">
                <FormattedMessage id='CONTACT' />
                </span>
            </div>
        </a>
        </div>
    )
}

export default PhoneButton;