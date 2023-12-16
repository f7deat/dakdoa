import overlays from '../../assets/css/overlays.svg';

type CardImageOverlaysProps = {
    image: string;
    maxHeight: number;
}

const CardImageOverlays: React.FC<CardImageOverlaysProps> = (props) => {
    return (
        <div className="relative text-white">
            <div className='absolute top-0 left-0 bottom-0 right-0 hover:bg-[#2CAF58E5] cursor-pointer z-10'></div>
            <img src={props.image} alt="IMG" height={props.maxHeight} />
            <div className="absolute bottom-0 px-8 py-6 bg-contain" style={{
                backgroundImage: `url(${overlays})`
            }}>
                <div className="montserrat text-[27px] font-bold mb-2">
                    Đất công nghiệp tại Hải Phòng
                </div>
                <div className="border-b border-2 w-16 bg-white"></div>
            </div>
        </div>
    )
}

export default CardImageOverlays