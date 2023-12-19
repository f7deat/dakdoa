import infra from '../../assets/tree2.svg';
import ContactButton from "../button";

const Page2: React.FC = () => {
    return (
        <div className="relative">
             <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none">
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-train-heading-through-an-industrial-city-25881-large.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="h-body flex flex-col justify-end z-10 relative" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.93%, #FFF 73.8%)'
            }}>
                <div className="relative">
                    <div className="container mx-auto mb-[65px] px-10 md:px-0">
                        <div className="montserrat text-[#0B8936] text-2xl md:text-5xl font-bold mb-4 border-b border-green-600 py-1 md:py-4">Cụm công nghiệp sinh thái hàng đầu</div>
                        <div className="text-slate-400 mb-4 montserrat text-sm md:text-base" style={{
                            maxWidth: 670
                        }}>
                            Friendly neighbors and smiling faces. Southern charm with a coastal vibe.
                            Regardless of where you choose to live on the Mississippi Gulf Coast,
                            you’ll find that you are welcome here. From large neighborhoods with lots
                            of amenities to exclusive enclaves that provide privacy and proximity to
                            nature, Elliott Homes offers a variety of communities that fit your lifestyle.
                        </div>
                        <ContactButton />
                    </div>
                    <img src={infra} alt="IMG" className="absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Page2