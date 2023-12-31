import { Link } from "umi";

type CardImageOverlaysProps = {
    image: string;
    title: string;
    descriptions: string[];
    url?: string;
}

const CardImageOverlays: React.FC<CardImageOverlaysProps> = (props) => {
    return (
        <div className="relative card-image-overlay">
            <div className="item">
                <a href="#">
                    <div className="text-white">
                        <img src={props.image} alt="IMG" className="w-full h-full object-cover" loading="lazy" />
                        <div className="linear-gradient"></div>
                        <div className="item__overlay">
                            {
                                props.url ? (
                                    <Link to={props.url}>
                                        <h3 className="md:text-[27px] text-xl font-bold montserrat">{props.title}</h3>
                                    </Link>
                                ) : (<h3 className="md:text-[27px] text-xl font-bold montserrat">{props.title}</h3>)
                            }
                            <div className="border-b w-16 border-2 mx-4 mb-4"></div>
                            <div className="item__body px-4">
                                <ul className="list-disc pl-4">
                                    {props.descriptions.map((description, index) => (
                                        <li key={index}>{description}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CardImageOverlays