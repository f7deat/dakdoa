import { PhoneFilled } from "@ant-design/icons";

const PhoneButton2: React.FC = () => {
    return (
        <section className="call-buton">
            <a className="cc-calto-action-ripple md:w-20 md:h-20 bottom-8 right-4 md:bottom-40 md:right-20" href="tel:02696333456">
            <PhoneFilled className="md:text-3xl text-xl" />
            <span className="num md:text-lg hidden md:block">02696.333.456</span>
        </a>
        </section>

    )
}

export default PhoneButton2;