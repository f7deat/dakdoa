import { ArrowRightOutlined } from "@ant-design/icons"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

const NextButton: React.FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = (props) => {
    return (
        <button
            className="h-10 w-10 md:h-12 md:w-12 2xl:h-14 2xl:w-14 bg-white opacity-50 rounded-full flex items-center justify-center hover:opacity-100 transition duration-500"
            {...props}>
            <ArrowRightOutlined />
        </button>
    )
}

export default NextButton