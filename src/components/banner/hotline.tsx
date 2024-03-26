import { PhoneOutlined } from "@ant-design/icons";
import infra from '../../assets/tree-opa.svg';

const Hotline: React.FC = () => {
    return (
        <div className="h-[150px] border-2 border-white md:h-[180px] bg-green-700 rounded-lg w-full flex flex-col justify-center items-center gap-4 text-white uppercase relative"
            style={{
                backgroundImage: `url(${infra})`,
                backgroundSize: 'cover'
            }}>
            <div className="font-semibold text-2xl md:text-3xl">
                <PhoneOutlined /> Hotline
            </div>
            <div className="font-bold text-3xl md:text-4xl">
                <a href="tel:02696333456">0269.6333.456</a>
            </div>
        </div>
    )
}

export default Hotline;