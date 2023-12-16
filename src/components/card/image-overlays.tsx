type CardImageOverlaysProps = {
    image: string;
    title: string;
    description?: string;
    height?: number;
}

const CardImageOverlays: React.FC<CardImageOverlaysProps> = (props) => {
    return (
        <div className="relative card-image-overlay">
            <div className="item" style={{
                height: props.height
            }}>
            <a href="#">
                <div className="text-white">
                    <img src={props.image} alt="IMG" className="w-full" loading="lazy" />
                    <div className="linear-gradient" style={{
                height: props.height
            }}></div>
                    <div className="item__overlay">
                        <h3 className="text-[27px] font-bold montserrat">{props.title}</h3>
                        <div className="border-b w-16 border-2 mx-4 mb-4"></div>
                        <div className="item__body">
                            {props.description}
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </div>
    )
}

export default CardImageOverlays