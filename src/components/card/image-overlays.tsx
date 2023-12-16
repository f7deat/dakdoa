type CardImageOverlaysProps = {
    image: string;
    maxHeight: number;
}

const CardImageOverlays: React.FC<CardImageOverlaysProps> = (props) => {
    return (
        <div className="relative card-image-overlay">
            <div className="item">
            <a href="#">
                <div className="text-white">
                    <img src={props.image} alt="IMG" className="w-full" />
                    <div className="linear-gradient"></div>
                    <div className="item__overlay">
                        <h3 className="text-[27px] font-bold montserrat">Đất công nghiệp tại Hải Phòng</h3>
                        <div className="border-b w-16 border-2 mx-4 mb-4"></div>
                        <div className="item__body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </div>
    )
}

export default CardImageOverlays