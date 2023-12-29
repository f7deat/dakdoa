import { GoogleCircleFilled, TwitterCircleFilled, FacebookFilled } from "@ant-design/icons"

const ShareButton : React.FC = () => {
    return (
        <div className="flex mb-4 gap-2 justify-end">
            <button className="h-12 w-12 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl"><FacebookFilled /></button>
            <button className="h-12 w-12 bg-sky-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl"><TwitterCircleFilled /></button>
            <button className="h-12 w-12 bg-red-600 rounded-full opacity-75 hover:opacity-100 transition duration-700 text-white text-2xl"><GoogleCircleFilled /></button>
        </div>
    )
}

export default ShareButton