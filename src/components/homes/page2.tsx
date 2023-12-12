import Navbar from "../navbar"
import infra from '../../assets/tree2.svg';
import ContactButton from "../button";

const Page2: React.FC = () => {
    return (
        <div className="relative">
            <div className="h-screen bg-slate-100 flex flex-col justify-between">
                <Navbar />

                <div className="relative">
                    <div className="container mx-auto mb-[65px]">
                        <div className="montserrat text-[#0B8936] text-[49px] font-bold mb-4 border-b border-green-600 py-1">Cụm công nghiệp sinh thái hàng đầu</div>
                        <div className="text-slate-400 mb-4 montserrat" style={{
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