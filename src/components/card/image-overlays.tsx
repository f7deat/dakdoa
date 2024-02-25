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
            <div className="item h-32 2xl:h-[190px]">
                <a href="#">
                    <div className="text-white">
                        <img src={props.image} alt="IMG" className="w-full h-full object-cover h-32 2xl:h-[190px]" loading="lazy" />
                        <div className="linear-gradient h-32 2xl:h-[190px]"></div>
                        <div className="item__overlay">
                            {
                                props.url ? (
                                    <Link to={props.url}>
                                        <h3 className="md:text-2xl text-xl font-bold">{props.title}</h3>
                                    </Link>
                                ) : (<h3 className="md:text-2xl text-xl font-bold">{props.title}</h3>)
                            }
                            <div className="border-b w-16 border-2 mx-4 mb-2 md:mb-4"></div>
                            <div className="item__body px-4">
                                <ul className="list-disc pl-4 md:py-2">
                                    {props.descriptions.map((description, index) => (
                                        <li className="text-sm md:text-base" key={index}>{description}</li>
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